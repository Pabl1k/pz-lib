import React, {createRef} from "react";
import {useContextMenu} from "../hooks/useContextMenu/useContextMenu";
import useOutsideClick from "../hooks/useOutsideClick";

const AREA_HEIGHT = 500;
const AREA_WIDTH = 500;

const ContextMenu = () => {
  const {x, y, open, closeHandler} = useContextMenu();
  const menuRef = createRef<HTMLDivElement>();
  useOutsideClick(menuRef, closeHandler);

  const menu = () => {
    const content = [
        {id: 1, label: "123"},
        {id: 2, label: "456"},
        {id: 3, label: "789"},
      ]

    return (
      <div ref={menuRef} style={{top: y, left: x, position: "absolute", width: 50, height: 80, background: "blue", display: "flex", flexDirection: "column"}}>
        {content.map(x => (
          <span key={x.id}>{x.label}</span>
        ))}
      </div>
    )
  }

  const renderMenu = () => {
    if (x < AREA_WIDTH && y < AREA_HEIGHT && open) {
      return menu()
    }

    return <></>;
  }

  return (
    <div style={{width: AREA_WIDTH, height: AREA_HEIGHT, background: "grey", border: "1px solid black", display: "flex", justifyContent: "center", alignItems: "center"}}>
      {renderMenu()}
      Right click in this area
    </div>
  );
};

export default ContextMenu;
