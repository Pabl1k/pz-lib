import React from "react";

/**
 * @info All Notification options you can find here: https://developer.mozilla.org/en-US/docs/Web/API/notification
 */
const useNotifications = (
  title: string,
  options?: NotificationOptions
): undefined | (() => void) => {
  if (!("Notification" in window)) {
    return;
  }
  const triggerNotification = () => {
    if (Notification.permission !== "granted") {
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          new Notification(title, options);
        } else {
          return;
        }
      });
    } else {
      new Notification(title, options);
    }
  };
  return triggerNotification;
};

export default function UseNotificationsExample() {
  const triggerNotifications = useNotifications("Notification Title", {
    body: "Notification body",
  });
  return (
    <div>
      <button onClick={triggerNotifications}>Send notification</button>
    </div>
  );
}
