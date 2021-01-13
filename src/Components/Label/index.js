import React from "react";

const Label = ({attributes}) => {
  const { label, labelSize } = attributes;

  return (
    <div>
      <label className={`label-font-${labelSize}`} htmlFor={label} >{label}</label>
    </div>
  );
};

export default Label;
