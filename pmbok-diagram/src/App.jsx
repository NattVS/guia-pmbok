import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// --- Color Constants ---
const WHITE = "#ffffff";
const GOLD = "#b89b4c";
const NAVY_MID = "#2d3b55";
const NAVY_LIGHT = "#3a4b6e";
const BLUE_CARD = "rgba(30, 58, 138, 0.4)";
const GOLD_CARD = "rgba(184, 155, 76, 0.2)";
const PURPLE_CARD = "rgba(107, 33, 168, 0.3)";
const GREEN_CARD = "rgba(20, 83, 45, 0.4)";

// --- Data Structures ---
const PHASES = [
  { label: "INICIO" },
  { label: "PLANEACIÓN" },
  { label: "EJECUCIÓN" },
  { label: "MONITOREO Y\nCONTROL" },
  { label: "CIERRE" },
];

const DOMAINS = [
  "Gobernanza", "Alcance", "Cronograma", "Finanzas",
  "Interesados", "Recursos", "Riesgos", "Gestión del Cambio"
];

const PRINCIPLES = [
  "Visión\nHolística", "Sostenibilidad", "Liderazgo\nResponsable", "Enfoque\nConstante\nen el Valor",
  "Colaboración\nEfectiva", "Gestión del\nCambio", "Adaptabilidad", "Calidad"
];

const CARD_DATA = [
  { id: 1, label: "SECCIÓN 1:", sub: "6 Principios de\nGestión de Proyectos", color: BLUE_CARD, border: "#4a7fc1", top: "0%", left: "50%", tx: "-50%", ty: "0" },
  { id: 2, label: "SECCIÓN 2:", sub: "Ciclo de Vida", color: GOLD_CARD, border: "#c4a84a", top: "15%", right: "5%", tx: "0", ty: "0" },
  { id: 3, label: "SECCIÓN 3:", sub: "5 Áreas de Enfoque\n(Focus Areas)", color: PURPLE_CARD, border: "#8a5ac8", top: "50%", right: "0%", tx: "0", ty: "-50%" },
  { id: 4, label: "SECCIÓN 4:", sub: "7 Dominios\nde Desempeño", color: GREEN_CARD, border: "#3aad6e", bottom: "15%", right: "5%", tx: "0", ty: "0" },
  { id: 5, label: "SECCIÓN 5:", sub: "Procesos", color: BLUE_CARD, border: "#4a7fc1", bottom: "0%", left: "50%", tx: "-50%", ty: "0" },
  { id: 6, label: "SECCIÓN 6:", sub: "Entradas y Salidas", color: GOLD_CARD, border: "#c4a84a", bottom: "15%", left: "5%", tx: "0", ty: "0" },
  { id: 7, label: "SECCIÓN 7:", sub: "Herramientas y Técnicas", color: PURPLE_CARD, border: "#8a5ac8", top: "50%", left: "0%", tx: "0", ty: "-50%" },
  { id: 8, label: "SECCIÓN 8:", sub: "Definiciones Clave y\nGlosario Esencial", color: GREEN_CARD, border: "#3aad6e", top: "15%", left: "5%", tx: "0", ty: "0" },
];

// --- Helpers ---
function polarToXY(angleDeg, r, cx, cy) {
  const rad = ((angleDeg - 90) * Math.PI) / 180;
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
}

function describeSlice(cx, cy, r1, r2, startAngle, endAngle) {
  const s1 = polarToXY(startAngle, r1, cx, cy);
  const e1 = polarToXY(endAngle, r1, cx, cy);
  const s2 = polarToXY(startAngle, r2, cx, cy);
  const e2 = polarToXY(endAngle, r2, cx, cy);
  const la = endAngle - startAngle > 180 ? 1 : 0;
  return `M ${s1.x} ${s1.y} A ${r1} ${r1} 0 ${la} 1 ${e1.x} ${e1.y} L ${e2.x} ${e2.y} A ${r2} ${r2} 0 ${la} 0 ${s2.x} ${s2.y} Z`;
}

