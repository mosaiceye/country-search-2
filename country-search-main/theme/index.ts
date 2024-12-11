import colors, { ThemeColorList } from "./colors";
import breakpoints, { ThemeBreakpointScale } from "./breakpoints";

export type Theme = {
  colors: ThemeColorList;
  breakpoints: ThemeBreakpointScale;
};

const theme: Theme = {
  colors,
  breakpoints,
};

export default theme;
