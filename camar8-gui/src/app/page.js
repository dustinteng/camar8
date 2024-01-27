"use client";

import React, { useState } from "react";
import styles from "../styles/styles.module.css";
// import Switch from "./switch";

const toggleDoor = () => {
  console.log("Button clicked!");
};

const Home = () => {
  const [showMaklo, setShowMaklo] = useState(false);

  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>Camar 8 Dashboard</h1>
      <h3>Front Doora</h3>

      {showMaklo && <h1 className={styles.maklo}>MAK LOOOO</h1>}

      <button
        className={styles.button}
        onClick={() => {
          console.log("asdf");

          setShowMaklo(!showMaklo);

          toggleDoor();
        }}
      >
        Toggle
      </button>
    </div>
  );
};

export default Home;
