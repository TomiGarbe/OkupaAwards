import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import ImageCarousel from "../components/Carousel";
import "../styles/Home.css";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <ImageCarousel/>
      <div className="mt-4 text-center">
        <h1 className="home-title top">
          Bienvenidos a las Votaciones de los
        </h1>
        <h1 className="home-title">
          <span>Okupa Awards 2025</span>
        </h1>
        <Button
          size="lg"
          className="mt-4 fw-bold boton-votar"
          onClick={() => navigate("/votaciones")}
        >
          Ir a Votar
        </Button>
      </div>
    </div>
  );
}