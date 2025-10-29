import React, { useState, useEffect } from 'react';
import './Hero.css';

function Hero() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="hero">
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <div className="logo">
            <img src="/logo2.jpg" alt="DISAADE Logo" />
            <span>DISAADE</span>
          </div>
          <ul className="nav-menu">
            <li><a onClick={() => scrollToSection('about')}>À propos</a></li>
            <li><a onClick={() => scrollToSection('features')}>Fonctionnalités</a></li>
            <li><a onClick={() => scrollToSection('applications')}>Applications</a></li>
            <li><a onClick={() => scrollToSection('contact')}>Contact</a></li>
          </ul>
        </div>
      </nav>

      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            <span className="title-main">DISAADE</span>
            <span className="title-sub">La couveuse néonatale intelligente</span>
          </h1>
          <p className="hero-description">
            Surveillance en temps réel des signes vitaux des bébés prématurés avec ajustement
            automatique des alertes. Connectée à une application mobile pour faciliter la
            communication entre parents et personnel médical.
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary" onClick={() => scrollToSection('about')}>
              Découvrir
            </button>
            <button className="btn btn-secondary" onClick={() => scrollToSection('contact')}>
              Nous contacter
            </button>
          </div>
        </div>
        <div className="hero-image">
          <div className="floating-card card-1">
            <div className="icon-wrapper">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <span>Surveillance continue</span>
          </div>
          <div className="floating-card card-2">
            <div className="icon-wrapper">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <span>Application mobile</span>
          </div>
          <div className="floating-card card-3">
            <div className="icon-wrapper">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </div>
            <span>Alertes intelligentes</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
