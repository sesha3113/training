import React from "react";
import Label from "../Label";

const TextField = ({ attributes }) => {
  const { label, type, placeholder, isLabel, textboxPlaceholderSize } = attributes;
  return (
    <div>
      {isLabel && <Label attributes={attributes} />}
      <input className = {`textbox-font-${textboxPlaceholderSize}`} type={type} placeholder={placeholder} id={label} required />
    </div>
  );
};

export default TextField;
