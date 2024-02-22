import React from "react";
import "./report.css";

export const Report = () => {
  return (
    <div className="Report-section">
      <div className="weather-report">
        <div className="report-head">
          <h2>Popular Cities</h2>
        </div>
        <div className="weather-info">
          <div className="weather-details">
            <img
              src="https://shimmering-heliotrope-f0efd9.netlify.app/static/media/clear.063145c60a96e8911a84.png"
              alt="image1"
            />
            <div className="sky">
              <span>19.47</span>
              <p>Clear</p>
            </div>
          </div>
          <h3>Rome US</h3>
        </div>
      </div>
    </div>
  );
};
