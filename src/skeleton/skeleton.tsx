import React, { FC } from "react";
import "./skeleton.scss";

type TextProps = {
  borderRadius?: number;
  lineHeight: number;
  containerHeight?: number;
  lastLineWidthPercent?: number;
};

const PX_IN_REM = 16;

const Text: FC<TextProps> = ({
  lineHeight,
  containerHeight = lineHeight,
  lastLineWidthPercent = 100,
  borderRadius = 0,
}) => {
  const linesQuantity: number = Math.floor(containerHeight / lineHeight);
  let arr: null[] = [];
  for (let i = 0; i < linesQuantity; i++) {
    arr.push(null);
  }

  return (
    <div className="text">
      {arr.map((line, i) => {
        return (
          <div
            className="skeleton text__line"
            style={{
              borderRadius,
              height: `${lineHeight / PX_IN_REM}rem`,
              width: `${i === arr.length - 1 && lastLineWidthPercent}%`,
            }}
            key={i}
          />
        );
      })}
    </div>
  );
};

type AvatarProps = {
  height: number;
  width: number;
};

const Avatar: FC<AvatarProps> = ({ height, width }) => {
  return (
    <div
      className="skeleton avatar"
      style={{
        height: `${height / PX_IN_REM}rem`,
        width: `${width / PX_IN_REM}rem`,
      }}
    />
  );
};

const Skeleton = {
  Text,
  Avatar,
};

export default Skeleton;
