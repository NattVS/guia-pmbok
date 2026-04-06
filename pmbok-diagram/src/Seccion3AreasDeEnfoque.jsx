import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// --- DATA: 5 Áreas de Enfoque ---
const AREAS_ENFOQUE = [
  {
    id: "01 - 05",
    titulo: "Inicio",
    sub: "Initiating Focus Area",
    desc: "Autorizar el proyecto formalmente.",
    items: ["Project Charter.", "Identificar Stakeholders."],
  },
  {
    id: "02 - 05",
    titulo: "Planeación",
    sub: "Planning Focus Area",
    desc: "Definir el cómo, cuándo y con qué.",
    items: ["Plan de Gestión.", "EDT/WBS.", "Cronograma.", "Presupuesto."],
  },
  {
    id: "03 - 05",
    titulo: "Ejecución",
    sub: "Executing Focus Area",
    desc: "Realizar el trabajo planificado.",
    items: ["Dirigir equipo.", "Gestionar calidad.", "Comunicaciones."],
  },
  {
    id: "04 - 05",
    titulo: "Monitoreo y Control",
    sub: "Monitoring & Controlling Focus Area",
    desc: "Medir el desempeño y aplicar cambios.",
    items: ["Indicadores KPI.", "Control cambios.", "Informes avance."],
  },
  {
    id: "05 - 05",
    titulo: "Cierre",
    sub: "Closing Focus Area",
    desc: "Formalizar el fin del proyecto o fase.",
    items: ["Acta de cierre.", "Lecciones aprendidas.", "Liberar recursos."],
  },
];

// --- COLOR PALETTE (Purple Theme) ---
const PURPLE_ACCENT = "#c084fc"; // Light purple for bullets/labels
const BG_PAGE = "#2e104e";       // Deep purple background
const BG_CARD = "rgba(88, 28, 135, 0.4)"; // Translucent purple
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

export default function Seccion3AreasDeEnfoque() {
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 40);
    return () => clearTimeout(t);
  }, []);

  return (
    <div style={{ minHeight: "100vh", background: BG_PAGE, color: "#fff", fontFamily: "system-ui, sans-serif" }}>
      {/* TOP NAV */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 32px", background: NAV_BG }}>
        <div style={{ border: "1px solid rgba(255,255,255,0.4)", padding: "6px 12px", borderRadius: "4px", fontSize: "12px" }}>
          <b>PMBOK® Guide</b>
          <div style={{ fontSize: "10px", opacity: 0.6 }}>Octava Edición</div>
        </div>
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: "16px", fontWeight: 700 }}>El ADN de la gestión de proyectos de valor</div>
          <div style={{ fontSize: "10px", opacity: 0.5, letterSpacing: "2px" }}>PMBOK 8 – PMI 2025 – GUIA INTERACTIVA</div>
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
        <div style={{ fontSize: "14px", color: PURPLE_ACCENT, marginBottom: "8px", fontWeight: 600 }}>Sección 3</div>
        <h1 style={{ fontSize: "48px", margin: "0 0 20px" }}>5 Áreas de Enfoque</h1>
        <p style={{ fontSize: "18px", color: "#d8b4fe", maxWidth: "850px", lineHeight: 1.6, marginBottom: "50px" }}>
          Las 5 Áreas de Enfoque representan el ciclo de vida práctico de cualquier proyecto. 
          Son una guía técnica clara y <b>NO prescriptiva</b>. Son el CUÁNDO; los dominios son el QUÉ.
        </p>

        {/* CARDS GRID */}
        <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", justifyContent: "center" }}>
          {AREAS_ENFOQUE.map((area, i) => (
            <AreaCard key={area.titulo} area={area} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
}