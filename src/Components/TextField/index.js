import React from "react";
import Label from "../Label";

const TextField = (props) => {
  const { attributes } = props;
  return (
    <div>
      <Label label={attributes.label}></Label>
      <input
        type={attributes.type}
        placeholder={attributes.placeholder}
      />
    </div>
  );
};

export default TextField;
