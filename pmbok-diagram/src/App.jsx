import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// --- Theme & Constants ---
const WHITE = "#ffffff";
const GOLD = "#c4a84a";
const NAVY_MID = "#2c3e50";
const NAVY_LIGHT = "#34495e";
const BLUE_CARD = "#1a2a4a";
const GOLD_CARD = "#2a2410";
const PURPLE_CARD = "#241a3a";
const GREEN_CARD = "#102a1a";

const PHASES = [
  { label: "INICIO" },
  { label: "PLANEACIÓN" },
  { label: "EJECUCIÓN" },
  { label: "MONITOREO Y\nCONTROL" },
  { label: "CIERRE" },
];

const DOMAINS = [
  "Gobernanza", "Alcance", "Cronograma", "Finanzas",
  "Interesados", "Recursos", "Riesgos", "Gestión del Cambio",
];

const PRINCIPLES = [
  "Visión\nHolística", "Sostenibilidad", "Liderazgo\nResponsable",
  "Enfoque\nConstante\nen el Valor", "Colaboración\nEfectiva",
  "Gestión del\nCambio", "Adaptabilidad", "Calidad",
];

const INNER_FILLS = [
  "#d4e9d4", "#c1e1c1", "#e0f2d1", "#d3edba",
  "#c9e7b1", "#d8f0da", "#cfe9cc", "#dcf2e1",
];

const CARD_DATA = [
  { id: 1, label: "SECCIÓN 1:", sub: "6 Principios de\nGestión de Proyectos", color: BLUE_CARD, border: "#4a7fc1", pos: "top" },
  { id: 2, label: "SECCIÓN 2:", sub: "Ciclo de Vida", color: GOLD_CARD, border: "#c4a84a", pos: "top-right" },
  { id: 3, label: "SECCIÓN 3:", sub: "5 Áreas de Enfoque\n(Focus Areas)", color: PURPLE_CARD, border: "#8a5ac8", pos: "mid-right" },
  { id: 4, label: "SECCIÓN 4:", sub: "7 Dominios\nde Desempeño", color: GREEN_CARD, border: "#3aad6e", pos: "bot-right" },
  { id: 5, label: "SECCIÓN 5:", sub: "Procesos", color: BLUE_CARD, border: "#4a7fc1", pos: "bottom" },
  { id: 6, label: "SECCIÓN 6:", sub: "Entradas y Salidas", color: GOLD_CARD, border: "#c4a84a", pos: "bot-left" },
  { id: 7, label: "SECCIÓN 7:", sub: "Herramientas y Técnicas", color: PURPLE_CARD, border: "#8a5ac8", pos: "mid-left" },
  { id: 8, label: "SECCIÓN 8:", sub: "Definiciones Clave y\nGlosario Esencial", color: GREEN_CARD, border: "#3aad6e", pos: "top-left" },
];

const ROUTES = {
  1: "/principios", 2: "/ciclo-de-vida", 3: "/areas-de-enfoque",
  4: "/dominios-de-desempeño", 5: "/procesos", 6: "/entradas-y-salidas",
  7: "/herramientas-y-tecnicas", 8: "/glosario-y-conceptos-claves",
};

// --- Helpers ---
function polarToXY(angleDeg, r, cx, cy) {
  const rad = ((angleDeg - 90) * Math.PI) / 180;
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
}

function describeSlice(cx, cy, rOuter, rInner, startAngle, endAngle) {
  const s1 = polarToXY(startAngle, rOuter, cx, cy);
  const e1 = polarToXY(endAngle, rOuter, cx, cy);
  const s2 = polarToXY(startAngle, rInner, cx, cy);
  const e2 = polarToXY(endAngle, rInner, cx, cy);
  const la = endAngle - startAngle > 180 ? 1 : 0;
  return `M ${s1.x} ${s1.y} A ${rOuter} ${rOuter} 0 ${la} 1 ${e1.x} ${e1.y} L ${e2.x} ${e2.y} A ${rInner} ${rInner} 0 ${la} 0 ${s2.x} ${s2.y} Z`;
}

