import { useState, useEffect } from "react";

const useLocalStorage = (key: string, defaultValue: string) => {
  const [value, setValue] = useState(() => JSON.parse(localStorage.getItem(key) ?? "") || String(defaultValue));

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue];
};

export default useLocalStorage;