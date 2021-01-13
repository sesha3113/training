import React from "react";
import Label from "../Label";

const TextField = (props) => {
  const { attributes } = props;
  return (
    <div>
      <Label label={attributes.label}></Label>
      <input
        name={attributes.label}
        type={attributes.type}
        placeholder={attributes.placeholder}
      />
    </div>
  );
};

export default TextField;
