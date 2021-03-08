import './App.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Login from './components/Pages/Login';
import Todo from './components/Pages/Todo/Todo';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
//import LoginForm from "./components/Forms/LoginForm";


function App() {
  return (
    <Router>
      <body className="Login">
        <div className="Fondo-Login">
          <header>
            <Header></Header>
          </header>
          <main>
            <Switch>
                <Route path="/" exact>
                    <Login></Login>
                </Route>
                <Route path="/todos" exact>
                  <div className="Todo-App">
                      <Todo />
                  </div>
                </Route>
            </Switch>
          </main>
        </div>
        <Footer></Footer>
      </body>
    </Router>
  );
}

export default App;
