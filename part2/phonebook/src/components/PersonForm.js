import React from "react";

const PersonForm = ({
  addNewPerson,
  newName,
  newNumber,
  handleNameChange,
  handleNumberChange,
}) => {
  return (
    <form onSubmit={addNewPerson}>
      <div>
        name: <input required value={newName} onChange={handleNameChange} />
      </div>
      <div>
        number:{" "}
        <input required value={newNumber} onChange={handleNumberChange} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default PersonForm;
