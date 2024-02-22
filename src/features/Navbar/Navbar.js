import React from "react";
import "boxicons";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <div className="navbar">
      <nav>
        <img src="" alt="settings" />
        <h1>Weather 360</h1>
        <div className="search">
          <input type="text" placeholder="Search" />
          <span>
            <img src="" alt="search image" />
          </span>
        </div>
        <div className="mic">
          <img src="" alt="microphone" />
        </div>
      </nav>
    </div>
  );
};
