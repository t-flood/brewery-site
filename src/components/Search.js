import { getSuggestedQuery } from "@testing-library/react";
import React, { useState } from "react";

const Search = () => {
  const [text, setText] = useState("");

  const onChange = (query) => {
    setText(query);
    getSuggestedQuery(query);
  };

  return (
    <section className="search">
      <form>
        <input
          type="text"
          className="form-control"
          placeholder="What state do you want to find breweries in?"
          value={text}
          onChange={(e) => onChange(e.target.value)}
          autoFocus
        />
      </form>
    </section>
  );
};

export default Search;
