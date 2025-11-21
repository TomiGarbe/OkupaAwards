import React, { useState, useEffect } from "react";
import { Carousel } from "react-bootstrap";
import imgDesktop from '../assets/carousel/imgDesktop.png';
import imgMobile from '../assets/carousel/imgMobile.png';
import videoDesktop1 from '../assets/carousel/videoDesktop1.mp4';
import videoMobile1 from '../assets/carousel/videoMobile1.mp4';
import videoDesktop2 from '../assets/carousel/videoDesktop2.mp4';
import videoMobile2 from '../assets/carousel/videoMobile2.mp4';
import '../styles/Home.css';

export default function ImageCarousel() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 576);
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % 3);
  };

  useEffect(() => {
    let timer;
    if (index === 0) {
      timer = setTimeout(() => {
        handleNext();
      }, 5000);
    }
    return () => clearTimeout(timer);
  }, [index]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 576);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Carousel
      className="carousel-container"
      activeIndex={index}
      onSelect={handleSelect}
      interval={null} // desactiva avance automático
      controls={true} // si no querés flechas
      indicators={true} // si no querés puntitos
    >
      <Carousel.Item>
        <img
          className="carousel-img"
          src={isMobile ? imgMobile : imgDesktop}
          alt="Segunda imagen"
        />
      </Carousel.Item>
      <Carousel.Item>
        <video
          key={index === 1 ? "video1-active" : "video1"}
          className="carousel-video"
          autoPlay
          muted
          playsInline
          onEnded={handleNext}
        >
          <source src={isMobile ? videoMobile1 : videoDesktop1} type="video/mp4" />
          Tu navegador no soporta videos HTML5.
        </video>
      </Carousel.Item>
      <Carousel.Item>
        <video
          key={index === 2 ? "video2-active" : "video2"}
          className="carousel-video"
          autoPlay
          muted
          playsInline
          onEnded={handleNext}
        >
          <source src={isMobile ? videoMobile2 : videoDesktop2} type="video/mp4" />
          Tu navegador no soporta videos HTML5.
        </video>
      </Carousel.Item>
    </Carousel>
  );
}
