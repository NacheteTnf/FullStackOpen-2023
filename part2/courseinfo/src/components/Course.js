import React from "react";

const Header = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
    </div>
  );
};

const Part = (props) => {
  return (
    <div>
      <p>
        {props.parts.name} : {props.parts.exercises}
      </p>
    </div>
  );
};

const Content = (props) => {
  const differentParts = props.parts.map((part) => {
    return <Part key={part.id} parts={part} />;
  });

  return <div>{differentParts}</div>;
};

const Total = (props) => {
  const totalAmount = props.parts.reduce(
    (sum, order) => sum + order.exercises,
    0
  );
  return (
    <div>
      <b>total of {totalAmount} exercises</b>
    </div>
  );
};

const Course = (props) => {
  return (
    <>
      <Header name={props.course.name} />
      <Content parts={props.course.parts} />
      <Total parts={props.course.parts} />
    </>
  );
};

export default Course;
