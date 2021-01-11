import React from "react";
import TextField from "../TextBox";
import Password from "../Password";
import Config from "../../config";

function Helloworld() {
  const { TextFieldlabels } = Config;
  return (
    <div>
      <h1>Login!!</h1>
      <TextField TextFieldLabel={TextFieldlabels[0]} />
      <Password TextFieldLabel={TextFieldlabels[1]} />
    </div>
  );
}
export default Helloworld;
