import React, { useState, useEffect, useRef } from "react";
import "../static/Team.css";

// 🖼️ Importation des images depuis src/assets/images/
import dialloImg from "../assets/images/diallo.jpeg";
import cisseImg from "../assets/images/cisse.jpeg";
import josianeImg from "../assets/images/josiane.jpg";
import kabaImg from "../assets/images/kaba.jpeg";
import diaouneImg from "../assets/images/diaoune.jpeg";
import groupPhoto from "../assets/images/team.jpg";

function Team() {
  const [activeTab, setActiveTab] = useState("team");
  const [visibleMembers, setVisibleMembers] = useState([]);
  const membersRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = membersRef.current.indexOf(entry.target);
            if (index !== -1 && !visibleMembers.includes(index)) {
              setVisibleMembers((prev) => [...prev, index]);
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    membersRef.current.forEach((member) => {
      if (member) observer.observe(member);
    });

    return () => observer.disconnect();
  }, [activeTab, visibleMembers]);

  const teamMembers = [
    {
      name: "Abdoulaye DIALLO",
      role: "Développeur",
      description: "Expert en développement full-stack et architecture logicielle.",
      image: dialloImg,
      linkedin: "https://linkedin.com",
      github: "https://github.com",
      email: "diallo@disaade.com",
      color: "#3498db",
    },
    {
      name: "Mamady m'boh CISSE",
      role: "Spécialiste IA",
      description: "Intelligence artificielle et apprentissage automatique pour la santé.",
      image: cisseImg,
      linkedin: "https://linkedin.com",
      github: "https://github.com",
      email: "cisse@disaade.com",
      color: "#9b59b6",
    },
    {
      name: "Josiane",
      role: "Communication & Business",
      description: "Stratégie commerciale et relations partenaires.",
      image: josianeImg,
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      email: "josiane@disaade.com",
      color: "#e74c3c",
    },
    {
      name: "Abdoulaye KABA",
      role: "Ingénieur IoT",
      description: "Systèmes embarqués et dispositifs médicaux connectés.",
      image: kabaImg,
      linkedin: "https://linkedin.com",
      github: "https://github.com",
      email: "kaba@disaade.com",
      color: "#1abc9c",
    },
    {
      name: "Mohamed DIAOUNE",
      role: "Designer UX/UI",
      description: "Expérience utilisateur et interfaces intuitives.",
      image: diaouneImg,
      linkedin: "https://linkedin.com",
      behance: "https://behance.net",
      email: "diaoune@disaade.com",
      color: "#f39c12",
    },
  ];

  return (
    <section id="team" className="team">
      <div className="container">
        {/* Header */}
        <div className="team-header">
          <div className="header-decoration">
            <span className="decoration-line"></span>
            <span className="decoration-dot"></span>
            <span className="decoration-line"></span>
          </div>

          <h2 className="section-title">
            <span className="title-accent">Notre Équipe</span>
            <span className="title-main">Les talents derrière DISAADE</span>
          </h2>

          <p className="section-description">
            Une équipe pluridisciplinaire passionnée, combinant expertise technique et vision humaniste pour révolutionner les soins néonatals.
          </p>
        </div>

        {/* Onglets */}
        <div className="team-tabs">
          <button
            className={`tab-button ${activeTab === "team" ? "active" : ""}`}
            onClick={() => setActiveTab("team")}
          >
            👥 Membres de l'équipe
          </button>

          <button
            className={`tab-button ${activeTab === "group" ? "active" : ""}`}
            onClick={() => setActiveTab("group")}
          >
            🖼️ Photo de groupe
          </button>
        </div>

        {/* Contenu */}
        {activeTab === "team" ? (
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                ref={(el) => (membersRef.current[index] = el)}
                className={`team-card ${visibleMembers.includes(index) ? "visible" : ""}`}
                style={{ "--member-color": member.color }}
              >
                <div className="card-glow"></div>

                <div className="member-image-wrapper">
                  <div className="image-overlay"></div>
                  <img
                    src={member.image}
                    alt={`${member.name} - ${member.role}`}
                    className="member-image"
                    loading="lazy"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 400'%3E
                        %3Crect fill='%23${member.color.substring(1)}' width='400' height='400'/%3E
                        %3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial' font-size='120' fill='white'%3E${member.name.charAt(0).toUpperCase()}%3C/text%3E%3C/svg%3E`;
                    }}
                  />

                  <div className="member-social">
                    {member.linkedin && (
                      <a href={member.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <i className="fab fa-linkedin"></i>
                      </a>
                    )}
                    {member.github && (
                      <a href={member.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                        <i className="fab fa-github"></i>
                      </a>
                    )}
                    {member.twitter && (
                      <a href={member.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                        <i className="fab fa-twitter"></i>
                      </a>
                    )}
                    {member.behance && (
                      <a href={member.behance} target="_blank" rel="noopener noreferrer" aria-label="Behance">
                        <i className="fab fa-behance"></i>
                      </a>
                    )}
                    {member.email && (
                      <a href={`mailto:${member.email}`} aria-label="Email">
                        <i className="fas fa-envelope"></i>
                      </a>
                    )}
                  </div>
                </div>

                <div className="member-content">
                  <h3 className="member-name">{member.name}</h3>
                  <span className="member-role">{member.role}</span>
                  <p className="member-description">{member.description}</p>
                </div>

                <div className="card-decoration"></div>
              </div>
            ))}
          </div>
        ) : (
          <div className="group-photo-container">
            <div className="group-photo-wrapper">
              <img
                src={groupPhoto}
                alt="Équipe DISAADE"
                className="group-photo"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 600'%3E%3Crect fill='%23015268' width='1200' height='600'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial' font-size='48' fill='white'%3EÉQUIPE DISAADE%3C/text%3E%3C/svg%3E";
                }}
              />
              <div className="group-overlay">
                <div className="group-info">
                  <h3>L'équipe DISAADE</h3>
                  <p>Unis pour sauver des vies</p>
                </div>
              </div>
            </div>

            <div className="group-stats">
              <div className="stat-item">
                <div className="stat-number">5</div>
                <div className="stat-label">Membres passionnés</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">1</div>
                <div className="stat-label">Mission commune</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">∞</div>
                <div className="stat-label">Impact potentiel</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Team;
