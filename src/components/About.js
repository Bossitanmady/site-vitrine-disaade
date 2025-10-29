import React from 'react';
import './About.css';

function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="section-title">
              <span className="title-accent">À propos de</span>
              <span className="title-main">DISAADE</span>
            </h2>
            <p className="section-description">
              DISAADE est une couveuse néonatale intelligente révolutionnaire conçue pour offrir
              les meilleurs soins possibles aux bébés prématurés.
            </p>
            <div className="about-details">
              <div className="detail-item">
                <div className="detail-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="detail-text">
                  <h3>Surveillance en temps réel</h3>
                  <p>Monitoring continu des signes vitaux pour une réactivité maximale</p>
                </div>
              </div>
              <div className="detail-item">
                <div className="detail-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div className="detail-text">
                  <h3>Ajustement automatique</h3>
                  <p>Adaptation intelligente des paramètres selon les besoins du bébé</p>
                </div>
              </div>
              <div className="detail-item">
                <div className="detail-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div className="detail-text">
                  <h3>Communication facilitée</h3>
                  <p>Lien direct entre parents et personnel médical via applications dédiées</p>
                </div>
              </div>
            </div>
          </div>
          <div className="about-image">
            <div className="image-card">
              <div className="stats-card">
                <div className="stat">
                  <span className="stat-value">24/7</span>
                  <span className="stat-label">Surveillance</span>
                </div>
                <div className="stat">
                  <span className="stat-value">100%</span>
                  <span className="stat-label">Sécurisé</span>
                </div>
                <div className="stat">
                  <span className="stat-value">Real-time</span>
                  <span className="stat-label">Alertes</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
