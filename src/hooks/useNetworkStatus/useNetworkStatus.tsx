import React, { useEffect, useState } from "react";

const useNetworkStatus = (): boolean => {
  /**
   * Check the current network connection status
   */
  const [status, setStatus] = useState<boolean>(navigator.onLine);
  const handleChange = () => {
    setStatus(navigator.onLine);
  };

  useEffect(() => {
    window.addEventListener("online", handleChange);
    window.addEventListener("offline", handleChange);
    return () => {
      window.removeEventListener("online", handleChange);
      window.removeEventListener("offline", handleChange);
    };
  }, []);
  return status;
};

export default function UseNetworkStatusExample() {
  const isOnline = useNetworkStatus();

  return <h1>You are {isOnline ? "Online" : "Offline"}</h1>;
}
