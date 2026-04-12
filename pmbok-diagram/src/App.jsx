import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// --- Constantes de Color ---
const WHITE = "#ffffff";
const GOLD = "#c4a84a";
const NAVY_MID = "#1a2a4a";
const NAVY_LIGHT = "#243b6b";
const BLUE_CARD = "#1a2a4a";
const GOLD_CARD = "#2a2410";
const PURPLE_CARD = "#241a3a";
const GREEN_CARD = "#102a1a";

// --- Info fases - dominios - principios ---
const PHASES = [
  { label: "INICIO (2)" },
  { label: "PLANEACIÓN (19)" },
  { label: "EJECUCIÓN (8)" },
  { label: "MONITOREO Y\nCONTROL (10)" },
  { label: "CIERRE (1)" },
];

const DOMAINS = [
  "Gobernanza (9)", "Alcance (6)", "Cronograma (3)", "Finanzas (4)",
  "Interesados (7)", "Recursos (5)", "Riesgos (6)", 
];

const PRINCIPLES = [
  "Visión\nHolística", "Sostenibilidad", "Liderazgo\nResponsable", 
  "Enfoque\nConstante\nen el Valor", "Colaboración\nEfectiva", 
  "Gestión del\nCambio"
];

const CARD_DATA = [
  { id: 1, label: "SECCIÓN 1:", sub: "6 Principios de\nGestión de Proyectos", color: BLUE_CARD, border: "#4a7fc1", top: "0%", left: "50%", tx: "-50%", ty: "0", route: "/principios" },
  { id: 2, label: "SECCIÓN 2:", sub: "Ciclo de Vida", color: GOLD_CARD, border: "#c4a84a", top: "15%", right: "5%", tx: "0", ty: "0", route: "/ciclo-de-vida" },
  { id: 3, label: "SECCIÓN 3:", sub: "5 Áreas de Enfoque\n(Focus Areas)", color: PURPLE_CARD, border: "#8a5ac8", top: "50%", right: "0%", tx: "0", ty: "-50%", route: "/areas-de-enfoque" },
  { id: 4, label: "SECCIÓN 4:", sub: "7 Dominios\nde Desempeño", color: GREEN_CARD, border: "#3aad6e", bottom: "15%", right: "5%", tx: "0", ty: "0", route: "/dominios-de-desempeño" },
  { id: 5, label: "SECCIÓN 5:", sub: "Procesos", color: BLUE_CARD, border: "#4a7fc1", bottom: "0%", left: "50%", tx: "-50%", ty: "0", route: "/procesos" },
  { id: 6, label: "SECCIÓN 6:", sub: "Entradas y Salidas", color: GOLD_CARD, border: "#c4a84a", bottom: "15%", left: "5%", tx: "0", ty: "0", route: "/entradas-y-salidas" },
  { id: 7, label: "SECCIÓN 7:", sub: "Herramientas y Técnicas", color: PURPLE_CARD, border: "#8a5ac8", top: "50%", left: "0%", tx: "0", ty: "-50%", route: "/herramientas-y-tecnicas" },
  { id: 8, label: "SECCIÓN 8:", sub: "Definiciones Clave y\nGlosario Esencial", color: GREEN_CARD, border: "#3aad6e", top: "15%", left: "5%", tx: "0", ty: "0", route: "/glosario-y-conceptos-claves" },
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

function readableRotation(midAngleDeg) {
  const a = ((midAngleDeg % 360) + 360) % 360;
  return (a > 90 && a < 270) ? a + 180 : a;
}

export default function PMBOKDiagram() {
  const navigate = useNavigate();
  const [hovered, setHovered] = useState(null);

  const CX = 300, CY = 300;
  const R_OUTER = 240, R_OUTER_IN = 185;
  const R_MID = 180, R_MID_IN = 125;
  const R_INNER = 120, R_CENTER = 70;

  return (
    <div style={{ minHeight: "100vh", background: "#0a0f1d", color: WHITE, padding: "20px", boxSizing: "border-box", fontFamily: "sans-serif" }}>
      
      {/* Header Section */}
        <div style={{ 
          display: "flex", 
          flexWrap: "wrap",
          gap: "20px",
          justifyContent: "space-between", 
          marginBottom: "40px", 
          alignItems: "center" 
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
          <img 
            src="/src/assets/Logo-Nuevo-Grande.png" 
            alt="Logo" 
            style={{ height: "45px", width: "auto" }} 
          />
          <div style={{ borderLeft: "1px solid rgba(255,255,255,0.3)", padding: "5px 20px", borderRadius: "0 4px 4px 0" }}>
            <div style={{ fontWeight: 700 }}>PMBOK® Guide</div>
            <div style={{ fontSize: "12px", opacity: 0.6 }}>Octava Edición</div>
          </div>
        </div>

        <div style={{ textAlign: "center", flex: "1 1 300px" }}>
          <h1 style={{ fontSize: "clamp(18px, 4vw, 28px)", margin: 0, fontWeight: 300 }}>
            El ADN de la gestión de proyectos de valor
          </h1>
          <div style={{ fontSize: "10px", opacity: 0.5, letterSpacing: "2px", marginTop: "8px" }}>
            PMBOK 8 - PMI 2025 - GUÍA INTERACTIVA
          </div>
        </div>

        <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", justifyContent: "center" }}>
          {[{ n: 6, l: "Principios" }, { n: 7, l: "Dominios" }, { n: 5, l: "Áreas" }, { n: 40, l: "Procesos" }].map(s => (
            <div key={s.l} style={{ textAlign: "center", minWidth: "60px" }}>
              <div style={{ color: "#D4AF37", fontSize: "20px", fontWeight: 700 }}>{s.n}</div>
              <div style={{ fontSize: "9px", opacity: 0.7, textTransform: "uppercase" }}>{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Diagram Area  */}
      <div style={{ 
        position: "relative", 
        width: "100%", 
        maxWidth: "1000px", 
        aspectRatio: "10 / 7", 
        margin: "0 auto",
        fontSize: "min(1.2vw, 14px)" 
      }}>
        
        {/* Floating Cards */}
        {CARD_DATA.map(card => (
          <div
            key={card.id}
            onClick={() => navigate(card.route)}
            onMouseEnter={() => setHovered(card.id)}
            onMouseLeave={() => setHovered(null)}
            style={{
              cursor: "pointer",
              position: "absolute",
              top: card.top,
              bottom: card.bottom,
              left: card.left,
              right: card.right,
              transform: `translate(${card.tx}, ${card.ty}) scale(${hovered === card.id ? 1.05 : 1})`,
              background: card.color,
              border: `1px solid ${card.border}`,
              padding: "1.2%",
              borderRadius: "8px",
              width: "16%", 
              minWidth: "120px",
              transition: "all 0.3s ease",
              zIndex: 20,
              boxShadow: hovered === card.id ? `0 0 20px ${card.border}44` : "none"
            }}
          >
            <div style={{ fontSize: "0.85em", fontWeight: 800, marginBottom: "4px", color: card.border }}>
              {card.label}
            </div>
            <div style={{ fontSize: "0.8em", lineHeight: "1.4", whiteSpace: "pre-line" }}>
              {card.sub}
            </div>
          </div>
        ))}

        {/* Center Wheel Container  */}
        <div style={{ 
          position: "absolute", 
          top: "50%", 
          left: "50%", 
          transform: "translate(-50%, -50%)", 
          width: "55%" 
        }}>
          <svg viewBox="0 0 600 600" width="100%" style={{ overflow: "visible" }}>
            
            {/* 1. Outer Phase Ring */}
            {PHASES.map((p, i) => {
              const start = i * 72, end = (i + 1) * 72;
              const mid = start + 36;
              const tPos = polarToXY(mid, (R_OUTER + R_OUTER_IN) / 2, CX, CY);
              const rot = readableRotation(mid);
              const lines = p.label.split('\n');

              return (
                <g key={i}>
                  <path d={describeSlice(CX, CY, R_OUTER, R_OUTER_IN, start + 1, end - 1)} fill={GOLD} opacity={0.85} />
                  <text 
                    x={tPos.x} y={tPos.y} 
                    fill={WHITE} fontSize="12" fontWeight="700" 
                    textAnchor="middle" dominantBaseline="middle" 
                    transform={`rotate(${rot}, ${tPos.x}, ${tPos.y})`}
                  >
                    {lines.map((line, j) => (
                      <tspan key={j} x={tPos.x} dy={j === 0 ? `-${(lines.length - 1) * 6}px` : "14px"}>
                        {line}
                      </tspan>
                    ))}
                  </text>
                </g>
              );
            })}

            {/* Dominios (medio) */}
            {DOMAINS.map((d, i) => {
            const angleStep = 360 / DOMAINS.length; 
            const start = i * angleStep;
            const end = (i + 1) * angleStep;
            const mid = start + angleStep / 2;

            const tPos = polarToXY(mid, (R_MID + R_MID_IN) / 2, CX, CY);
            const rot = readableRotation(mid);

            return (
              <g key={i}>
                <path
                  d={describeSlice(CX, CY, R_MID, R_MID_IN, start + 0.5, end - 0.5)}
                  fill={NAVY_MID}
                />
                <text
                  x={tPos.x}
                  y={tPos.y}
                  fill={WHITE}
                  fontSize="12"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  transform={`rotate(${rot}, ${tPos.x}, ${tPos.y})`}
                >
                  {d}
                </text>
              </g>
            );
          })}

            {PRINCIPLES.map((pr, i) => {
              const angleStep = 360 / PRINCIPLES.length;   // dynamic
              const start = i * angleStep;
              const end = (i + 1) * angleStep;
              const mid = start + angleStep / 2;

              const tPos = polarToXY(mid, (R_INNER + R_CENTER) / 2, CX, CY);
              const rot = readableRotation(mid);

              const fills = [
                "#c9e7b1", "#c9e7b1", "#c9e7b1", "#c9e7b1",
                "#c9e7b1", "#c9e7b1", "#c9e7b1", "#c9e7b1"
              ];

              const lines = pr.split('\n');

              return (
                <g key={i}>
                  <path
                    d={describeSlice(
                      CX,
                      CY,
                      R_INNER,
                      R_CENTER,
                      start + 0.5,
                      end - 0.5
                    )}
                    fill={fills[i % fills.length]}
                  />
                  <text
                    x={tPos.x}
                    y={tPos.y}
                    fill="#1a3a2a"
                    fontSize="9"
                    fontWeight="600"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    transform={`rotate(${rot}, ${tPos.x}, ${tPos.y})`}
                  >
                    {lines.map((line, j) => (
                      <tspan
                        key={j}
                        x={tPos.x}
                        dy={j === 0 ? `-${(lines.length - 1) * 5}px` : "10px"}
                      >
                        {line}
                      </tspan>
                    ))}
                  </text>
                </g>
              );
            })}

            {/* Centro */}
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