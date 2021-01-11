import React from "react";

const Password = (props) => {
  return (
    <div>
      <label htmlFor={props.TextFieldLabel}> {props.TextFieldLabel} </label>
      <input type="password" name={props.TextFieldLabel} />
    </div>
  );
};

export default Password;
