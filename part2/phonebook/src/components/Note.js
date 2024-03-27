import React from "react";

const Note = ({ message, type }) => {
  if (!message) {
    return null;
  }

  const style = {
    padding: "10px",
    marginBottom: "10px",
    borderRadius: "5px",
    borderStyle: "Solid",
    fontSize: "20px",
    color: type === "success" ? "green" : "red",
    backgroundColor: "lightgrey",
    border: type === "success" ? "1px solid green" : "1px solid red",
  };

  return <div style={style}>{message}</div>;
};

export default Note;
