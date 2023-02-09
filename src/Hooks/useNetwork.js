import { useState, useEffect, useCallback } from "react";

const useNetwork = () => {
  const [isOnline, setIsOnline] = useState(window.navigator.onLine);

  const updateNetworkStatus = useCallback(() => {
    setIsOnline(window.navigator.onLine);
  }, []);

  useEffect(() => {
    window.addEventListener("offline", () =>
      setIsOnline(window.navigator.onLine)
    );
    window.addEventListener("online", () =>
      setIsOnline(window.navigator.onLine)
    );
    return () => {
      window.removeEventListener("offline", updateNetworkStatus);
    };
  }, [isOnline, updateNetworkStatus]);
  return isOnline;
};

export default useNetwork;
