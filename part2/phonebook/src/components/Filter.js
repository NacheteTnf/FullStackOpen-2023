import React from "react";

const Filter = ({ searchName, handleFoundChange }) => {
  return (
    <div>
      filter shown with{" "}
      <input value={searchName} onChange={handleFoundChange} />
    </div>
  );
};

export default Filter;
