import {useEffect, useState} from "react";
import useLocalStorage from "./useLocalStorage";

export default function useDarkMode() {
  const [storage, setStorage] = useLocalStorage('theme', 'emerald');
  const [theme, setTheme] = useState(storage);
  const colorTheme = theme === 'dark' ? 'emerald' : 'dark';

  useEffect(() => {
    const root = window.document.documentElement;
    root.setAttribute("data-theme", colorTheme);
    setStorage(theme);
  }, [theme, colorTheme, setStorage]);

  return [colorTheme, setTheme] as const;
}