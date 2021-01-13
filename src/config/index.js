const textFieldAttributes = [
  {
    label: "Username",
    type: "text",
    placeholder: "Enter your Username..",
    isLabel: true,
    labelSize: "md",
    textboxPlaceholderSize: "sm"
  },
  {
    label: "Password",
    type: "password",
    placeholder: "Enter your password..",
    isLabel: true,
    labelSize: "md",
    textboxPlaceholderSize: "sm"
  },
];

const Login = {
  titlePiece: "Login",
  size: "sm"
}

const Config = { textFieldAttributes, Login };
export default Config;
