import React, { Fragment, useState } from "react";
import AddBeer from "./AddBeer.js";
import AddWine from "./AddWine.js";

const Add = (props) => {
  const [display, setDisplay] = useState("a");

  const handleChangeDisplay = (newDisplay) => {
    setDisplay(newDisplay);
  };

  return (
    <Fragment>
      {display === "a" ? (
        <AddBeer
          handleChangeDisplay={handleChangeDisplay}
          handleDisplayChange={props.handleDisplayChange}
        />
      ) : (
        <AddWine handleChangeDisplay={handleChangeDisplay} />
      )}
    </Fragment>
  );
};

export default Add;
