import React from "react";
import Label from "../Label";

const TextField = (props) => {
  const { attributes } = props;
  return (
    <div>
      <Label name={attributes.name}></Label>
      <input
        name={attributes.name}
        type={attributes.type}
        placeholder={attributes.placeholder}
      />
    </div>
  );
};

export default TextField;
