import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../src/assets/Logo-Nuevo-Grande.png";

// --- DATA: Herramientas y tecnicas ---
const HERRAMIENTASYTEC = [
  {
    titulo: "Herramientas y Técnicas",
    items: ["Juicio de expertos", "Recopilación de datos (entrevistas, encuestas)", "Análisis de datos (FODA, riesgo)",
        "Técnicas de toma de decisiones", "Habilidades interpersonales", "Reuniones de coordinación", "Identificar Stakeholders."
    ],
  },
];

// --- COLOR PALETTE (Purple Theme) ---
const PURPLE_ACCENT = "#c084fc";
const BG_PAGE = "#2e104e";       
const BG_CARD = "rgba(88, 28, 135, 0.4)"; 
const BORDER_CARD = "rgba(168, 85, 247, 0.4)"; 
const NAV_BG = "#0e1628";

function AreaCard({ area, index }) {
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100 + index * 100);
    return () => clearTimeout(t);
  }, [index]);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        flex: "1 1 280px",
        background: hovered ? "rgba(126, 34, 206, 0.3)" : BG_CARD,
        border: `1.5px solid ${hovered ? PURPLE_ACCENT : BORDER_CARD}`,
        borderRadius: "20px",
        padding: "24px",
        display: "flex",
        flexDirection: "column",
        transition: "all 0.4s ease",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
        boxShadow: hovered ? "0 10px 40px rgba(0,0,0,0.4)" : "0 4px 20px rgba(0,0,0,0.2)",
      }}
    >
      {/* Header with ID */}
      <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: "4px" }}>
        <span style={{ fontSize: "12px", fontWeight: 700, color: PURPLE_ACCENT, opacity: 0.8 }}>
          {area.id}
        </span>
      </div>

      {/* Titles */}
      <h3 style={{ margin: "0 0 4px", fontSize: "22px", fontWeight: 700 }}>{area.titulo}</h3>
      <div style={{ fontSize: "13px", color: PURPLE_ACCENT, marginBottom: "12px", opacity: 0.9 }}>
        {area.sub}
      </div>

      {/* Description */}
      <p style={{ fontSize: "14px", lineHeight: 1.5, margin: "0 0 16px", color: "#e9d5ff" }}>
        {area.desc}
      </p>

      {/* Bullet list */}
      <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: "6px" }}>
        {area.items.map((item, i) => (
          <li key={i} style={{ fontSize: "13.5px", display: "flex", gap: "8px", color: "#f3e8ff" }}>
            <span style={{ color: PURPLE_ACCENT }}>•</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Seccion7HerramientasYTecnicas() {
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 40);
    return () => clearTimeout(t);
  }, []);
  const styles = {
    container: {
      backgroundColor: BG_PAGE,
      minHeight: '100vh',
      color: '#fff',
      paddingBottom: '60px',
      fontFamily: 'Inter, system-ui, -apple-system, sans-serif'
    },
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '20px 40px',
      backgroundColor: NAV_BG,
      marginBottom: '40px'
    },
    contentArea: {
      maxWidth: '1280px',
      margin: '0 auto',
      padding: '0 40px'
    },
    titleSection: {
      marginBottom: '40px'
    },
    breadcrumb: {
      fontSize: '14px',
      color: 'rgba(255,255,255,0.6)',
      marginBottom: '10px'
    },
    sectionLabel: {
      color: PURPLE_ACCENT,
      fontWeight: '700',
      fontSize: '16px',
      textTransform: 'uppercase',
      letterSpacing: '1px'
    },
    title: {
      fontSize: '56px',
      fontWeight: '800',
      margin: '8px 0 12px 0'
    },
    tableContainer: {
      overflowX: 'auto',
      borderRadius: '16px',
      border: `1px solid ${BORDER_CARD}`,
      boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
    },
    table: {
      width: '100%',
      borderCollapse: 'collapse',
      backgroundColor: 'rgba(255, 255, 255, 0.03)'
    },
    th: {
      backgroundColor: PURPLE_ACCENT,
      padding: '18px 15px',
      fontSize: '14px',
      fontWeight: '600',
      border: `1px solid ${BORDER_CARD}`,
      textAlign: 'center',
      color: 'rgba(255,255,255,0.9)'
    },
    td: {
      padding: '14px 15px',
      fontSize: '13px',
      border: `1px solid ${BORDER_CARD}`,
      verticalAlign: 'middle',
      lineHeight: '1.5',
      color: 'rgba(255,255,255,0.85)'
    },
    domainCell: {
      textAlign: 'center',
      fontWeight: '700',
      backgroundColor: 'rgba(255,255,255,0.05)',
      fontSize: '15px'
    },
    navButton: {
      background: 'rgba(255,255,255,0.08)',
      border: '1px solid rgba(255,255,255,0.2)',
      color: '#fff',
      padding: '8px 24px',
      borderRadius: '8px',
      cursor: 'pointer',
      transition: 'all 0.2s ease'
    }
  };

  return (
    <div style={styles.container}>
      {/* ── TOP NAV BAR ── */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "14px 32px",
          background: NAV_BG,
          position: "sticky",
          top: 0,
          zIndex: 100,
          borderBottom: "1px solid rgba(255,255,255,0.05)"
        }}
      >
        {/* LEFT: Logo + PMBOK */}
        <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
          <img 
            src={logo} 
            alt="Logo" 
            style={{ height: "45px", width: "auto" }} 
          />

          <div style={{ 
            borderLeft: "1px solid rgba(255,255,255,0.3)", 
            paddingLeft: "15px"
          }}>
            <div style={{ fontWeight: 700, fontSize: "12px" }}>
              PMBOK® Guide
            </div>
            <div style={{ fontSize: "10px", opacity: 0.6 }}>
              Octava Edición
            </div>
          </div>
        </div>

        {/* CENTER: Title */}
          <div style={{ 
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
            textAlign: "center",
            pointerEvents: "none" 
          }}>
            <div style={{ fontSize: "18px", fontWeight: 700 }}>
              El ADN de la gestión de proyectos de valor
            </div>
            <div style={{ fontSize: "11px", opacity: 0.5, letterSpacing: "0.07em" }}>
              PMBOK 8 – PMI 2025
            </div>
          </div>

        {/* Back button */}
        <button
          onClick={() => navigate("/")}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            background: "#3a4fc8",
            border: "none",
            borderRadius: "8px",
            color: "#fff",
            padding: "10px 20px",
            fontSize: "14px",
            fontWeight: 600,
            cursor: "pointer",
            letterSpacing: "0.01em",
            transition: "background 0.18s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = "#4a5fd8")}
          onMouseLeave={(e) => (e.currentTarget.style.background = "#3a4fc8")}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M10 3L5 8L10 13"
              stroke="#fff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Inicio
        </button>
      </div>

      {/* CONTENT */}
      <div style={{ padding: "40px 60px", maxWidth: "1200px", margin: "0 auto", opacity: visible ? 1 : 0, transition: "opacity 0.6s" }}>
        <div style={styles.breadcrumb}>Inicio / <span style={{color: '#fff'}}>Sección 7</span></div>
        <h1 style={styles.title}>Herramientas y Técnicas</h1>
        <p style={{ fontSize: "18px", color: "#d8b4fe", maxWidth: "850px", lineHeight: 1.6, marginBottom: "50px" }}>
          El PMBOK 8, incluye 169 técnicas y 137 herramientas. Resumidas en el siguiente ejemplo:
        </p>

        {/* CARDS GRID */}
        <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", justifyContent: "center" }}>
          {HERRAMIENTASYTEC.map((area, i) => (
            <AreaCard key={area.titulo} area={area} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
}