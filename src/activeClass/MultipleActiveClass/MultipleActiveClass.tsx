import React, { useState } from "react";

import "../activeClass.scss";

const MultipleActiveClass = (): JSX.Element => {
  const state: string[] = ["Line: ", "Line: ", "Line: ", "Line: ", "Line: "];

  const booleanArray: boolean[] = Array.from({ length: state.length }).map(
    () => false
  );
  const [activeIndex, setActiveIndex] = useState<boolean[]>(booleanArray);

  return (
    <div style={{ padding: 50 }}>
      {state.map((state, index) => {
        return (
          <div className={activeIndex[index] ? "active-line" : "single-line"}>
            <button
              onClick={() =>
                setActiveIndex((prevState) =>
                  prevState.map((val, i) => (index === i ? !val : val))
                )
              }
            >
              Press to make line active
            </button>
            <span>{`${state} ${index + 1} `}</span>
          </div>
        );
      })}
    </div>
  );
};

export default MultipleActiveClass;