/**
 * FIXED: Threshold changed to 90-270.
 * If text is in the bottom half of the circle, we flip it 180 degrees
 * so it remains upright to the viewer.
 */
function readableRotation(midAngleDeg) {
  const a = ((midAngleDeg % 360) + 360) % 360;
  if (a > 90 && a < 270) {
    return a + 180; 
  }
  return a;
}

// --- Wheel SVG ---
function WheelSVG() {
  const CX = 300, CY = 300;
  const R_OUTER = 240, R_OUTER_IN = 182;
  const R_MID   = 178, R_MID_IN   = 122;
  const R_INNER = 118, R_CENTER   = 68;

  return (
    <svg viewBox="0 0 600 600" width="100%" style={{ display: "block", overflow: "visible" }}>
      {/* 1. OUTER PHASE RING */}
      {PHASES.map((p, i) => {
        const start = i * 72;
        const end   = (i + 1) * 72;
        const mid   = start + 36;
        const tPos  = polarToXY(mid, (R_OUTER + R_OUTER_IN) / 2, CX, CY);
        const rot   = readableRotation(mid);
        const lines = p.label.split("\n");

        return (
          <g key={i}>
            <path d={describeSlice(CX, CY, R_OUTER, R_OUTER_IN, start + 1, end - 1)} fill={GOLD} opacity={0.9} />
            <text textAnchor="middle" dominantBaseline="middle" fill={WHITE} fontSize="12" fontWeight="800"
              transform={`rotate(${rot}, ${tPos.x}, ${tPos.y})`}>
              {lines.map((line, j) => (
                <tspan key={j} x={tPos.x} y={tPos.y} dy={`${(j - (lines.length - 1) / 2) * 13}px`}>{line}</tspan>
              ))}
            </text>
          </g>
        );
      })}

      {/* 2. MIDDLE DOMAIN RING */}
      {DOMAINS.map((d, i) => {
        const start = i * 45;
        const end   = (i + 1) * 45;
        const mid   = start + 22.5;
        const tPos  = polarToXY(mid, (R_MID + R_MID_IN) / 2, CX, CY);
        const rot   = readableRotation(mid);

        return (
          <g key={i}>
            <path d={describeSlice(CX, CY, R_MID, R_MID_IN, start + 0.8, end - 0.8)} fill={i % 2 === 0 ? NAVY_MID : NAVY_LIGHT} />
            <text textAnchor="middle" dominantBaseline="middle" fill={WHITE} fontSize="11" fontWeight="500"
              transform={`rotate(${rot}, ${tPos.x}, ${tPos.y})`}>
              <tspan x={tPos.x} y={tPos.y}>{d}</tspan>
            </text>
          </g>
        );
      })}

      {/* 3. INNER PRINCIPLE RING */}
      {PRINCIPLES.map((pr, i) => {
        const start = i * 45;
        const end   = (i + 1) * 45;
        const mid   = start + 22.5;
        const tPos  = polarToXY(mid, (R_INNER + R_CENTER) / 2, CX, CY);
        const rot   = readableRotation(mid);
        const lines = pr.split("\n");

        return (
          <g key={i}>
            <path d={describeSlice(CX, CY, R_INNER, R_CENTER, start + 0.8, end - 0.8)} fill={INNER_FILLS[i % INNER_FILLS.length]} />
            <text textAnchor="middle" dominantBaseline="middle" fill="#1a3a2a" fontSize="10" fontWeight="600"
              transform={`rotate(${rot}, ${tPos.x}, ${tPos.y})`}>
              {lines.map((line, j) => (
                <tspan key={j} x={tPos.x} y={tPos.y} dy={`${(j - (lines.length - 1) / 2) * 9}px`}>{line}</tspan>
              ))}
            </text>
          </g>
        );
      })}

      {/* CENTER CORE */}
      <circle cx={CX} cy={CY} r={R_CENTER - 1} fill={WHITE} />
      <text x={CX} y={CY} textAnchor="middle" dominantBaseline="middle" fill="#0a0f1d" fontSize="12" fontWeight="800">
        <tspan x={CX} dy="-1.2em">Enfoque</tspan>
        <tspan x={CX} dy="1.2em">Proactivo</tspan>
        <tspan x={CX} dy="1.2em">Orientado</tspan>
        <tspan x={CX} dy="1.2em">al Valor</tspan>
      </text>
    </svg>
  );
}

