import React, { Fragment, useState } from "react";
import AddBeverage from "./AddBeverage.js";
import "../styles/add.css";

const Add = (props) => {
  const [display, setDisplay] = useState("beer");

  const handleChangeDisplay = (newDisplay) => {
    setDisplay(newDisplay);
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
          <AddBeverage type={display} />
        </div>
      </div>
    </Fragment>
  );
};

export default Add;
