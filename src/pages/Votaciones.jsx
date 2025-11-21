import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Card, Container, ProgressBar } from "react-bootstrap";
import "../styles/Votaciones.css";
import Leones from '../assets/okupas/fotos/Leones.png';
import Fernandez from '../assets/okupas/fotos/Fernandez.png';
import Costantini from '../assets/okupas/fotos/Costantini.png';
import Darsie from '../assets/okupas/fotos/Darsie.png';
import Ferrero from '../assets/okupas/fotos/Ferrero.png';
import Pages from '../assets/okupas/fotos/Pages.png';
import Reinaldi from '../assets/okupas/fotos/Reinaldi.png';
import Garbellotto from '../assets/okupas/fotos/Garbellotto.png';
import Cities from '../assets/juegos/Cities.jpg';
import CommandOfNature from '../assets/juegos/CommandOfNature.jpg';
import Mantis from '../assets/juegos/Mantis.jpg';
import Sequence from '../assets/juegos/Sequence.jpg';
import SkullKing from '../assets/juegos/SkullKing.jpg';
import SushiGo from '../assets/juegos/SushiGo.jpg';
import GarbeCele from '../assets/Shippeos/GarbeCele.png';
import TomiPau from '../assets/Shippeos/TomiPau.png';
import JoacoCami from '../assets/Shippeos/JoacoCami.png';
import emailjs from "emailjs-com";

