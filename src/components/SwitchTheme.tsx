"use client";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";

export default function SwitchTheme() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const currentTheme = theme === "system" ? systemTheme : theme;

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div>
      {mounted &&
        (currentTheme === "dark" ? (
          <MdLightMode
            onClick={() => {
              console.log(" light");
              return setTheme("light");
            }}
            className="cursor-pointer text-xl hover:text-amber-500"
          />
        ) : (
          <MdDarkMode
            onClick={() => {
              console.log("Herer dark");
              return setTheme("dark");
            }}
            className="cursor-pointer text-xl hover:text-amber-500"
          />
        ))}
    </div>
  );
}
