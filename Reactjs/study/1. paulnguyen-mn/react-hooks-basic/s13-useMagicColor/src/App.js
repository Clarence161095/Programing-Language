import queryString from 'query-string';
import React, { useEffect, useState, useRef } from 'react';
import './App.scss';
import ColorBox from './components/ColorBox';
import MagicBox from './components/MagicBox';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import PostList from './components/PostList';
import Pagination from './components/Pagination';
import PostFiltersForm from './components/PostFiltersForm';
import Clock from './components/Clock';
import BetterClock from './components/BetterClock';

function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, title: 'I love Easy Frontend! 😍' },
    { id: 2, title: 'We love Easy Frontend! 🥰' },
    { id: 3, title: 'They love Easy Frontend! 🚀' },
  ]);
  // const [maxID, setMaxID] = useState(todoList.length + 1);

  const [postList, setPostList] = useState([]);
  const [pagination, setPagination] = useState({
    _page: 1,
    _limit: 10,
    _totalRows: 1,
  });
  const [filters, setFilters] = useState({
    _limit: 10,
    _page: 1,
  });

  useEffect(() => {
    async function fetchPostList() {
      // ...
      try {
        // _limit=10&_page=1
        const paramsString = queryString.stringify(filters);
        const requestUrl = `http://js-post-api.herokuapp.com/api/posts?${paramsString}`;
        const response = await fetch(requestUrl);
        const responseJSON = await response.json();
        console.log({ responseJSON });

        const { data, pagination } = responseJSON;
        setPostList(data);
        setPagination(pagination);
      } catch (error) {
        console.log('Failed to fetch post list: ', error.message);
      }
    }

    console.log('POST list effect');
    fetchPostList();
  }, [filters]);

  useEffect(() => {
    console.log('TODO list effect');
  });

  function handlePageChange(newPage) {
    console.log('New page: ', newPage);
    setFilters({
      ...filters,
      _page: newPage,
    });
  }

  function handleTodoClick(todo) {
    console.log(todo);
    const index = todoList.findIndex((x) => x.id === todo.id);
    if (index < 0) return;

    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
  }

  const maxID = useRef({ id: 4 });

  function handleTodoFormSubmit(formValues) {
    console.log('Form submit: ', formValues);

    // add new todo to current todo list
    // setMaxID(maxID + 1);
    const newTodo = {
      id: maxID.current.id++,
      ...formValues,
    };
    const newTodoList = [...todoList];
    newTodoList.push(newTodo);
    setTodoList(newTodoList);
  }

  function handleFiltersChange(newFilters) {
    console.log('New filters: ', newFilters);
    setFilters({
      ...filters,
      _page: 1,
      title_like: newFilters.searchTerm,
    });
  }

  const [showClock, setShowClock] = useState(true);

  return (
    <div className='app'>
      <MagicBox />

      <ColorBox />

      <TodoList todos={todoList} onTodoClick={handleTodoClick} />

      <TodoForm onSubmit={handleTodoFormSubmit} />

      {showClock && <Clock />}
      <BetterClock />
      <button
        onClick={() => setShowClock(showClock === false ? true : false)}
      >
        Hide clock
      </button>

      <h1>PostList</h1>
      <PostFiltersForm onSubmit={handleFiltersChange} />

      <PostList posts={postList} />
      <Pagination
        pagination={pagination}
        onPageChange={handlePageChange}
      />
    </div>
  );
}

export default App;
