import React from "react";

const Password = (props) => {
  const {TextFieldLabel} = props;
  return (
    <div>
      <label htmlFor={TextFieldLabel}> {TextFieldLabel} </label>
      <input type="password" name={TextFieldLabel} />
    </div>
  );
};

export default Password;