// --- Section Card Component ---
function SectionCard({ card, hovered, onHover, onLeave, onClick }) {
  const isHovered = hovered === card.id;
  return (
    <div onClick={onClick} onMouseEnter={onHover} onMouseLeave={onLeave}
      style={{
        cursor: "pointer", background: card.color, border: `1px solid ${card.border}`,
        padding: "12px 14px", borderRadius: "12px", width: "100%",
        transition: "transform 0.2s ease, box-shadow 0.2s ease",
        transform: isHovered ? "scale(1.04)" : "scale(1)",
        boxShadow: isHovered ? `0 8px 20px ${card.border}44` : "none",
      }}>
      <div style={{ fontSize: "10px", fontWeight: 800, marginBottom: "4px", color: card.border }}>{card.label}</div>
      <div style={{ fontSize: "11px", lineHeight: 1.4, color: WHITE, opacity: 0.9, whiteSpace: "pre-line" }}>{card.sub}</div>
    </div>
  );
}

// --- Main Page Component ---
export default function PMBOKDiagram() {
  const navigate = useNavigate();
  const [hovered, setHovered] = useState(null);

  const byPos = Object.fromEntries(CARD_DATA.map((c) => [c.pos, c]));

  const renderCard = (pos, justifySelf = "center") => {
    const c = byPos[pos];
    if (!c) return <div />;
    return (
      <div style={{ width: "100%", maxWidth: "165px", justifySelf }}>
        <SectionCard card={c} hovered={hovered} onHover={() => setHovered(c.id)}
          onLeave={() => setHovered(null)} onClick={() => navigate(ROUTES[c.id])} />
      </div>
    );
  };

  return (
    <div style={{ minHeight: "100vh", background: "#0a0f1d", color: WHITE, padding: "20px", fontFamily: "system-ui" }}>
      <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "30px" }}>
        <div style={{ border: "1px solid #444", padding: "5px 15px", borderRadius: "4px" }}>
          <div style={{ fontWeight: 700 }}>PMBOK® Guide</div>
          <div style={{ fontSize: "10px", opacity: 0.6 }}>Octava Edición</div>
        </div>
        <div style={{ textAlign: "center" }}>
          <h1 style={{ fontSize: "20px", margin: 0 }}>El ADN de la gestión de proyectos de valor</h1>
          <div style={{ fontSize: "10px", opacity: 0.5, letterSpacing: "2px" }}>PMBOK 8 – PMI 2025</div>
        </div>
        <div style={{ width: "100px" }} /> {/* Spacer */}
      </header>

      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr 2fr 1fr",
        gridTemplateRows: "auto 1fr auto",
        gridTemplateAreas: `
          "tl top tr"
          "ml whl mr"
          "bl bot br"
        `,
        gap: "10px", alignItems: "center", maxWidth: "1000px", margin: "0 auto"
      }}>
        <div style={{ gridArea: "tl" }}>{renderCard("top-left", "end")}</div>
        <div style={{ gridArea: "top" }}>{renderCard("top")}</div>
        <div style={{ gridArea: "tr" }}>{renderCard("top-right", "start")}</div>

        <div style={{ gridArea: "ml", display: "flex", justifyContent: "flex-end" }}>{renderCard("mid-left")}</div>
        <div style={{ gridArea: "whl" }}><WheelSVG /></div>
        <div style={{ gridArea: "mr", display: "flex", justifyContent: "flex-start" }}>{renderCard("mid-right")}</div>

        <div style={{ gridArea: "bl" }}>{renderCard("bot-left", "end")}</div>
        <div style={{ gridArea: "bot" }}>{renderCard("bottom")}</div>
        <div style={{ gridArea: "br" }}>{renderCard("bot-right", "start")}</div>
      </div>
    </div>
  );
}