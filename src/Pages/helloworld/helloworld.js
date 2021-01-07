import React from "react";
import Textfield from "../TextBox/Textfield";
export default function Helloworld() {
  return (
    <div>
      <h1>HelloWorld!!</h1>

      <Textfield propName="name"/>
      <Textfield propName="email"/>
    </div>
  );
}