export default function Votaciones() {
  const navigate = useNavigate();
  const preguntas = [
    { id: 1,
      texto: "¿Qué multimedia merece ser premiada como Multimedia del Año?",
      descripcion: "Premio al video, foto o creación digital que se volvió parte del folklore Okupa y quedó inmortalizado en los chats."
    },
    { id: 2,
      texto: "¿Cuál de estos momentos merece ganar el premio a Fail / Momento del Año?",
      descripcion: "Aquel video que nos hace estallar de risa cada vez que lo vemos"
    },
    { id: 3,
      texto: "¿Quién merece el premio “Desaparecido del Año 2025”?",
      descripcion: "Pensá en ese que no apareció nunca, ni en los cumples, ni en las previas, ni en el grupo."
    },
    { id: 4,
      texto: "¿Quién se merece el premio “Virgen del Año 2025”?",
      descripcion: "Esa persona que mantiene el espíritu puro… o simplemente no levanta ni con un viento a favor."
    },
    { id: 5,
      texto: "¿Quién fue la “Revelación del Año 2025”?",
      descripcion: "El que sorprendió a todos. Ya sea porque cambió, mejoró, revivió o simplemente se hizo notar."
    },
    { id: 6,
      texto: "¿Quién debe llevarse el máximo honor: “Okupa del Año 2025”?",
      descripcion: "El representante supremo del espíritu Okupa: presente, divertido, y siempre parte del quilombo."
    },
    { id: 7,
      texto: "¿Qué juego se merece el premio a Juego de Mesa del Año?",
      descripcion: "Distinción al juego que más se jugó, más risas generó y más puteadas dejó sobre la mesa."
    },
    { id: 8,
      texto: "¿Cuál es tu audio favorito?",
      descripcion: "Reconocimiento al mensaje de voz más icónico, viral, repetido o traumáticamente inolvidable que circuló en el grupo."
    },
    { id: 9,
      texto: "¿Quién fue el “Quejoso del Año 2025”?",
      descripcion: "El que se quejó por todo: el clima, el plan, la hora, el precio, el grupo, la vida."
    },
    { id: 10,
      texto: "¿Quién merece el título de “Pajero del Año 2025”?",
      descripcion: "Ese que nunca falla con los comentarios fuera de lugar, los likes dudosos o la mente en otro lado."
    },
    { id: 11,
      texto: "¿Cuál de estos shippeos merece ganar Shippeo del Año?",
      descripcion: "Premio al dúo que más ilusionó, generó rumores y encendió las teorías románticas del grupo durante el año."
    },
    { id: 12, texto: "Finalizar" },
  ];

  const Okupas = [
    { nombre: "Lautaro Leones", img: Leones },
    { nombre: "Tomas Fernandez", img: Fernandez },
    { nombre: "Augusto Costantini", img: Costantini },
    { nombre: "Joaquin Darsie", img: Darsie },
    { nombre: "Lautaro Ferrero", img: Ferrero },
    { nombre: "Ignacio Pages", img: Pages },
    { nombre: "Santiago Reinaldi", img: Reinaldi },
    { nombre: "Tomas Garbellotto", img: Garbellotto }
  ];

  const SinFerrero = [
    { nombre: "Lautaro Leones", img: Leones },
    { nombre: "Tomas Fernandez", img: Fernandez },
    { nombre: "Augusto Costantini", img: Costantini },
    { nombre: "Joaquin Darsie", img: Darsie },
    { nombre: "Ignacio Pages", img: Pages },
    { nombre: "Santiago Reinaldi", img: Reinaldi },
    { nombre: "Tomas Garbellotto", img: Garbellotto }
  ];

  const Multimedia = [
    { nombre: "Lautaro Leones", img: Leones },
    { nombre: "Tomas Fernandez", img: Fernandez },
    { nombre: "Augusto Costantini", img: Costantini },
    { nombre: "Joaquin Darsie", img: Darsie }
  ];

  const Momentos = [
    { nombre: "Lautaro Leones", img: Leones },
    { nombre: "Tomas Fernandez", img: Fernandez },
    { nombre: "Augusto Costantini", img: Costantini },
    { nombre: "Joaquin Darsie", img: Darsie }
  ];

  const Juegos = [
    { nombre: "Cities", img: Cities },
    { nombre: "Command Of Nature", img: CommandOfNature },
    { nombre: "Mantis", img: Mantis },
    { nombre: "Sequence", img: Sequence },
    { nombre: "Skull King", img: SkullKing },
    { nombre: "Sushi Go", img: SushiGo }
  ];

  const Secciones = [
    { nombre: "Lunes de Foto Motivacional", img: Leones },
    { nombre: "Martes de Confesiones", img: Fernandez },
    { nombre: "Miércoles de Consejo", img: Costantini },
    { nombre: "Jueves de Encuesta", img: Darsie }
  ];

  const Shippeos = [
    { nombre: "Tomás Garbellotto y Cele Chaven", img: GarbeCele },
    { nombre: "Tomás Fernández y Pau Oberti", img: TomiPau },
    { nombre: "Joaquín Darsie y Cami Yabale", img: JoacoCami },
    { nombre: "Joaquín Darsie y Sol (su empleada)", img: Darsie }
  ];

  const opcionesPorPregunta = {
    1: Multimedia,
    2: Momentos,
    3: SinFerrero,
    4: Okupas,
    5: Okupas,
    6: Okupas,
    7: Juegos,
    8: Secciones,
    9: SinFerrero,
    10: SinFerrero,
    11: Shippeos,
  };

  const [actual, setActual] = useState(0);
  const [respuestas, setRespuestas] = useState({});

  const handleChange = (valor) => {
    setRespuestas({ ...respuestas, [actual]: valor });
  };

  const siguiente = () => {
    if (actual < preguntas.length - 1) setActual(actual + 1);
  };

  const anterior = () => {
    if (actual > 0) setActual(actual - 1);
  };

  const enviar = () => {
    const seguro = window.confirm("¿Estás seguro de enviar tus respuestas? 🚀");
    if (!seguro) return;
    
    const templateParams = {
      message: preguntas
        .map(
          (p, i) =>
            `Pregunta ${i + 1}: ${p.texto}\nRespuesta: ${
              respuestas[i] || "No respondida"
            }`
        )
        .join("\n\n"),
    };

    emailjs
      .send(
        "service_edz72gq",
        "template_8gy9zad",
        templateParams,
        "5KlYSL9OYEOWT9Sn5"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          alert("✅ Votación enviada con éxito");
          navigate("/");
        },
        (error) => {
          console.error("FAILED...", error);
          alert("❌ Error al enviar: " + error.text);
        }
      );
  };

  const esUltima = actual === preguntas.length - 1;

  return (
    <Container className="votaciones-container">
      <Card className="votaciones-card">
        <Card.Body>
          {!esUltima ? (
            <>
              <Card.Title className="votaciones-title">
                Pregunta {actual + 1} de {preguntas.length - 1}
              </Card.Title>
              <h1 className="votaciones-text">{preguntas[actual].texto}</h1>
              <p className="votaciones-description">{preguntas[actual].descripcion}</p>

              <div className="opciones-mosaico">
                {(opcionesPorPregunta[preguntas[actual].id] || []).map((op, i) => (
                  <Button
                    key={i}
                    className={`opcion-boton ${respuestas[actual] === op.nombre ? "selected" : ""}`}
                    onClick={() => handleChange(op.nombre)}
                  >
                    <img src={op.img} alt={op.nombre} className="opcion-img" />
                    <span
                      className={`opcion-text ${
                        respuestas[actual] === op.nombre ? "selected" : ""
                      }`}
                    >
                      {op.nombre}
                    </span>
                  </Button>
                ))}
              </div>

              <ProgressBar
                now={((actual + 1) / (preguntas.length - 1)) * 100}
                className="mt-3 progressbar"
              />
            </>
          ) : (
            <div className="finalizar-contenedor">
              <h2 className="finalizar-titulo">🎉 ¡Ya casi terminás!</h2>
              <p className="finalizar-text">
                Tocá el botón para enviar tus respuestas.
              </p>
              <Button
                className="fw-bold boton finalizar-boton"
                onClick={enviar}
              >
                Enviar Respuestas
              </Button>
            </div>
          )}
        </Card.Body>
      </Card>

      <div className="d-flex justify-content-between mt-3">
        <Button
          className="mt-3 fw-bold boton"
          onClick={anterior}
          disabled={actual === 0}
        >
          Atrás
        </Button>
        {!esUltima && (
          <Button
            className="mt-3 fw-bold boton"
            onClick={siguiente}
            disabled={!respuestas[actual]}
          >
            Continuar
          </Button>
        )}
      </div>
    </Container>
  );
}