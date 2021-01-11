import React from "react";
import Fields from "../TextBox";
import Config from "../../config";

function Helloworld() {
  const {TextFieldlabels} = Config;
  const {TextField, Password} = Fields;
  return (
    <div>
      <h1>Login</h1>
      <TextField TextFieldLabel={TextFieldlabels[0].title} />
      <Password TextFieldLabel={TextFieldlabels[1].title} />
    </div>
  );
}
export default Helloworld;
