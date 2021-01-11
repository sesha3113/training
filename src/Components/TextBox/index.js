import React from "react";

const TextField = (props) => {
  const {TextFieldLabel} = props;
  return (
    <div>
      <label htmlFor={TextFieldLabel}>{TextFieldLabel}</label>
      <input type="text" name={TextFieldLabel} />
    </div>
  );
};


export default TextField;