export default function PMBOKDiagram() {
  const navigate = useNavigate();

  const [hovered, setHovered] = useState(null);

  const CX = 300, CY = 300;
  const R_OUTER = 240, R_OUTER_IN = 185;
  const R_MID = 180, R_MID_IN = 125;
  const R_INNER = 120, R_CENTER = 70;

  return (
    <div style={{ minHeight: "100vh", background: "#0a0f1d", color: WHITE, padding: "40px", boxSizing: "border-box" }}>
      
      {/* Header Section */}
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "40px", alignItems: "center" }}>
        <div style={{ border: "1px solid rgba(255,255,255,0.3)", padding: "10px 20px", borderRadius: "4px" }}>
          <div style={{ fontWeight: 700 }}>PMBOK® Guide</div>
          <div style={{ fontSize: "12px", opacity: 0.6 }}>Octava Edición</div>
        </div>
        <div style={{ textAlign: "center" }}>
          <h1 style={{ fontSize: "28px", margin: 0, fontWeight: 300 }}>El ADN de la gestión de proyectos de valor</h1>
          <div style={{ fontSize: "12px", opacity: 0.5, letterSpacing: "4px", marginTop: "8px" }}>PMBOK 8 – PMI 2025 – GUÍA INTERACTIVA</div>
        </div>
        <div style={{ display: "flex", gap: "30px" }}>
          {[{ n: 6, l: "Principios" }, { n: 7, l: "Dominios" }, { n: 5, l: "Áreas" }, { n: 40, l: "Procesos" }].map(s => (
            <div key={s.l} style={{ textAlign: "center" }}>
              <div style={{ color: GOLD, fontSize: "24px", fontWeight: 700 }}>{s.n}</div>
              <div style={{ fontSize: "11px", opacity: 0.7, textTransform: "uppercase" }}>{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Diagram Area */}
      <div style={{ position: "relative", width: "1000px", height: "700px", margin: "0 auto" }}>
        
        {/* Connection Lines (Visual Decor) */}
        <svg style={{ position: "absolute", inset: 0, pointerEvents: "none" }} viewBox="0 0 1000 700">
           {/* Add subtle lines connecting cards to wheel center if desired */}
        </svg>

        {/* Floating Cards */}
        {CARD_DATA.map(card => (
          <div
            key={card.id}
            onClick={() => {
              if (card.id === 1) {
                navigate("/principios");
              }
              if (card.id === 2) {
                navigate("/ciclo-de-vida");
              }
              if (card.id === 3) {
                navigate("/areas-de-enfoque");
              }

              if (card.id === 4) {
                navigate("/dominios-de-desempeño");
              }

              if (card.id === 5) {
                navigate("/procesos");
              }

              if (card.id === 6) {
                navigate("/entradas-y-salidas");
              }
              
              if (card.id === 7) {
                navigate("/herramientas-y-tecnicas");
              }
              
              if (card.id === 8) {
                navigate("/glosario-y-conceptos-claves");
              }
            }}
            onMouseEnter={() => setHovered(card.id)}
            onMouseLeave={() => setHovered(null)}
            style={{
              cursor: card.id === 1 ? "pointer" : "default",
              position: "absolute",
              top: card.top,
              bottom: card.bottom,
              left: card.left,
              right: card.right,
              transform: `translate(${card.tx}, ${card.ty}) scale(${hovered === card.id ? 1.05 : 1})`,
              background: card.color,
              border: `1px solid ${card.border}`,
              padding: "15px",
              borderRadius: "12px",
              minWidth: "160px",
              transition: "all 0.3s ease",
              zIndex: 20,
              boxShadow: hovered === card.id ? `0 0 20px ${card.border}44` : "none"
            }}
          >
            <div style={{ fontSize: "12px", fontWeight: 800, marginBottom: "4px", color: card.border }}>
              {card.label}
            </div>
            <div style={{ fontSize: "12px", lineHeight: "1.4", whiteSpace: "pre-line" }}>
              {card.sub}
            </div>
          </div>
        ))}

        {/* Center Wheel */}
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "550px" }}>
          {/*<div style={{ textAlign: "center", fontSize: "14px", opacity: 0.8 }}>Estructura del Modelo de Gestión de Proyectos</div>*/}
          <svg viewBox="0 0 600 600" width="100%" style={{ overflow: "visible" }}>
            
            {/* 1. Outer Phase Ring (5) */}
            {PHASES.map((p, i) => {
              const start = i * 72, end = (i + 1) * 72;
              const mid = start + 36;
              const tPos = polarToXY(mid, (R_OUTER + R_OUTER_IN) / 2, CX, CY);
              return (
                <g key={i}>
                  <path d={describeSlice(CX, CY, R_OUTER, R_OUTER_IN, start + 1, end - 1)} fill={GOLD} opacity={0.85} />
                  <text x={tPos.x} y={tPos.y} fill={WHITE} fontSize="12" fontWeight="700" textAnchor="middle" dominantBaseline="middle" transform={`rotate(${mid}, ${tPos.x}, ${tPos.y})`}>
                    {p.label.split('\n').map((line, j) => <tspan key={j} x={tPos.x} dy={j === 0 ? 0 : 12}>{line}</tspan>)}
                  </text>
                </g>
              );
            })}

            {/* 2. Middle Domain Ring (8) */}
            {DOMAINS.map((d, i) => {
              const start = i * 45, end = (i + 1) * 45;
              const mid = start + 22.5;
              const tPos = polarToXY(mid, (R_MID + R_MID_IN) / 2, CX, CY);
              return (
                <g key={i}>
                  <path d={describeSlice(CX, CY, R_MID, R_MID_IN, start + 0.5, end - 0.5)} fill={i % 2 === 0 ? NAVY_MID : NAVY_LIGHT} />
                  <text x={tPos.x} y={tPos.y} fill={WHITE} fontSize="10" textAnchor="middle" dominantBaseline="middle" transform={`rotate(${mid}, ${tPos.x}, ${tPos.y})`}>
                    {d}
                  </text>
                </g>
              );
            })}

            {/* 3. Inner Principle Ring (8) */}
            {PRINCIPLES.map((pr, i) => {
              const start = i * 45, end = (i + 1) * 45;
              const mid = start + 22.5;
              const tPos = polarToXY(mid, (R_INNER + R_CENTER) / 2, CX, CY);
              const fills = ["#d4e9d4", "#c1e1c1", "#e0f2d1", "#d3edba", "#c9e7b1", "#d8f0da", "#cfe9cc", "#dcf2e1"];
              return (
                <g key={i}>
                  <path d={describeSlice(CX, CY, R_INNER, R_CENTER, start + 0.5, end - 0.5)} fill={fills[i % fills.length]} />
                  <text x={tPos.x} y={tPos.y} fill="#1a3a2a" fontSize="8.5" fontWeight="600" textAnchor="middle" dominantBaseline="middle" transform={`rotate(${mid}, ${tPos.x}, ${tPos.y})`}>
                    {pr.split('\n').map((line, j) => <tspan key={j} x={tPos.x} dy={j === 0 ? 0 : 10}>{line}</tspan>)}
                  </text>
                </g>
              );
            })}

            {/* Center Core */}
            <circle cx={CX} cy={CY} r={R_CENTER - 5} fill={WHITE} />
            <text x={CX} y={CY} textAnchor="middle" dominantBaseline="middle" fill="#0a0f1d" fontSize="13" fontWeight="800">
              <tspan x={CX} dy="-1.2em">Enfoque</tspan>
              <tspan x={CX} dy="1.2em">Proactivo</tspan>
              <tspan x={CX} dy="1.2em">Orientado</tspan>
              <tspan x={CX} dy="1.2em">al Valor</tspan>
            </text>
          </svg>
        </div>
      </div>
    </div>
  );
}