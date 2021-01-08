import React from "react";
import Textfield from "../TextBox";
import labels from "../../config/labels";

function Helloworld() {
  const label = labels;
  return (
    <div>
      <h1>Login</h1>
      <Textfield label={label[0].title} />
      <Textfield label={label[1].title} />
    </div>
  );
}
export default Helloworld;
