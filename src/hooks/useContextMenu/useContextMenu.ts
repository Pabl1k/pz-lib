import {useEffect, useState} from "react";

interface StateType {
  x: number;
  y: number;
  open: boolean;
}

export const useContextMenu = () => {
  const [clickPosition, setClickPosition] = useState<StateType>({x: 0, y: 0, open: false});

  const clickHandler = (x: number, y: number) => {
    setClickPosition({x, y, open: true})
  }

  const closeMenuHandler = () => {
    setClickPosition({...clickPosition, open: false})
  }

  useEffect(() => {
    document.addEventListener("contextmenu", (e) => {
      e.preventDefault();
      clickHandler(e.pageX, e.pageY)
    });

    return () => {
      document.removeEventListener("contextmenu", () => clickHandler)
    }
  })

  return {
    x: clickPosition.x,
    y: clickPosition.y,
    open: clickPosition.open,
    closeHandler: closeMenuHandler
  };
}
