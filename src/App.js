import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Search from "./components/Search";
import BreweryList from "./components/BreweryList";

const App = () => {
  // const [count, setCount] = useState(0);
  const [breweries, setBreweries] = useState("");
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchBreweries = async () => {
      const result =
        await axios(`https://api.openbrewerydb.org/breweries?bystate=${query}

      `);
      console.log(result.data);
      setBreweries(result.data);
      setIsLoading(false);
    };
    fetchBreweries();
  });

  return (
    <div className="container">
      <Search getQuery={(query) => setQuery(query)} />
      <BreweryList isLoading={isLoading} breweries={breweries} />
    </div>
  );
};

export default App;
