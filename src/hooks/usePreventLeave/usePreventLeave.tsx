import React from "react";

export const usePreventLeave = (): {
  enablePrevent: () => void;
  disablePrevent: () => void;
} => {
  const listener = (event: any) => {
    event.preventDefault();
    /**
     *    @important event.returnValue = "" Must be specified!
     */
    event.returnValue = "";
  };
  /**
   * if "beforeunload" is active, browser will make sure that user want to close current tab
   */
  const enablePrevent = () => window.addEventListener("beforeunload", listener);
  const disablePrevent = () =>
    window.removeEventListener("beforeunload", listener);
  return { enablePrevent, disablePrevent };
};

export default function UsePreventLeaveExample() {
  const { enablePrevent, disablePrevent } = usePreventLeave();
  return (
    <div>
      <button onClick={enablePrevent}>Save</button>
      <button onClick={disablePrevent}>Don't save</button>
    </div>
  );
}
