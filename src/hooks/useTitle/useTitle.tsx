import React, { Dispatch, SetStateAction, useEffect, useState } from "react";

const useTitle = (
  initialTitle: string
): Dispatch<SetStateAction<string>> => {
  const [title, setTitle] = useState<string>(initialTitle);
  const updateTitle = () => {
    /**
     * htmlTitle updates browser's tab title
     */
    const htmlTitle: HTMLTitleElement | null = document.querySelector("title");
    if (!!htmlTitle) {
      htmlTitle.innerText = title;
    }
  };
  /**
   * Browser's tab title will be changed with every title values changes
   */
  useEffect(updateTitle, [title]);
  return setTitle;
};

export default function UseTitleExample() {
  const [timer, setTimer] = useState<number>(3);
  const titleUpdater = useTitle("Loading...");
  setTimeout(() => titleUpdater("Main page"), 3000);
  setInterval( () => {
    if (timer === 0) {
      clearInterval()
      setTimer(0)
    } else {
      setTimer(timer - 1)
    }
  }, 1000);
  return <div>Browser's tab title will be changed in {timer}</div>;
}
