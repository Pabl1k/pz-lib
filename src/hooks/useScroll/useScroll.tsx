import React from "react";

const UseScroll = (y: number): void => {
  window.scrollTo({
    top: y,
    /**
     * smooth - smooth scroll
     * auto - immediate scroll
     */
    behavior: "smooth",
  });
};

const UseScrollExample = () => {
  return (
    <div
      style={{
        height: 2000,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div>top</div>
      <button onClick={() => UseScroll(0)}>go to top</button>
    </div>
  );
};

export default UseScrollExample;
