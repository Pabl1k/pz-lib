import React, { FC } from "react";

import { AnimatedButtonType } from "./AnimatedButtonType";
import "./animatedButton.scss";

const AnimatedButton: FC<AnimatedButtonType> = ({ label, isActive }) => {
  return (
    <button className={`button ${isActive ? "activeButton" : "disabled"}`}>
      {label}
    </button>
  );
};

export default AnimatedButton;
