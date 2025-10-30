import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import incubatorImage from "../assets/incubateur1.png"; // L'image de la couveuse
import logoImage from "../assets/logo2.jpg"; // Déplace ton logo dans src/assets
import "../static/Hero.css";

function Hero() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div id="hero" className="hero">
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="nav-container">
          <div className="logo" onClick={() => scrollToSection("hero")}>
            <img src={logoImage} alt="DISAADE Logo" />
            <span role="button" tabIndex="0" onClick={() => scrollToSection("hero")}>
              DISAADE
            </span>
          </div>

          <div
            className={`menu-toggle ${menuOpen ? "active" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>

          <ul className={`nav-menu ${menuOpen ? "active" : ""}`}>
            <li>
              <a role="button" tabIndex="0" onClick={() => scrollToSection("hero")}>
                Accueil
              </a>
            </li>
            <li>
              <a role="button" tabIndex="0" onClick={() => scrollToSection("about")}>
                À propos
              </a>
            </li>
            <li>
              <a role="button" tabIndex="0" onClick={() => scrollToSection("features")}>
                Fonctionnalités
              </a>
            </li>
            <li>
              <a role="button" tabIndex="0" onClick={() => scrollToSection("applications")}>
                Applications
              </a>
            </li>
            <li>
              <a role="button" tabIndex="0" onClick={() => scrollToSection("team")}>
                Notre Équipe
              </a>
            </li>
            <li>
              <a role="button" tabIndex="0" onClick={() => scrollToSection("contact")}>
                Contactez-Nous
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <div className="hero-content">
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="hero-title">
            <span className="title-main">DISAADE</span>
            <span className="title-sub">La couveuse néonatale intelligente</span>
          </h1>
          <p className="hero-description">
            Surveillance en temps réel des signes vitaux des bébés prématurés
            avec ajustement automatique des alertes. Connectée à une application
            mobile pour faciliter la communication entre parents et personnel
            médical.
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary" onClick={() => scrollToSection("about")}>
              Découvrir
            </button>
            <button className="btn btn-secondary" onClick={() => scrollToSection("contact")}>
              Nous contacter
            </button>
          </div>
        </motion.div>

        <motion.div
          className="hero-image"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
        >
          <img src={incubatorImage} alt="Couveuse intelligente DISAADE" className="hero-incubator" />
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;
