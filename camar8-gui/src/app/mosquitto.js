"use client";

import React, { useEffect, useState } from "react";
import mqtt from "mqtt";

const MosquittoComponent = () => {
  const [mqttClient, setMqttClient] = useState(null);
  const [receivedMessage, setReceivedMessage] = useState("");

  useEffect(() => {
    // MQTT broker connection options
    const mqttOptions = {
      host: "localhost", // Change to your Mosquitto broker's host
      port: 1883, // Default MQTT port
      // Add more options as needed
    };

    // Create an MQTT client instance
    const client = mqtt.connect(mqttOptions);

    // Set up event handlers
    client.on("connect", () => {
      console.log("Connected to MQTT broker");
      // Subscribe to a topic upon connection
      client.subscribe("example-topic", (err) => {
        if (err) {
          console.error("Error subscribing to topic", err);
        }
      });
    });

    client.on("message", (topic, message) => {
      console.log(`Received message on topic ${topic}: ${message.toString()}`);
      setReceivedMessage(message.toString());
    });

    client.on("error", (err) => {
      console.error("MQTT error:", err);
    });

    // Set the MQTT client in the state
    setMqttClient(client);

    // Clean up the MQTT client when the component unmounts
    return () => {
      client.end();
      console.log("Disconnected from MQTT broker");
    };
  }, []); // Empty dependency array ensures the effect runs once on mount

  return (
    <div>
      <h2>Mosquitto Component</h2>
      <p>Last Received Message: {receivedMessage}</p>
    </div>
  );
};

export default MosquittoComponent;
