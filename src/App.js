import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// Components
import HomePage from "./components/HomePage";
import Game from "./components/Game";

// Levels
import { data } from "./data";

const App = () => {
  const { easy, medium, hard, legendary } = data;
  return (
    <Router>
      <div className="container">
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/easy">
            <Game sequence={easy} level="Easy" />
          </Route>
          <Route path="/medium">
            <Game sequence={medium} level="Medium" />
          </Route>
          <Route path="/hard">
            <Game sequence={hard} level="Hard" />
          </Route>
          <Route path="/legendary">
            <Game sequence={legendary} level="Legendary" />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
