import React from "react";
import "../styles/about.css";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1>Welcome to MyBevs</h1>
        <p>
          MyBevs is your personal beverage tracking companion! Keep track of
          your favorite wines and beers, rate them, and never forget a great
          drink again.
        </p>

        <h2>What you can do:</h2>
        <ul>
          <li>
            <strong>Add beverages:</strong> Record new wines and beers with
            details like brewery/winery, style, ABV, and your personal notes
          </li>
          <li>
            <strong>Rate & review:</strong> Give each beverage a rating and add
            detailed tasting notes
          </li>
          <li>
            <strong>View your collection:</strong> Browse through your saved
            wines and beers
          </li>
          <li>
            <strong>Track your preferences:</strong> See visual charts of your
            beverage collection
          </li>
          <li>
            <strong>Edit & update:</strong> Modify your entries anytime to keep
            them current
          </li>
        </ul>

        <p className="mobile-note">
          <strong>Note:</strong> MyBevs is optimized for mobile devices. For the
          best experience, use it on your phone or in a smaller browser window.
        </p>

        <div className="cta-section">
          <p>Ready to start building your beverage collection?</p>
          <p>Use the navigation menu above to get started!</p>
        </div>
      </div>
    </div>
  );
};

export default About;
