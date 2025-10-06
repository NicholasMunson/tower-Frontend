import React from "react";
import BeverageCard from "./BeverageCard.js";
import "../styles/card-container.css";

const BeerList = (props) => {
  if (!props.isLoaded) {
    return (
      <div className="card-container">
        <div className="loading-message">
          <h3>Loading beers...</h3>
          <p>Please wait while we fetch your beer collection.</p>
        </div>
      </div>
    );
  }

  if (props.beerData.length === 0) {
    return (
      <div className="card-container">
        <div className="empty-message">
          <h3>No beers found</h3>
          <p>Add some beers to your collection!</p>
        </div>
      </div>
    );
  }

  const beerCards = props.beerData.map((beer) => (
    <BeverageCard
      key={beer.id}
      beverage={beer}
      type="beer"
      handleDisplayChange={props.handleDisplayChange}
      handleDelete={props.handleBeerDelete}
      handleUpdate={props.updateBevCard}
    />
  ));
  const revBeerCards = beerCards.reverse();
  return <div className="card-container">{revBeerCards}</div>;
};

export default BeerList;
