import {
  BrowserRouter as Router
} from "react-router-dom";
import './App.css';
import Login from "./pages/login/login";
import AppRouter from "./shared/store/menu_state";
import TopMenu from './shared/top_menu/top_menu';


function App() {
  return (
    <Router>
      <TopMenu />
      <Login />

      <AppRouter />
    </Router>
  );
}

export default App;
