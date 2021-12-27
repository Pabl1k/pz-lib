import { FC } from "react";
import { ReactSVG } from "react-svg";

import { IconProps } from "./IconProps";

/**
 * @Important Necessary to install React-svg library
 *
 * @param name of the icon from 'public/icons' folder
 * @param alt Aria-label for accessibility
 * @param color variant of the color should be added in colorList and IconProps
 * @param className icon className
 * @param height icon height
 * @param width icon width
 *
 */

const Icon: FC<IconProps> = ({
  name,
  alt,
  color = "black",
  className,
  height,
  width,
}) => {
  const colorList = {
    black: "#000",
    red: "#ff0000",
  };

  return (
    <ReactSVG
      wrapper="span"
      aria-label={alt ? alt : `${name} icon`}
      className={className}
      style={{ lineHeight: 0 }}
      src={`${process.env.PUBLIC_URL}/icons/${name}.svg`}
      beforeInjection={(svg) => {
        svg.setAttribute("fill", colorList[color]);
        svg.setAttribute("width", width ?? svg.getAttribute("width") ?? "");
        svg.setAttribute("height", height ?? svg.getAttribute("height") ?? "");
      }}
    />
  );
};

export default Icon;
