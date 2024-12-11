export type ThemeBreakpointName = "tablet" | "desktop" | "max";

export type ThemeBreakpointScale = string[] & {
  [index in ThemeBreakpointName]: string;
};

const breakpoints = ["768px", "1024px", "1440px"] as ThemeBreakpointScale;
breakpoints.tablet = breakpoints[0];
breakpoints.desktop = breakpoints[1];
breakpoints.max = breakpoints[2];

export default breakpoints;
