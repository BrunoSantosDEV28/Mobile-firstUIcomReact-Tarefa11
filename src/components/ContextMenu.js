import React from "react";
import styles from "../styles/ContextMenu.module.css";

const ContextMenu = () => {
  return (
    <div className={styles.contextMenu}>
      <h2>Menu Contextualizado</h2>
      <ul>
        <li>Opção 1</li>
        <li>Opção 2</li>
        <li>Opção 3</li>
      </ul>
    </div>
  );
};

export default ContextMenu;
