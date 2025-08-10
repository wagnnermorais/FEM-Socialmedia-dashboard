import type { HeaderProps } from "../types/HeaderProps";
import styles from "../styles/Header.module.css";
import { useState } from "react";

export default function Header({ followers }: HeaderProps) {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <header className={styles.header}>
      <div>
        <h1 className={styles.title}>Social Media Dashboard</h1>
        <p className={styles.totalFollowers}>Total Followers: {followers}</p>
      </div>
      <div className={styles.themeToggle}>
        <p className={styles.theme}>Dark Mode</p>
        <label className={styles.switch}>
          <input type="checkbox" checked={darkMode} onChange={toggleTheme} />
          <span className={styles.slider}></span>
        </label>
      </div>
    </header>
  );
}
