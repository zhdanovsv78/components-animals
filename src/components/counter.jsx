import React, { useState } from "react";

const Counter = (props) => {
  //   console.log(props);

  const { value } = props;

  const getClasses = () => {
    let classes = "badge m-2 p-3 ";
    return (classes += value === 0 ? "bg-warning" : "bg-primary");
  };

  return (
    <div>
      <span className='m-3'>{props.name}</span>
      <span className={getClasses()}>{props.value}</span>
      <button
        className='btn btn-primary m-2'
        onClick={() => props.onIncrement(props.id)}
      >
        +
      </button>
      <button
        className='btn btn-info m-2'
        onClick={() => props.onDecrement(props.id)}
      >
        -
      </button>
      <button
        className='btn btn-danger m-2'
        onClick={() => props.onDelete(props.id)}
      >
        Delete
      </button>
    </div>
  );
};

export default Counter;
