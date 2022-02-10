import {SVGProps} from "react";

export type ButtonWithIconType = {
  label: string;
  leftIcon?: SVGProps<SVGElement>;
  rightIcon?: SVGProps<SVGElement>;
};
