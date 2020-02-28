import React from 'react';
import './App.css';
import './styles/hero.css';
import Register from "components/Register";
import Login from "components/Login";
import Hero from "components/Hero";
import EnterBtn from "components/EnterBtn";
import TakeOffPage from "./pages/TakeOffPage";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Home = () => {
  return (<>
    <Hero></Hero>
    <EnterBtn></EnterBtn>
  </>);
}

const App = () => {
  return (
    <div className="App">
      <Router>
          {/* <Navbar> needs to be created with login, logout and about
          </Navbar> */}
         <header className="App-header">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/takeoff" component={TakeOffPage} />
            </Switch>
          </header>
      </Router>
    </div>
  )
}

export default App;
