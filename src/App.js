import React, { Fragment } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import WookieMovies from "./components/WookieMovies";

function App() {
  return (
    <Fragment>
      <Router>
        <Switch>
          <Navbar />
          <WookieMovies />
          <Route />
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
