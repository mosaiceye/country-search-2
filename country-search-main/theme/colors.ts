export type ThemeColorName =
  | "text"
  | "background"
  | "primary"
  | "secondary"
  | "grey80"
  | "grey60"
  | "grey40"
  | "grey20"
  | "red";

export type ThemeColorList = {
  [index in ThemeColorName]: string;
};

const colors: ThemeColorList = {
  text: "#111",
  background: "#fff",
  primary: "#000000",
  secondary: "#FFFFFF",
  grey80: "#3A3A3A",
  grey60: "#949494",
  grey40: "#E8E8E8",
  grey20: "#F7F7F7",
  red: "red",
};

export default colors;
