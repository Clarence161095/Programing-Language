import {
  BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import './App.css';
import Home from './pages/home';
import TopMenu from './shared/top-menu';


function App() {
  return (
    <Router>
      <TopMenu />

      <Switch>

        <Route path="/Home">
          <Home />
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
