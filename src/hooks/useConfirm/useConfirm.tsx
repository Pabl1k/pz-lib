import React from "react";

export const useConfirm = (
  message: string = "",
  onConfirm: () => void,
  onReject: () => void
): (() => void) => {
  const confirmAction = (): void => {
    /**
     * On "Delete all" click user will see the default browser's window with option to choose yes or no.
     */
    if (window.confirm(message)) {
      onConfirm();
    } else {
      onReject();
    }
  };
  return confirmAction;
};

export default function UseConfirmExample() {
  const deleteAll = () => console.log("Deleted");
  const abort = () => console.log("Undo delete");
  const confirmDelete = useConfirm("Are you sure?", deleteAll, abort);
  return (
    <div>
      <button onClick={confirmDelete}>Delete all</button>
    </div>
  );
}
