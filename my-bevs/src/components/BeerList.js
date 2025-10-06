import React from "react";
import BeerCard from "./BeerCard.js";
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

  const beerCard = props.beerData.map((beer) => (
    <BeerCard
      handleDisplayChange={props.handleDisplayChange}
      handleBeerDelete={props.handleBeerDelete}
      updateBevCard={props.updateBevCard}
      beer={beer}
      key={beer.id}
    />
  ));
  const revBeerCard = beerCard.reverse();
  return <div className="card-container">{revBeerCard}</div>;
};

export default BeerList;
