import React from "react";

const Label = (props) => {
  const { name } = props;

  return (
    <div>
      <label>{name}</label>
    </div>
  );
};

export default Label;
