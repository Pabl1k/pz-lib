import React, { useEffect, useRef, useState } from "react";

const useNetworkStatus = () => {
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

export default function UseNetworkExample() {
  const isOnline = useNetworkStatus();

  return <h1>You are ${isOnline ? "Online" : "Offline"}</h1>;
}
