"use client";

import React, { useState, useEffect } from "react";
import styles from "../styles/styles.module.css";

// Import the mqtt library
import mqtt from "mqtt";

// MQTT broker connection options
const mqttOptions = {
  host: "cee54d4adcc040da863fcdb3cb43c0df.s1.eu.hivemq.cloud",
  port: 8883,
  protocol: "mqtts",
  username: "dustinteng12",
  password: "De021198112!",
};

// Create an MQTT client instance
const mqttClient = mqtt.connect(mqttOptions);

const toggleDoor = () => {
  console.log("Button clicked!");
};

const Home = () => {
  const [showMaklo, setShowMaklo] = useState(false);

  useEffect(() => {
    mqttClient.subscribe("gatething28signal"); // Adjust topic as needed

    // Handle incoming messages
    mqttClient.on("message", (topic, message) => {
      // You can perform actions based on received messages here
      console.log(`Received message on topic ${topic}: ${message.toString()}`);
    });

    // Clean up subscriptions when the component unmounts
    return () => {
      mqttClient.end();
    };
  }, []);

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
