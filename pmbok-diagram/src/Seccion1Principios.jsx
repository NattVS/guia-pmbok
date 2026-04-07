import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// --- COLOR PALETTE (Light Blue / Cyan Theme) ---
const BLUE_ACCENT = "#38bdf8"; 
const BG_PAGE = "#082f49";        
const BG_CARD = "rgba(12, 74, 110, 0.4)"; 
const BORDER_CARD = "rgba(56, 189, 248, 0.3)"; 
const NAV_BG = "#0e1628";

const PRINCIPIOS = [
  {
    id: "01",
    total: "06",
    titulo: "Visión Holística",
    route: "/principios/vision-holistica",
    subtitulo: "Adopt a Holistic View",
    descripcion:
      "Ver el proyecto como un sistema integrado considerando todas las interdependencias, desde el inicio hasta el cierre.",
  },
  {
    id: "02",
    total: "06",
    titulo: "Enfocarse en el Valor",
    route: "/principios/enfocarse-en-el-valor",
    subtitulo: "Focus on Value",
    descripcion:
      "El valor es el indicador final de éxito del proyecto. Todo el trabajo debe orientarse a maximizar el retorno sobre la inversión.",
  },
  {
    id: "03",
    total: "06",
    titulo: "Calidad Integrada",
    route: "/principios/calidad-integrada",
    subtitulo: "Embed Quality",
    descripcion:
      "La calidad no es un control al final: se integra en cada proceso y entregable desde el inicio del proyecto.",
  },
  {
    id: "04",
    total: "06",
    titulo: "Liderazgo Responsable",
    route: "/principios/liderazgo-responsable",
    subtitulo: "Be an Accountable Leader",
    descripcion:
      "Los proyectos exigen un liderazgo efectivo y ético. El líder toma responsabilidad por los objetivos y acciones.",
  },
  {
    id: "05",
    total: "06",
    titulo: "Cultura de Sostenibilidad",
    route: "/principios/cultura-de-sostenibilidad",
    subtitulo: "Integrate Sustainability",
    descripcion:
      "Integrar la sostenibilidad en todas las áreas del proyecto: considerando personas, planeta y valor económico.",
  },
  {
    id: "06",
    total: "06",
    titulo: "Cultura Empoderada",
    route: "/principios/cultura-empoderada",
    subtitulo: "Build an Empowered Culture",
    descripcion:
      "Promover confianza mutua, claridad de roles y colaboración, generando efectos sinérgicos en el equipo.",
  },
];

function PrincipioCard({ principio, index }) {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 80 + index * 90);
    return () => clearTimeout(timer);
  }, [index]);

  return (
    <div
      onClick={() => principio.route && navigate(principio.route)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        cursor: principio.route ? "pointer" : "default",
        background: hovered ? "rgba(12, 74, 110, 0.6)" : BG_CARD,
        border: `1.5px solid ${hovered ? BLUE_ACCENT : BORDER_CARD}`,
        borderRadius: "14px",
        padding: "24px 22px 22px",
        display: "flex",
        flexDirection: "column",
        gap: "6px",
        transition: "all 0.4s ease",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(18px)",
        boxShadow: hovered 
          ? `0 10px 30px rgba(56, 189, 248, 0.15)` 
          : "0 4px 12px rgba(0,0,0,0.2)",
      }}
    >
      <div
        style={{
          color: BLUE_ACCENT,
          fontSize: "12px",
          fontWeight: 700,
          letterSpacing: "0.1em",
          alignSelf: "flex-end",
          opacity: 0.8,
        }}
      >
        {principio.id} - {principio.total}
      </div>

      <div style={{ color: "#ffffff", fontSize: "19px", fontWeight: 700, lineHeight: 1.2 }}>
        {principio.titulo}
      </div>

      <div
        style={{
          color: BLUE_ACCENT,
          fontSize: "13px",
          fontWeight: 500,
          fontStyle: "italic",
          marginBottom: "8px",
          opacity: 0.9
        }}
      >
        {principio.subtitulo}
      </div>

      <div
        style={{
          color: "#e0f2fe",
          fontSize: "13.5px",
          lineHeight: 1.6,
          fontWeight: 400,
        }}
      >
        {principio.descripcion}
      </div>
    </div>
  );
}

export default function Seccion1Principios() {
  const navigate = useNavigate();
  const [headerVisible, setHeaderVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setHeaderVisible(true), 40);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: BG_PAGE,
        color: "#fff",
        fontFamily: "'Segoe UI', system-ui, sans-serif",
      }}
    >
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
        <div style={{ border: "1px solid rgba(255,255,255,0.4)", borderRadius: "6px", padding: "7px 14px" }}>
          <b style={{ fontSize: "12px" }}>PMBOK® Guide</b>
          <div style={{ fontSize: "10px", opacity: 0.6 }}>Octava Edición</div>
        </div>

        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: "18px", fontWeight: 700 }}>El ADN de la gestión de proyectos de valor</div>
          <div style={{ fontSize: "11px", opacity: 0.5, letterSpacing: "0.07em" }}>PMBOK 8 – PMI 2025</div>
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

      {/* ── PAGE CONTENT ── */}
      <div style={{ padding: "40px 48px", maxWidth: "1160px", margin: "0 auto" }}>
        
        {/* Breadcrumb */}
        <div style={{ 
          fontSize: "13px", 
          color: BLUE_ACCENT, 
          marginBottom: "20px", 
          opacity: headerVisible ? 0.8 : 0, 
          transition: "opacity 0.4s" 
        }}>
          <span style={{ cursor: "pointer" }} onClick={() => navigate("/")}>Inicio</span>
          <span style={{ margin: "0 8px", opacity: 0.4, color: "#fff" }}>/</span>
          <span style={{ color: "#fff" }}>Sección 1</span>
        </div>

        <div style={{
          color: BLUE_ACCENT,
          fontSize: "14px",
          fontWeight: 700,
          letterSpacing: "0.1em",
          marginBottom: "10px",
          textTransform: "uppercase",
          opacity: headerVisible ? 1 : 0,
          transform: headerVisible ? "translateY(0)" : "translateY(10px)",
          transition: "all 0.4s ease"
        }}>
          Sección 1
        </div>

        <h1 style={{
                  fontSize: "clamp(28px, 4vw, 48px)",
                  fontWeight: 700,
                  margin: "0 0 16px",
                  letterSpacing: "-0.02em",
                  lineHeight: 1.1,
                  transition: "opacity 0.45s ease 0.06s, transform 0.45s ease 0.06s",
                }}>
          6 Principios de Gestión
        </h1>

        <p style={{
          fontSize: "16px",
          color: "#bae6fd",
          lineHeight: 1.8,
          maxWidth: "800px",
          margin: "0 0 50px",
          opacity: headerVisible ? 0.9 : 0,
          transform: headerVisible ? "translateY(0)" : "translateY(10px)",
          transition: "all 0.5s ease 0.2s"
        }}>
          Esta edición sintetiza los 12 principios previos en 6 principios fundamentales. No son reglas prescriptivas; 
          son una mentalidad que orienta decisiones y acciones hacia la entrega de valor real.
        </p>

        {/* Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "24px",
        }}>
          {PRINCIPIOS.map((p, i) => (
            <PrincipioCard key={p.id} principio={p} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
}