import React, { Fragment, useState } from "react";
import AddBeverage from "./AddBeverage.js";
import "../styles/add.css";

const Add = (props) => {
  const [display, setDisplay] = useState("beer");

  const handleChangeDisplay = (newDisplay) => {
    setDisplay(newDisplay);
    // Notify parent component about tab change
    if (props.onTabChange) {
      props.onTabChange(newDisplay);
    }
  };

  return (
    <Fragment>
      <div
        className={`add-container ${
          display === "beer" ? "beer-background" : "wine-background"
        }`}
      >
        <div className="tab-navigation">
          <button
            className={`tab-button ${display === "beer" ? "active" : ""}`}
            onClick={() => handleChangeDisplay("beer")}
          >
            Add Beer
          </button>
          <button
            className={`tab-button ${display === "wine" ? "active" : ""}`}
            onClick={() => handleChangeDisplay("wine")}
          >
            Add Wine
          </button>
        </div>

        <div className="tab-content">
          <AddBeverage
            type={display}
            onBeverageAdded={props.onBeverageAdded}
            onNavigateToList={props.onNavigateToList}
          />
        </div>
      </div>
    </Fragment>
  );
};

export default Add;
