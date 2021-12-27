import React, { createRef, useState } from "react";
import useOutsideClick from "../hooks/useOutsideClick";

const ModalWindow = () => {
  return (
    <div
      style={{
        border: "3px solid #666",
        width: 400,
        height: 500,
        background: "#aaa",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      Click outside this window to close
    </div>
  );
};

const OutsideClickListener = () => {
  const [open, setOpen] = useState<boolean>(false);
  const modalRef = createRef<HTMLDivElement>();
  useOutsideClick(modalRef, () => setOpen(false));
  return (
    <div style={{ background: open ? "#dcdcdc" : "#fff", height: "100vh" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: 50,
        }}
      >
        <button onClick={() => setOpen(true)}>Open modal</button>
        {open && (
          <div style={{ marginTop: 20 }} ref={modalRef}>
            <ModalWindow />
          </div>
        )}
      </div>
    </div>
  );
};

export default OutsideClickListener;
