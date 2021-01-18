import React from "react";
import Label from "../Label";

const TextField = ({ attributes }) => {
  const { label, type, placeholder, hasLabel } = attributes;
  return (
    <div>
      {hasLabel && <Label attributes={attributes} />}
      <input type={type} placeholder={placeholder} id={label} required />
    </div>
  );
};

export default TextField;
