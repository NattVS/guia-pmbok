import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// --- Updated Data Structure for the 7 Dominios ---
const DOMINIOS = [
  {
    id: "01",
    total: "07",
    titulo: "Gobernanza",
    route: "/dominios-de-desempeño/governanza",
    subtitulo: "Governance Domain",
    descripcion: "Marco de toma de decisiones que guía el proyecto hacia la entrega de valor. Es holístico e integra todos los demás dominios."
  },
  {
    id: "02",
    total: "07",
    titulo: "Alcance",
    route: "/dominios-de-desempeño/alcance",
    subtitulo: "Scope Domain",
    descripcion: "Define y controla qué está incluido y excluido del proyecto, asegurando que todo el trabajo contribuya al valor esperado."
  },
  {
    id: "03",
    total: "07",
    titulo: "Cronograma",
    route: "/areas-de-enfoque/cronograma",
    subtitulo: "Schedule Domain",
    descripcion: "Planificar y controlar el tiempo de entrega del proyecto para maximizar el valor en el momento oportuno."
  },
  {
    id: "04",
    total: "07",
    titulo: "Finanzas",
    route: "/areas-de-enfoque/finanzas",
    subtitulo: "Finance Domain",
    descripcion: "Planificar, estimar, presupuestar y controlar los costos del proyecto para maximizar el valor por unidad de inversión."
  },
  {
    id: "05",
    total: "07",
    titulo: "Recursos",
    route: "/areas-de-enfoque/recursos",
    subtitulo: "Resources Domain",
    descripcion: "Planificar, adquirir, desarrollar y controlar los recursos humanos y físicos necesarios para ejecutar el proyecto."
  },
  {
    id: "06",
    total: "07",
    titulo: "Riesgos",
    route: "/areas-de-enfoque/riesgos",
    subtitulo: "Risk Domain",
    descripcion: "Identificar, analizar y responder a los riesgos (amenazas y oportunidades) que pueden afectar los objetivos del proyecto."
  },
  {
    id: "07",
    total: "07",
    titulo: "Interesados",
    route: "/areas-de-enfoque/interesados",
    subtitulo: "Stakeholders Domain",
    descripcion: "Identificar y gestionar el compromiso de todos los que tienen interés en el proyecto o son impactados por él."
  }
];

  // --- GREEN THEME PALETTE ---
  const GREEN_THEME = {
    bg: "#1a2e23",           // Deep forest green background
    navBg: "#0e1628",        // Top navy navbar
    cardBg: "rgba(255, 255, 255, 0.03)",
    border: "rgba(74, 222, 128, 0.25)", // Muted green borders
    accent: "#4ade80",      // Bright emerald accent
  };

// --- Sub-component: Dominio Card ---
function DominioCard({ area, index }) {
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100 + index * 100);
    return () => clearTimeout(t);
  }, [index]);

  return (
    <div
      onClick={() => {
        if (area.route) {
          navigate(area.route);
        }
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        flex: "1 1 280px",
        background: hovered ? "rgba(255, 255, 255, 0.06)" : GREEN_THEME.cardBg,
        border: `1.5px solid ${hovered ? GREEN_THEME.accent : GREEN_THEME.border}`,
        borderRadius: "20px",
        padding: "24px",
        display: "flex",
        flexDirection: "column",
        transition: "all 0.4s ease",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
        boxShadow: hovered
          ? "0 10px 40px rgba(0,0,0,0.4)"
          : "0 4px 20px rgba(0,0,0,0.2)",
        cursor: area.route ? "pointer" : "default",
      }}
    >
      {/* Header */}
      <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: "4px" }}>
        <span style={{ fontSize: "12px", fontWeight: 700, color: GREEN_THEME.accent, opacity: 0.8 }}>
          {area.id}
        </span>
      </div>

      {/* Title */}
      <h3 style={{ margin: "0 0 4px", fontSize: "22px", fontWeight: 700 }}>
        {area.titulo}
      </h3>

      <div style={{ fontSize: "13px", color: GREEN_THEME.accent, marginBottom: "12px", opacity: 0.9 }}>
        {area.subtitulo}
      </div>

      {/* Description */}
      <p style={{ fontSize: "14px", lineHeight: 1.5, margin: "0 0 16px", color: "#e9d5ff" }}>
        {area.descripcion}
      </p>
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
        <h1 style={{
            fontSize: "clamp(30px, 4.5vw, 52px)",
            fontWeight: 700,
            margin: "0 0 20px",
            letterSpacing: "-0.02em",
            lineHeight: 1.08,
            color: "#ffffff",
          }}>
          7 Dominios de Desempeño
        </h1>

        {/* Description */}
        <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.8)", lineHeight: "1.7", maxWidth: "880px", margin: "0 0 50px" }}>
          Los dominios son áreas de enfoque interrelacionadas que trabajan como un sistema integrado de entrega. Se aplican de forma CONTINUA a lo largo de todo el ciclo de vida del proyecto.
        </p>

        {/* Cards Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "20px",
          }}
        >
          {DOMINIOS.map((d, i) => (
            <DominioCard key={d.titulo} area={d} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
}