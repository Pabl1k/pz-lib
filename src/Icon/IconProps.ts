type IconName = "arrow" | "heart";

export type RotationType = "up" | "right" | "down" | "left";

export type IconProps = {
  name: IconName;
  alt?: string;
  color?: "black" | "red";
  className?: string;
  height?: string;
  width?: string;
  rotate?: RotationType;
};
