import React from "react";
import TextField from "../TextBox";
import Password from "../Password";
import Config from "../../config";

const Helloworld = () => {
  const { TextFieldLabel } = Config;
  return (
    <div>
      <h1>Login</h1>
      <TextField TextFieldLabel={TextFieldLabel[0]} />
      <Password TextFieldLabel={TextFieldLabel[1]} />
    </div>
  );
};
export default Helloworld;
