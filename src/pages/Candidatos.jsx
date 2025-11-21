import React, { useState } from "react";
import Leones from "../assets/okupas/fotos/Leones.png";
import Fernandez from "../assets/okupas/fotos/Fernandez.png";
import Costantini from "../assets/okupas/fotos/Costantini.png";
import Darsie from "../assets/okupas/fotos/Darsie.png";
import Ferrero from "../assets/okupas/fotos/Ferrero.png";
import Pages from "../assets/okupas/fotos/Pages.png";
import Reinaldi from "../assets/okupas/fotos/Reinaldi.png";
import Garbellotto from "../assets/okupas/fotos/Garbellotto.png";
import LeonesInfo from "../assets/okupas/info/Leones.html?raw";
import FernandezInfo from "../assets/okupas/info/Fernandez.html?raw";
import CostantiniInfo from "../assets/okupas/info/Costantini.html?raw";
import DarsieInfo from "../assets/okupas/info/Darsie.html?raw";
import FerreroInfo from "../assets/okupas/info/Ferrero.html?raw";
import PagesInfo from "../assets/okupas/info/Pages.html?raw";
import ReinaldiInfo from "../assets/okupas/info/Reinaldi.html?raw";
import GarbellottoInfo from "../assets/okupas/info/Garbellotto.html?raw";
import "../styles/Candidatos.css";

const candidatos = [
  { nombre: "Lautaro Leones", foto: Leones, info: LeonesInfo },
  { nombre: "Tomas Fernandez", foto: Fernandez, info: FernandezInfo },
  { nombre: "Augusto Costantini", foto: Costantini, info: CostantiniInfo },
  { nombre: "Joaquin Darsie", foto: Darsie, info: DarsieInfo },
  { nombre: "Lautaro Ferrero", foto: Ferrero, info: FerreroInfo },
  { nombre: "Ignacio Pages", foto: Pages, info: PagesInfo },
  { nombre: "Santiago Reinaldi", foto: Reinaldi, info: ReinaldiInfo },
  { nombre: "Tomas Garbellotto", foto: Garbellotto, info: GarbellottoInfo },
];

export default function Candidatos() {
  const [seleccionado, setSeleccionado] = useState(null);

  if (seleccionado) {
    return (
      <div className="detalle-container">
        <div className="detalle-card">
          <img src={seleccionado.foto} alt={seleccionado.nombre} className="detalle-foto" />
          <div
            className="detalle-descripcion"
            dangerouslySetInnerHTML={{ __html: seleccionado.info }}
          ></div>
        </div>
      </div>
    );
  }

  return (
    <div className="candidatos-container">
      <div className="candidatos-mosaico">
        {candidatos.map((c, i) => (
          <div key={i} className="candidato-mosaico" onClick={() => setSeleccionado(c)}>
            <img src={c.foto} alt={c.nombre} className="candidato-mosaico-foto" />
            <h2 className="candidato-mosaico-nombre">{c.nombre}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}
