import React, { FC, useState } from "react";
import "./MultipleActiveClass.scss";

const MultipleActiveClass = (): JSX.Element => {
  const state: string[] = ["Line: ", "Line: ", "Line: ", "Line: ", "Line: "];

  const booleanArray: boolean[] = Array.from({ length: state.length }).map(
    () => false
  );
  const [activeIndex, setActiveIndex] = useState<boolean[]>(booleanArray);

  const allSelected = activeIndex.every((x) => x);
  const someSelected = activeIndex.some((x) => x) && !allSelected;
  const noSelected = activeIndex.every((x) => !x);

  const onClickHandler = (value: boolean) => {
    setActiveIndex((prevState) => prevState.map((val) => !val && value));
  };

  return (
    <div style={{ margin: 100 }}>
      <CustomCheckbox
        all={allSelected}
        some={someSelected}
        onClick={() => onClickHandler(noSelected)}
      />
      <div style={{ display: "flex", flexDirection: "column", marginTop: 50 }}>
        {state.map((x, i) => (
          <input
            type="checkbox"
            key={i}
            checked={activeIndex[i]}
            onChange={() =>
              setActiveIndex((prevState) =>
                prevState.map((val, inx) => (i === inx ? !val : val))
              )
            }
          />
        ))}
      </div>
    </div>
  );
};

export default MultipleActiveClass;

type CustomCheckboxProps = {
  all?: boolean;
  some?: boolean;
  onClick: () => void;
};

const CustomCheckbox: FC<CustomCheckboxProps> = ({ all, some, onClick }) => {
  return (
    <div
      className={`checkbox ${all && "all"} ${some && "some"}`}
      onClick={onClick}
    >
      {all && <div>&#10004;</div>}
      {some && <div>-</div>}
    </div>
  );
};
