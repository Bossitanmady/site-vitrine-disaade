import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact-content">
          <div className="contact-info">
            <h2 className="section-title">
              <span className="title-accent">Contact</span>
              <span className="title-main">Parlons de votre projet</span>
            </h2>
            <p className="section-description">
              Vous souhaitez en savoir plus sur DISAADE ou discuter d'une collaboration ?
              Notre équipe est à votre disposition pour répondre à toutes vos questions.
            </p>

            <div className="contact-methods">
              <div className="contact-method">
                <div className="method-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="method-text">
                  <h4>Email</h4>
                  <a href="mailto:contact@disaade.com">contact@disaade.com</a>
                </div>
              </div>

              <div className="contact-method">
                <div className="method-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div className="method-text">
                  <h4>Téléphone</h4>
                  <a href="tel:+33123456789">+33 1 23 45 67 89</a>
                </div>
              </div>

              <div className="contact-method">
                <div className="method-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="method-text">
                  <h4>Adresse</h4>
                  <p>Paris, France</p>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-cta">
            <div className="cta-card">
              <div className="cta-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3>Prêt à transformer les soins néonatals ?</h3>
              <p>
                Rejoignez-nous dans notre mission d'offrir les meilleurs soins possibles aux
                bébés prématurés grâce à la technologie DISAADE.
              </p>
              <button className="cta-button">
                Demander une démonstration
              </button>
              <div className="cta-features">
                <div className="cta-feature">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Sans engagement</span>
                </div>
                <div className="cta-feature">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Réponse sous 24h</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
