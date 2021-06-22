import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);

  useEffect(() => {
    fetch("https://randomuser.me/api/")
      .then((results) => results.json())
      .then((data) => {
        const { name } = data.results[0];
        setFirstName(name.first);
        setLastName(name.last);
      });
  }, []);
  return (
    <div className="App">
      <p>You clicked {count} times </p>
      <button onClick={() => setCount(count + 1)}>Click me!</button>
      <p>
        Name:{" "}
        {!firstName || !lastName ? "Loading..." : `${firstName} ${lastName}`}
      </p>
    </div>
  );
}

export default App;
