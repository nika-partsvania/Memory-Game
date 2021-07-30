import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// Components
import HomePage from "./pages/Home";
import Game from "./pages/Game";

// Levels
import { data } from "./data";

const App = () => {
  const { easy, medium, hard, legendary } = data;
  const secondsForMemorization = 13;
  return (
    <Router>
      <div className="container">
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/easy">
            <Game
              sequence={easy}
              secondsToMemorize={secondsForMemorization}
              level="Easy"
            />
          </Route>
          <Route path="/medium">
            <Game
              sequence={medium}
              secondsToMemorize={secondsForMemorization}
              level="Medium"
            />
          </Route>
          <Route path="/hard">
            <Game
              sequence={hard}
              secondsToMemorize={secondsForMemorization}
              level="Hard"
            />
          </Route>
          <Route path="/legendary">
            <Game
              sequence={legendary}
              secondsToMemorize={secondsForMemorization}
              level="Legendary"
            />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
