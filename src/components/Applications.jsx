import React from 'react';
import '../static/Applications.css';
import logoImage from  '../assets/logo2.jpg';

function Applications() {
  return (
    <section id="applications" className="applications">
      <div className="container">
        <div className="applications-header">
          <h2 className="section-title">
            <span className="title-accent">Applications</span>
          </h2>
        </div>

        <div className="applications-grid">
          <div className="app-card app-web">
            <div className="app-content">
              <div className="app-badge">Application Web</div>
              <h3 className="app-title">Pour le personnel médical</h3>
              <p className="app-description">
                Une interface web complète permettant aux médecins et infirmières de surveiller en temps réel
                tous les paramètres vitaux des bébés sous leur responsabilité.
              </p>
              <ul className="app-features">
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Tableau de bord centralisé</span>
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Alertes et notifications prioritaires</span>
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Historique médical détaillé</span>
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Génération de rapports automatiques</span>
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Gestion multi-patients</span>
                </li>
              </ul>
            </div>
            <div className="app-visual">
              <div className="browser-mockup">
                <div className="browser-header">
                  <div className="browser-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <div className="browser-url">DISAADE Medical Dashboard</div>
                </div>
                <div className="browser-content">
                  <div className="dashboard-grid">
                    <div className="dashboard-card card-primary">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      <span>Patients</span>
                    </div>
                    <div className="dashboard-card card-secondary">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                      <span>Données</span>
                    </div>
                    <div className="dashboard-card card-tertiary">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                      </svg>
                      <span>Alertes</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="app-card app-mobile">
            <div className="app-visual">
              <div className="phone-mockup">
                <div className="phone-notch"></div>
                <div className="phone-content">
                  <div className="mobile-header">
                    <img src={logoImage} alt="DISAADE" className="mobile-logo" />
                    <span>DISAADE</span>
                  </div>
                  <div className="mobile-stats">
                    <div className="mobile-stat">
                      <div className="stat-icon heart">
                        <svg viewBox="0 0 24 24" fill="currentColor">
                          <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                      </div>
                      <span className="stat-value">142</span>
                      <span className="stat-unit">bpm</span>
                    </div>
                    <div className="mobile-stat">
                      <div className="stat-icon temp">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                      </div>
                      <span className="stat-value">36.8</span>
                      <span className="stat-unit">°C</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="app-content">
              <div className="app-badge">Application Mobile</div>
              <h3 className="app-title">Pour les parents</h3>
              <p className="app-description">
                Une application mobile intuitive permettant aux parents de rester connectés avec leur bébé
                et de recevoir des mises à jour en temps réel où qu'ils soient.
              </p>
              <ul className="app-features">
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Suivi des signes vitaux en temps réel</span>
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Notifications push personnalisées</span>
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Messagerie avec l'équipe médicale</span>
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Journal de bord et photos</span>
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Recommandations personnalisées</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Applications;
