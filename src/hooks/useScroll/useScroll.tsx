import React, { useEffect, useState } from "react";

const useScroll = (): { x: number; y: number } => {
  /**
   * checking current location of the top left corner
   */
  const [state, setState] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const onScroll = () => {
    setState({ y: window.scrollY, x: window.scrollX });
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return state;
};

export default function UseScrollExample() {
  const { y } = useScroll();

  return (
    <div style={{ height: "1000vh" }}>
      <h1 style={{ position: "fixed", color: y > 100 ? "red" : "blue" }}>
        Hello!
      </h1>
    </div>
  );
}
