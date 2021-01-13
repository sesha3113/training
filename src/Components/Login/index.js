import React from "react";
import TextField from "../TextField";
import Config from "../../config";

const Helloworld = () => {
  const { LoginLabel } = Config;
  return (
    <div>
      <h1>Login</h1>
      <TextField attributes={LoginLabel[0]} />
      <TextField attributes={LoginLabel[1]} />
    </div>
  );
};
export default Helloworld;
