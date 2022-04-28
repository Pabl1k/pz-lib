import React, { FC } from "react";
import "./skeleton.scss";

type TextProps = {
  borderRadius?: number;
  height: number;
  containerHeight?: number;
  lastLineLength?: string;
};

const Text: FC<TextProps> = ({
  height,
  containerHeight = height,
  lastLineLength = "100%",
  borderRadius = 5,
}) => {
  const linesQuantity: number = Math.floor(containerHeight / height);
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
              height,
              width: `${i === arr.length - 1 && lastLineLength}`,
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
  return <div className="skeleton avatar" style={{ height, width }} />;
};

const Skeleton = {
  Text,
  Avatar,
};

export default Skeleton;
