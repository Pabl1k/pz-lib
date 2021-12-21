import React, { useEffect } from "react";

const useBeforeLeave = (
  onBefore: (value: string) => void
): undefined | ((value: string) => void) => {
  const handler = (e: any) => {
    /**
     * clientY <= 0 - if mouse cross top line of the page, onBefore will be active
     */
    const { clientY } = e;
    if (clientY <= 0) {
      onBefore("null");
    }
  };

  useEffect(() => {
    document.addEventListener("mouseleave", handler);
    return () => document.removeEventListener("mouseleave", handler);
  }, []);

  return;
};

export default function UseBeforeLeaveExample() {
  const stop = () => console.log("Do not leave!");
  useBeforeLeave(stop);
  return <h1>Hello!</h1>;
}
