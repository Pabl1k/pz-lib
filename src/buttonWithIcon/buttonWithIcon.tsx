import React, { FC } from "react";
import { ButtonWithIconType } from "./buttonWithIconType";

/**
 * Should be used like:
 *
 *  <ButtonWithIcon
 *      label="button"
 *      leftIcon={<Icon name="heart" />}
 *      rightIcon={<Icon name="ArrowIcon" />}
 *  />
 */

const ButtonWithIcon: FC<ButtonWithIconType> = ({
  label,
  leftIcon,
  rightIcon,
}: ButtonWithIconType) => {
  return (
    <button
      style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
    >
      {leftIcon && leftIcon}
      <span>{label}</span>
      {rightIcon && rightIcon}
    </button>
  );
};

export default ButtonWithIcon;
