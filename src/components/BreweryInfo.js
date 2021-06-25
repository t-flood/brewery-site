import React from "react";
const BreweryInfo = ({ brewery }) => {
  return (
    <div className="card">
      <h1>{brewery.name}</h1>
      <p>
        {brewery.city}, {brewery.state} {brewery.postal_code}
      </p>
    </div>
  );
};

export default BreweryInfo;
