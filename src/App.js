import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [breweryName, setBreweryName] = useState(null);

  useEffect(() => {
    fetch("https://api.openbrewerydb.org/breweries")
      .then((results) => results.json())
      .then((data) => {
        const brewery = data[0].name;
        console.log(brewery);
        setBreweryName(brewery);
      });
  }, []);
  return (
    <div className="App">
      <p>You clicked {count} times </p>
      <button onClick={() => setCount(count + 1)}>Click me!</button>
      <p>Name: {!breweryName ? "Loading..." : `${breweryName}`}</p>
    </div>
  );
}

export default App;
