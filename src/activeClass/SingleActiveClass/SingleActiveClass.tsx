import React, { useState } from "react";

import "../activeClass.scss";

const SingleActiveClass = (): JSX.Element => {
  const state: string[] = ["Line: ", "Line: ", "Line: ", "Line: ", "Line: "];
  const [active, setActive] = useState<number | null>(null);
  return (
    <div style={{ padding: 50 }}>
      {state.map((state, index) => {
        return (
          <div className={active === index ? "active-line" : "single-line"}>
            <button onClick={() => setActive(index !== active ? index : null)}>
              Press to make line active
            </button>
            <span>{`${state} ${index + 1} `}</span>
          </div>
        );
      })}
    </div>
  );
};

export default SingleActiveClass;
