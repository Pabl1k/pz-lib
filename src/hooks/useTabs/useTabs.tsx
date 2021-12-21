import React, { Dispatch, SetStateAction, useState } from "react";

type ContentType = {
  tab: string;
  content: string;
};

export const useTabs = (
  initialTab: number,
  allTabs: ContentType[]
): {
  currentItem: ContentType;
  changeItem: Dispatch<SetStateAction<number>>;
} => {
  const [currentIndex, setCurrentIndex] = useState<number>(initialTab);
  return {
    currentItem: allTabs[currentIndex],
    changeItem: setCurrentIndex,
  };
};

export default function UseTabsExample() {
  const content: ContentType[] = [
    {
      tab: "Section 1",
      content:
        "Section 1 content: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque corporis fugit laboriosam laudantium repellat unde.",
    },
    {
      tab: "Section 2",
      content:
        "Section 2 content: Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    },
  ];

  const { currentItem, changeItem } = useTabs(0, content);
  return (
    <div>
      {content.map((section, i) => (
        <button key={i} onClick={() => changeItem(i)}>
          {section.tab}
        </button>
      ))}
      <div>{currentItem.content}</div>
    </div>
  );
}
