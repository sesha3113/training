import React from "react";

const Label = (props) => {
  const { label } = props;

  return (
    <div>
      <label>{label}</label>
    </div>
  );
};

export default Label;
