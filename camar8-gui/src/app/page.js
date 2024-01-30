"use client";

import React, { useState, useEffect } from "react";
import styles from "../styles/styles.module.css";
// import MosquittoComponent from "./mosquitto";
// Import the mqtt library
import mqtt from "mqtt";

// MQTT broker connection options
var options = {
  // host: 'cee54d4adcc040da863fcdb3cb43c0df.s1.eu.hivemq.cloud',
  // port: 8884,
  // protocol: 'mqtt',
  username: "developer",
  password: "Developer1!",
  rejectUnauthorized: false,
  // protocolVersion: 5,
};

// Create an MQTT client instance
const client = mqtt.connect(
  "tls://cee54d4adcc040da863fcdb3cb43c0df.s1.eu.hivemq.cloud:8883",
  options
);

// setup the callbacks
mqttClient.on("connect", function () {
  console.log("Connected");
});

mqttClient.on("error", function (error) {
  console.log(error);
});

mqttClient.on("message", function (topic, message) {
  // called each time a message is received
  console.log("Received message:", topic, message.toString());
});

mqttClient.subscribe("gatething28signal"); // Adjust topic as needed

// Function to send an MQTT message
const sendMqttMessage = () => {
  const messageToSend = "test dari vercel"; // Adjust the message content as needed
  mqttClient.publish("gatething28signal", messageToSend);
};
const toggleDoor = () => {
  console.log("Button clicked!");
};

const Home = () => {
  const [showMaklo, setShowMaklo] = useState(false);
  const [lastMessage, setLastMessage] = useState("");

  useEffect(() => {
    mqttClient.subscribe("gatething28signal"); // Adjust topic as needed

    // Handle incoming messages
    mqttClient.on("message", (topic, message) => {
      // You can perform actions based on recesetLastMessage(message.toString());ived messages here
      console.log(`Received message on topic ${topic}: ${message.toString()}`);
      setLastMessage(message.toString());
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
          sendMqttMessage();

          toggleDoor();
        }}
      >
        pencet aku bangg
      </button>
      <div>
        <p>Last MQTT Message: {lastMessage}</p>
      </div>
    </div>
  );
};

export default Home;
