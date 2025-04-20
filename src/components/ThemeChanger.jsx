import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <select
      value={theme}
      onChange={(e) => {
        if (e.target.value === "dynamic") {
          const currentHour = new Date().getHours();

          if (currentHour >= 4 && currentHour < 8) {
            setTheme("light-mid");
          } else if (currentHour >= 8 && currentHour < 18) {
            setTheme("light");
          } else if (currentHour >= 18 && currentHour < 20) {
            setTheme("dark-mid");
          } else {
            setTheme("dark");
          }
        } else {
          setTheme(e.target.value);
        }
      }}
    >
      <option value="system">System</option>
      <option value="dynamic">Dynamic</option>
      <option value="dark">Dark</option>
      <option value="dark-mid">Dark Mid</option>
      <option value="light">Light</option>
      <option value="light-mid">Light Mid</option>
    </select>
  );
};

export default ThemeSwitch;
