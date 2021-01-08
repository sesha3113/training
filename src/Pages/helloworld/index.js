import React from "react";
import Textfield from "../TextBox/Textfield";
import labels from "../../config/labels";

export default function Helloworld() {
  const label = labels;
  return (
    <div>
      <h1>HelloWorld!!</h1>
      <Textfield propName={label[0].title} />
      <Textfield propName={label[1].title} />
    </div>
  );
}
