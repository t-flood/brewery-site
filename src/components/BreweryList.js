import React from "react";
import BreweryInfo from "./BreweryInfo";

const BreweryList = ({ breweries, isLoading }) => {
  return isLoading ? (
    <p>Loading...</p>
  ) : (
    <section className="cards">
      {breweries.map((breweries) => (
        <BreweryInfo key={breweries.id} brewery={breweries} />
      ))}
    </section>
  );
};

export default BreweryList;
