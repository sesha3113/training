import React from "react";
import TextField from "../TextBox";
import Config from "../../config";

function Helloworld() {
  const {TextFieldlabels} = Config;
  return (
    <div>
      <h1>Login</h1>
      <TextField TextFieldLabel={TextFieldlabels[0].title} />
      <TextField TextFieldLabel={TextFieldlabels[1].title} />
    </div>
  );
}
export default Helloworld;
