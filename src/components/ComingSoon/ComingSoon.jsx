import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import comingSoonImage from "../../assets/boxbot-prototype.png";

import styles from "./ComingSoon.module.css";

export default function ComingSoon() {
  return (
    <Container className={styles.comingSoonContainer}>
      <h1>Малък инженер</h1>
      <h2>Скоро ще стартираме!</h2>
      <p>Благодарим ви, че проявявате интерес!</p>
      <img
        src={comingSoonImage}
        alt="Coming Soon"
      />
    </Container>
  );
}
