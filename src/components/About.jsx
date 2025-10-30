import React from "react";
import { motion } from "framer-motion";
import incubatorImage from "../assets/incubator.png";
import "../static/About.css";

function About() {
  const features = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: "Surveillance en temps réel",
      desc: "Monitoring continu des signes vitaux pour une réactivité maximale.",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
      title: "Ajustement automatique",
      desc: "Adaptation intelligente des paramètres selon les besoins du bébé.",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
      title: "Communication facilitée",
      desc: "Lien direct entre parents et personnel médical via applications dédiées.",
    },
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <motion.div
          className="about-content"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Texte principal */}
          <div className="about-text">
            <h2 className="section-title">
              <span className="title-accent">À propos de disaade</span>
            </h2>
            <p className="section-description">
              DISAADE est une couveuse néonatale connectée intelligente pour l'amélioration 
              de la prise en charge des bébés prématurés et ceux à faibles poids tout en assurant 
              un environnement stable et sécurisé. DISAADE est conçue pour offrir
              les meilleurs soins possibles aux bébés prématurés grâce à
              l’intégration de technologies avancées d’IA et d’analyse en temps
              réel.
            </p>

            <div className="about-details">
              {features.map((f, index) => (
                <motion.div
                  className="detail-item"
                  key={index}
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="detail-icon">{f.icon}</div>
                  <div className="detail-text">
                    <h3>{f.title}</h3>
                    <p>{f.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Image uniquement */}
          <motion.div
            className="about-image"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="image-card">
              <img
                src={incubatorImage}
                alt="Couveuse intelligente DISAADE"
                className="incubator-img"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
