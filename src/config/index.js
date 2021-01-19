const textFieldAttributes = [
  {
    label: "Username",
    type: "text",
    placeholder: "Enter your Username",
    hasLabel: true,
    labelSize: "md",
  },
  {
    label: "Password",
    type: "password",
    placeholder: "Enter your password",
    hasLabel: true,
    labelSize: "md",
  },
];

const Login = {
  titlePiece: "Login",
  size: "sm",
};

const Config = { textFieldAttributes, Login };
export default Config;
