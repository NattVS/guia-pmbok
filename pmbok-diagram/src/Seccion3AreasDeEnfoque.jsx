import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// --- DATA: 5 Áreas de Enfoque ---
const AREAS_ENFOQUE = [
  {
    id: "01 - 05",
    titulo: "Inicio",
    route: "/areas-de-enfoque/inicio",
    sub: "Initiating Focus Area",
    desc: "Autorizar el proyecto formalmente.",
    items: ["Project Charter.", "Identificar Stakeholders."],
  },
  {
    id: "02 - 05",
    titulo: "Planeación",
    route: "/areas-de-enfoque/planeacion",
    sub: "Planning Focus Area",
    desc: "Definir el cómo, cuándo y con qué.",
    items: ["Plan de Gestión.", "EDT/WBS.", "Cronograma.", "Presupuesto."],
  },
  {
    id: "03 - 05",
    titulo: "Ejecución",
    route: "/areas-de-enfoque/ejecucion",
    sub: "Executing Focus Area",
    desc: "Realizar el trabajo planificado.",
    items: ["Dirigir equipo.", "Gestionar calidad.", "Comunicaciones."],
  },
  {
    id: "04 - 05",
    titulo: "Monitoreo y Control",
    route: "/areas-de-enfoque/monitoreo-y-control",
    sub: "Monitoring & Controlling Focus Area",
    desc: "Medir el desempeño y aplicar cambios.",
    items: ["Indicadores KPI.", "Control cambios.", "Informes avance."],
  },
  {
    id: "05 - 05",
    titulo: "Cierre",
    route: "/areas-de-enfoque/cierre",
    sub: "Closing Focus Area",
    desc: "Formalizar el fin del proyecto o fase.",
    items: ["Acta de cierre.", "Lecciones aprendidas.", "Liberar recursos."],
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
  const navigate = useNavigate();

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100 + index * 90);
    return () => clearTimeout(t);
  }, [index]);

  return (
    <div
      onClick={() => area.route && navigate(area.route)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? "rgba(126, 34, 206, 0.35)" : BG_CARD,
        border: `1.5px solid ${hovered ? PURPLE_ACCENT : BORDER_CARD}`,
        borderRadius: "20px",
        padding: "26px",
        display: "flex",
        flexDirection: "column",
        transition: "all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1)",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
        boxShadow: hovered ? "0 12px 40px rgba(0,0,0,0.4)" : "0 4px 20px rgba(0,0,0,0.2)",
        cursor: area.route ? "pointer" : "default",
      }}
    >
      <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: "4px" }}>
        <span style={{ fontSize: "12px", fontWeight: 800, color: PURPLE_ACCENT, opacity: 0.9 }}>
          {area.id}
        </span>
      </div>

      <h3 style={{ margin: "0 0 4px", fontSize: "24px", fontWeight: 800, color: "#fff" }}>
        {area.titulo}
      </h3>

      <div style={{ fontSize: "13px", color: PURPLE_ACCENT, marginBottom: "12px", fontWeight: 600 }}>
        {area.sub}
      </div>

      <p style={{ fontSize: "14px", lineHeight: 1.6, margin: "0 0 20px", color: "#e9d5ff" }}>
        {area.desc}
      </p>

      <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: "8px" }}>
        {area.items.map((item, i) => (
          <li key={i} style={{ fontSize: "13px", display: "flex", gap: "10px", color: "#f3e8ff", alignItems: "baseline" }}>
            <span style={{ color: PURPLE_ACCENT, fontSize: "18px" }}>•</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Seccion3AreasDeEnfoque() {
  const [headerVisible, setHeaderVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const t = setTimeout(() => setHeaderVisible(true), 50);
    return () => clearTimeout(t);
  }, []);

  return (
    <div style={{ minHeight: "100vh", background: BG_PAGE, color: "#fff", fontFamily: "system-ui, sans-serif" }}>
      
      {/* ── TOP NAV BAR ── */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 32px", background: NAV_BG, position: "sticky", top: 0, zIndex: 100, borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
        <div style={{ border: "1px solid rgba(255,255,255,0.4)", padding: "7px 14px", borderRadius: "6px" }}>
          <b style={{ fontSize: "12px" }}>PMBOK® Guide</b>
          <div style={{ fontSize: "10px", opacity: 0.6 }}>Octava Edición</div>
        </div>

        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: "17px", fontWeight: 700 }}>El ADN de la gestión de proyectos de valor</div>
          <div style={{ fontSize: "11px", opacity: 0.5, letterSpacing: "1px" }}>PMBOK 8 – PMI 2025 – GUIA INTERACTIVA</div>
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
      <div style={{ padding: "40px 60px 60px", maxWidth: "1280px", margin: "0 auto", opacity: headerVisible ? 1 : 0, transition: "opacity 0.5s ease" }}>
        
        {/* Breadcrumb Mejorado */}
        <div style={{ fontSize: "13px", color: "rgba(255,255,255,0.5)", marginBottom: "15px" }}>
          <span style={{ cursor: "pointer" }} onClick={() => navigate("/")}>Inicio</span>
          <span style={{ margin: "0 8px", opacity: 0.4 }}>/</span>
          <span style={{ color: "#fff", fontWeight: "500" }}>Sección 3</span>
        </div>

        {/* Section Label */}
        <div style={{ color: PURPLE_ACCENT, fontSize: "14px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "8px" }}>
          Sección 3
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
          5 Áreas de Enfoque
        </h1>

        {/* Description */}
        <p style={{ fontSize: "17px", color: "rgba(255,255,255,0.8)", lineHeight: "1.7", maxWidth: "880px", margin: "0 0 50px" }}>
          Las Áreas de Enfoque representan el ciclo de vida práctico. Son el <b>CUÁNDO</b> ocurre la gestión, 
          mientras que los dominios representan el QUÉ. No son fases rígidas, sino un flujo continuo de entrega de valor.
        </p>

        {/* Cards Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "24px",
          }}
        >
          {AREAS_ENFOQUE.map((area, i) => (
            <AreaCard key={area.titulo} area={area} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
}