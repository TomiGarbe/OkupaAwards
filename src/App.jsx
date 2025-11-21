import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppNavbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Votaciones from "./pages/Votaciones";
import Candidatos from "./pages/Candidatos";
import Cookies from "./components/Cookies";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/Layout.css";

export default function App() {
  return (
    <Router>
      <div className="app-container">
        <AppNavbar />
        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/votaciones" element={<Votaciones />} />
            <Route path="/candidatos" element={<Candidatos />} />
          </Routes>
        </main>
        <Footer />
        <Cookies />
      </div>
    </Router>
  );
}
