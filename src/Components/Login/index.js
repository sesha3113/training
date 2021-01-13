import React from "react";
import TextField from "../TextField";
import Config from "../../config";

const Login = () => {
  const { textFieldAttributes, Login } = Config;
  return (
    <form>
      <h1 className = {`heading-text-${Login.size}`} >{Login.titlePiece}</h1>
      {textFieldAttributes.map((attributes, index) => {
        return <div key={index}>{<TextField attributes={attributes} />}</div>;
      })}
    </form>
  );
};
export default Login;
