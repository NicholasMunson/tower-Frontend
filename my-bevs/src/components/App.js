import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import BeerList from "./BeerList";
import WineList from "./WineList";
import Add from "./Add";
import Footer from "./Footer";
import Home from "./Home";
import About from "./About";
import EditBeverage from "./EditBeverage";
import { API_ENDPOINTS } from "../config/api";
import "../styles/App.css";
import PieChartHome from "./PieChartHome";

const App = () => {
  const [beerData, setBeerData] = useState([]);
  const [wineData, setWineData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [display, setDisplay] = useState("a");
  const [currentBeer, setCurrentBeer] = useState({
    brewery: "",
    name: "",
    style: "",
    rating: "",
    ABV: "",
    notes: "",
    id: "",
  });
  const [currentWine, setCurrentWine] = useState({
    winery: "",
    region: "",
    style: "",
    rating: "",
    ABV: "",
    notes: "",
    id: "",
  });
  const dataSet = () => {
    setIsLoaded(false);
    Promise.all([
      fetch(API_ENDPOINTS.BEER.GET()).then((response) => response.json()),
      fetch(API_ENDPOINTS.WINE.GET()).then((response) => response.json()),
    ])
      .then(([beerResponse, wineResponse]) => {
        setBeerData(beerResponse.beer || []);
        setWineData(wineResponse.wine || []);
        setIsLoaded(true);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setIsLoaded(true); // Set to true even on error to show UI
      });
  };

  useEffect(() => {
    dataSet();
  }, []);

  const handleBeerDelete = (event, id) => {
    event.preventDefault();
    fetch(API_ENDPOINTS.BEER.DELETE(id), {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response)
      .then(handleErrors)
      .then(dataSet());
  };

  const handleWineDelete = (event, id) => {
    event.preventDefault();
    fetch(API_ENDPOINTS.WINE.DELETE(id), {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response)
      .then(handleErrors)
      .then(dataSet());
  };

  const handleErrors = (response) => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response;
  };

  const handleDisplayChange = (display) => {
    setDisplay(display);
  };

  const handleDisplayChangeBack = () => {
    setDisplay("a");
  };

  const handleChange = (event) => {
    event.preventDefault();
    const key = event.target.name;
    const value = event.target.value;
    setCurrentBeer({
      ...currentBeer,
      [key]: value,
    });
    setCurrentWine({
      ...currentWine,
      [key]: value,
    });
  };
  const updateWineCard = (wine) => {
    setCurrentWine({
      winery: `${wine.winery}`,
      region: `${wine.name}`,
      style: `${wine.style}`,
      rating: `${wine.rating}`,
      ABV: `${wine.ABV}`,
      notes: `${wine.notes}`,
      id: `${wine.id}`,
    });
  };

  const updateBevCard = (beer) => {
    setCurrentBeer({
      brewery: `${beer.brewery}`,
      name: `${beer.name}`,
      style: `${beer.style}`,
      rating: `${beer.rating}`,
      ABV: `${beer.ABV}`,
      notes: `${beer.notes}`,
      id: `${beer.id}`,
    });
  };

  const handleUpdateBeerCard = (event, id) => {
    event.preventDefault();
    const data = new FormData(event.target);

    fetch(API_ENDPOINTS.BEER.PUT(id), {
      method: "PUT",
      body: JSON.stringify({
        brewery: data.get("brewery"),
        name: data.get("name"),
        style: data.get("style"),
        rating: data.get("rating"),
        ABV: data.get("ABV"),
        notes: data.get("notes"),
      }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response)
      .then(handleErrors)
      .catch((err) => {
        console.error(err);
      })
      .then(dataSet);
  };

  const handleUpdateWineCard = (event, id) => {
    event.preventDefault();
    const data = new FormData(event.target);

    fetch(API_ENDPOINTS.WINE.PUT(id), {
      method: "PUT",
      body: JSON.stringify({
        winery: data.get("winery"),
        region: data.get("region"),
        style: data.get("style"),
        rating: data.get("rating"),
        ABV: data.get("ABV"),
        notes: data.get("notes"),
      }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response)
      .then(handleErrors)
      .catch((err) => {
        console.error(err);
      })
      .then(dataSet);
  };

  return (
    <Router>
      <React.Fragment>
        <div className="app-container">
          <Header />
          <Routes>
            <Route path="/" element={<About />} />
            <Route
              path="/home"
              element={
                <Home
                  beerData={beerData}
                  wineData={wineData}
                  isLoaded={isLoaded}
                />
              }
            />
            <Route
              path="/beer-list"
              element={
                display === "a" ? (
                  <BeerList
                    beerData={beerData}
                    isLoaded={isLoaded}
                    handleDisplayChange={handleDisplayChange}
                    handleBeerDelete={handleBeerDelete}
                    updateBevCard={updateBevCard}
                  />
                ) : (
                  <EditBeverage
                    type="beer"
                    currentBeverage={currentBeer}
                    handleChange={handleChange}
                    handleUpdate={handleUpdateBeerCard}
                    handleDisplayChangeBack={handleDisplayChangeBack}
                  />
                )
              }
            />
            <Route
              path="/wine-list"
              element={
                display === "a" ? (
                  <WineList
                    wineData={wineData}
                    isLoaded={isLoaded}
                    handleDisplayChange={handleDisplayChange}
                    handleWineDelete={handleWineDelete}
                    updateWineCard={updateWineCard}
                  />
                ) : (
                  <EditBeverage
                    type="wine"
                    currentBeverage={currentWine}
                    handleChange={handleChange}
                    handleUpdate={handleUpdateWineCard}
                    handleDisplayChangeBack={handleDisplayChangeBack}
                  />
                )
              }
            />
            <Route
              path="/add"
              element={
                display === "a" ? (
                  <Add
                    beerData={beerData}
                    handleDisplayChange={handleDisplayChange}
                  />
                ) : (
                  <BeerList />
                )
              }
            />
          </Routes>
        </div>
        <Footer />
      </React.Fragment>
    </Router>
  );
};

export default App;
