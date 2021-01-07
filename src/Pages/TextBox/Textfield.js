import React from "react";

export const Textfield = (props) => {
  return (
    <div>
      <label htmlFor={props.propName}>{props.propName}</label>
      <input type="text" name={props.propName} />
    </div>
  );
};

export default Textfield;
