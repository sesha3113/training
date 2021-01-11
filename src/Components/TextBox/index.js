import React from "react";

const TextField = (props) => {
  return (
    <div>
      <label htmlFor={props.TextFieldLabel}>{props.TextFieldLabel}</label>
      <input type="text" name={props.TextFieldLabel} />
    </div>
  );
};

export default TextField;
