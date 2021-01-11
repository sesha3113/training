import React from "react";

const TextField = (props) => {
  return (
    <div>
      <label htmlFor={props.TextFieldLabel}>{props.TextFieldLabel}</label>
      <input type="text" name={props.TextFieldLabel} />
    </div>
  );
};

const Password = (props) => {
  return (
    <div>
      <label htmlFor={props.TextFieldLabel}> {props.TextFieldLabel} </label>
      <input type="password" name={props.TextFieldLabel} />
    </div>
  );
};

const Fields = { TextField, Password };

export default Fields;
