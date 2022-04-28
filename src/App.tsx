import React, { useRef } from "react";
import { UseScroll } from "./hooks/useScroll/useScroll";

function App() {
  const topRef = useRef<HTMLDivElement>(null);
  const middleRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  const scrollHandler = (ref: HTMLDivElement, behavior: "smooth" | "auto") => {
    UseScroll(ref, behavior);
  };

  return (
    <div
      style={{
        height: 2000,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div ref={topRef}>
        top{" "}
        <button
          onClick={() => {
            if (middleRef.current) {
              scrollHandler(middleRef.current, "auto");
            }
          }}
        >
          go to middle
        </button>
      </div>
      <div ref={middleRef}>
        middle{" "}
        <button
          onClick={() => {
            if (bottomRef.current) {
              scrollHandler(bottomRef.current, "auto");
            }
          }}
        >
          go to bottom
        </button>
      </div>
      <div style={{ marginBottom: 1000 }} ref={bottomRef}>
        bottom{" "}
        <button
          onClick={() => {
            if (topRef.current) {
              scrollHandler(topRef.current, "smooth");
            }
          }}
        >
          go to top
        </button>
      </div>
    </div>
  );
}

export default App;
