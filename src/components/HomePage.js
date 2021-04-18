import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  const levels = ["easy", "medium", "hard"];
  return (
    <div className="homepage">
      <div className="homepage-header">
        <h1>
          <span style={{color: "red"}}>MEMORY</span> GAME
        </h1>
      </div>
      <div className="secondary-header">
        <h2>Choose Level!</h2>
      </div>
      <div className="levels">
        {levels.map((level) => (
          <Link to={`/${level}`} key={level}>
            <div
              className="btn-rotate"
              data-back="Start"
              data-front={`${level}`}
            />
          </Link>
        ))}
      </div>
      <div className="legendary">
        <Link to="/legendary" className="legendary-button">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Legendary
        </Link>
      </div>
      <div className="author">
        <p>Made By Nika P.</p>
      </div>
    </div>
  );
};

export default HomePage;
