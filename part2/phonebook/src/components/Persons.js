import React from "react";

const Persons = ({ filteredPersons, handleDeletePerson }) => {
  return (
    <div>
      <div>
        {filteredPersons.map((person, i) => (
          <div key={i}>
            <b>
              {person.name}: {person.number}
            </b>
            <button onClick={() => handleDeletePerson(person.id)}>
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Persons;
