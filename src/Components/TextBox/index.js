import React from "react";

const Textfield = (props) => {
  return (
    <div>
      <label htmlFor={props.label}>{props.label}</label>
      <input type="text" name={props.label} />
    </div>
  );
};

export default Textfield;
