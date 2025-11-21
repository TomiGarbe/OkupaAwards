import React from "react";
import { Container } from "react-bootstrap";

export default function Footer() {
  return (
    <footer className="bg-black p-3 mt-auto fixed-bottom">
      <Container className="d-flex justify-content-center align-items-center position-relative">
        <p className="mb-0 text-center">
          &copy; 2023 - 2025 Okupa Awards. Todos los derechos reservados.
        </p>
      </Container>
    </footer>
  );
}
