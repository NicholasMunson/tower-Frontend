import React from "react";
import WineCard from "./WineCard.js";
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

  const wineCard = props.wineData.map((wine) => (
    <WineCard
      wine={wine}
      handleDisplayChange={props.handleDisplayChange}
      handleWineDelete={props.handleWineDelete}
      updateWineCard={props.updateWineCard}
      key={wine.id}
    />
  ));
  const revWineCard = wineCard.reverse();

  return <div className="wine-card-container">{revWineCard}</div>;
};

export default WineList;
