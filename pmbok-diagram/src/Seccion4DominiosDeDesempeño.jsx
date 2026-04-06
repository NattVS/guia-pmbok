import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// --- Updated Data Structure for the 7 Dominios ---
const DOMINIOS = [
  {
    id: "01",
    total: "07",
    titulo: "Gobernanza",
    subtitulo: "Governance Domain",
    descripcion: "Marco de toma de decisiones que guía el proyecto hacia la entrega de valor. Es holístico e integra todos los demás dominios."
  },
  {
    id: "02",
    total: "07",
    titulo: "Alcance",
    subtitulo: "Scope Domain",
    descripcion: "Define y controla qué está incluido y excluido del proyecto, asegurando que todo el trabajo contribuya al valor esperado."
  },
  {
    id: "03",
    total: "07",
    titulo: "Cronograma",
    subtitulo: "Schedule Domain",
    descripcion: "Planificar y controlar el tiempo de entrega del proyecto para maximizar el valor en el momento oportuno."
  },
  {
    id: "04",
    total: "07",
    titulo: "Finanzas",
    subtitulo: "Finance Domain",
    descripcion: "Planificar, estimar, presupuestar y controlar los costos del proyecto para maximizar el valor por unidad de inversión."
  },
  {
    id: "05",
    total: "07",
    titulo: "Recursos",
    subtitulo: "Resources Domain",
    descripcion: "Planificar, adquirir, desarrollar y controlar los recursos humanos y físicos necesarios para ejecutar el proyecto."
  },
  {
    id: "06",
    total: "07",
    titulo: "Riesgos",
    subtitulo: "Risk Domain",
    descripcion: "Identificar, analizar y responder a los riesgos (amenazas y oportunidades) que pueden afectar los objetivos del proyecto."
  },
  {
    id: "07",
    total: "07",
    titulo: "Interesados",
    subtitulo: "Stakeholders Domain",
    descripcion: "Identificar y gestionar el compromiso de todos los que tienen interés en el proyecto o son impactados por él."
  }
];

// --- Sub-component: Dominio Card ---
function DominioCard({ dominio, index, theme }) {
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100 + index * 80);
    return () => clearTimeout(timer);
  }, [index]);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? "rgba(255, 255, 255, 0.06)" : theme.cardBg,
        border: `1px solid ${hovered ? theme.accent : theme.border}`,
        borderRadius: "14px",
        padding: "24px 22px",
        display: "flex",
        flexDirection: "column",
        gap: "6px",
        transition: "all 0.3s ease",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(15px)",
        boxShadow: hovered ? `0 6px 20px ${theme.accent}15` : "none",
        cursor: "default",
        height: "100%",
        boxSizing: "border-box"
      }}
    >
      {/* Counter */}
      <div style={{ color: theme.accent, fontSize: "11px", fontWeight: "700", letterSpacing: "0.15em", alignSelf: "flex-end", marginBottom: "4px" }}>
        {dominio.id} - {dominio.total}
      </div>

      {/* Title */}
      <div style={{ color: "#fff", fontSize: "19px", fontWeight: "700", letterSpacing: "-0.01em", margin: "0 0 2px 0" }}>
        {dominio.titulo}
      </div>

      {/* Subtitle */}
      <div style={{ color: `${theme.accent}aa`, fontSize: "12.5px", fontStyle: "italic", fontWeight: "400", marginBottom: "6px" }}>
        {dominio.subtitulo}
      </div>

      {/* Description */}
      <div style={{ color: "rgba(255, 255, 255, 0.85)", fontSize: "13.5px", lineHeight: "1.6", fontWeight: "400" }}>
        {dominio.descripcion}
      </div>
    </div>
  );
}

// --- Main Page Component ---
export default function Seccion4Dominios() {
  const navigate = useNavigate();
  const [headerVisible, setHeaderVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setHeaderVisible(true), 50);
    return () => clearTimeout(t);
  }, []);

  // --- GREEN THEME PALETTE ---
  const GREEN_THEME = {
    bg: "#1a2e23",           // Deep forest green background
    navBg: "#0e1628",        // Top navy navbar
    cardBg: "rgba(255, 255, 255, 0.03)",
    border: "rgba(74, 222, 128, 0.25)", // Muted green borders
    accent: "#4ade80",      // Bright emerald accent
  };

  return (
    <div style={{ backgroundColor: GREEN_THEME.bg, minHeight: "100vh", color: "#fff", fontFamily: "'Segoe UI', system-ui, sans-serif", boxSizing: "border-box" }}>
      {/* ── TOP NAV BAR (Retained Layout/Typography) ── */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 40px", borderBottom: "1px solid rgba(255,255,255,0.08)", background: GREEN_THEME.navBg, position: "sticky", top: 0, zIndex: 100 }}>
        <div style={{ border: "1px solid rgba(255,255,255,0.5)", borderRadius: "4px", padding: "6px 12px", fontSize: "11px", fontWeight: "bold" }}>
          PMBOK® Guide <br /> <span style={{fontWeight: "400", opacity: 0.6}}>Octava Edición</span>
        </div>
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: "16px", fontWeight: "700", letterSpacing: "-0.01em" }}>El ADN de la gestión de proyectos de valor</div>
          <div style={{ fontSize: "10px", opacity: 0.5, marginTop: "2px", letterSpacing: "0.1em", textTransform: "uppercase" }}>PMBOK 8 - PMI 2025 - GUIA INTERACTIVA</div>
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

      {/* ── PAGE CONTENT (7 Dominio Cards Grid) ── */}
      <div style={{ padding: "40px 60px 60px", maxWidth: "1280px", margin: "0 auto", opacity: headerVisible ? 1 : 0, transition: "opacity 0.5s ease" }}>
        {/* Breadcrumb */}
        <div style={{ fontSize: "13px", color: "rgba(255,255,255,0.5)", marginBottom: "15px" }}>
          Inicio / <span style={{ color: "#fff", fontWeight: "500" }}>Sección 4</span>
        </div>

        {/* Section Label */}
        <div style={{ color: GREEN_THEME.accent, fontSize: "14px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "8px" }}>
          Sección 4
        </div>

        {/* Heading */}
        <h1 style={{ fontSize: "44px", fontWeight: "800", margin: "0 0 16px", lineHeight: "1.05" }}>
          7 Dominios de Desempeño
        </h1>

        {/* Description */}
        <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.8)", lineHeight: "1.7", maxWidth: "880px", margin: "0 0 50px" }}>
          Los dominios son áreas de enfoque interrelacionadas que trabajan como un sistema integrado de entrega. Se aplican de forma CONTINUA a lo largo de todo el ciclo de vida del proyecto.
        </p>

        {/* Cards Grid: 7 Items */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
          {DOMINIOS.map((d, i) => (
            <DominioCard key={d.titulo} dominio={d} index={i} theme={GREEN_THEME} />
          ))}
        </div>
      </div>
    </div>
  );
}