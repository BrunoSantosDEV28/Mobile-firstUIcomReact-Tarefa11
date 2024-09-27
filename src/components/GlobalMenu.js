import React, { useState } from "react";
import styles from "../styles/GlobalMenu.module.css";

const GlobalMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.menuContainer}>
      <button onClick={toggleMenu} className={styles.menuToggle}>
        {isOpen ? "➖" : "➕"} Menu
      </button>
      <nav className={`${styles.menu} ${isOpen ? styles.open : ""}`}>
        <ul>
          <li>Home</li>
          <li>Sobre</li>
          <li>Serviços</li>
          <li>Contato</li>
        </ul>
      </nav>
    </div>
  );
};

export default GlobalMenu;
