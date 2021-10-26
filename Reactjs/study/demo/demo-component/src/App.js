// import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";

function App() {
  const handle = (data) => {
    console.log(data);
  };
  return (
    <div>
      <Header name="Home" />
      <Header name="Login" handleClick={handle} />
      <Header name="logout" handleClick={handle} />
    </div>
  );
}

export default App;
