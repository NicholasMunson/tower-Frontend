import React from "react";
import BeverageCard from "./BeverageCard.js";
import "../styles/card-container.css";

const WineList = (props) => {
  if (!props.isLoaded) {
    return (
      <div className="wine-card-container">
        <div className="loading-message">
          <h3>Loading wines...</h3>
          <p>Please wait while we fetch your wine collection.</p>
        </div>
      </div>
    );
  }

  if (props.wineData.length === 0) {
    return (
      <div className="wine-card-container">
        <div className="empty-message">
          <h3>No wines found</h3>
          <p>Add some wines to your collection!</p>
        </div>
      </div>
    );
  }

  const wineCards = props.wineData.map((wine) => (
    <BeverageCard
      key={wine.id}
      beverage={wine}
      type="wine"
      handleEditClick={props.handleEditClick}
      handleDelete={props.handleWineDelete}
      handleUpdate={props.updateWineCard}
    />
  ));
  const revWineCards = wineCards.reverse();

  return <div className="wine-card-container">{revWineCards}</div>;
};

export default WineList;
