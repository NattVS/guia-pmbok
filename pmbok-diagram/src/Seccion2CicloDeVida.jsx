import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const CICLOS = [
  {
    id: "predictivo",
    titulo: "PREDICTIVO",
    alias: "También llamado: Cascada, Waterfall, Plan-driven.",
    usarCuando: [
      "Requisitos estables y bien definidos",
      "Alto riesgo regulatorio o de inversión",
      "Costo de iteración muy alto (construcción)",
      "Poca incertidumbre al inicio",
    ],
  },
  {
    id: "hibrido",
    titulo: "HÍBRIDO",
    alias: "Combina elementos predictivos y adaptativos.",
    usarCuando: [
      "Parte del alcance estable y parte variable",
      "Equipos con diferente madurez ágil",
      "Proyectos de transformación digital",
      "Se necesita entregar valor rápido Y cumplir regulación",
    ],
  },
  {
    id: "adaptativo",
    titulo: "ADAPTATIVO (ÁGIL)",
    alias: "Iterativo, incremental, orientado al cliente.",
    usarCuando: [
      "Requisitos ambiguos o cambiantes",
      "Necesidad de retroalimentación frecuente",
      "Entornos de alta incertidumbre",
      "Desarrollo de software o productos digitales",
    ],
  },
];

// Gold/olive palette matching the reference
const GOLD_ACCENT = "#c9a84c";
const GOLD_TEXT = "#d4a84b";
const BG_PAGE = "#6b6330";       // warm olive-gold page background
const BG_CARD = "#7a7038";       // slightly lighter card bg
const BORDER_CARD = "#a89040";   // gold border on cards
const NAV_BG = "#0e1628";

function CicloCard({ ciclo, index }) {
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
        flex: "1 1 260px",
        background: hovered ? "rgba(255,255,255,0.07)" : BG_CARD,
        border: `1.5px solid ${hovered ? "#d4b86a" : BORDER_CARD}`,
        borderRadius: "16px",
        padding: "28px 26px 26px",
        display: "flex",
        flexDirection: "column",
        gap: "0px",
        cursor: "default",
        transition: "opacity 0.45s ease, transform 0.45s ease, background 0.2s, border-color 0.2s, box-shadow 0.2s",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
        boxShadow: hovered
          ? "0 6px 32px rgba(0,0,0,0.35)"
          : "0 2px 14px rgba(0,0,0,0.22)",
      }}
    >
      {/* Title */}
      <div
        style={{
          color: "#ffffff",
          fontSize: "18px",
          fontWeight: 800,
          letterSpacing: "0.04em",
          marginBottom: "18px",
          textAlign: "center",
        }}
      >
        {ciclo.titulo}
      </div>

      {/* Alias / description */}
      <div
        style={{
          color: "rgba(230,220,190,0.82)",
          fontSize: "13.5px",
          lineHeight: 1.6,
          marginBottom: "18px",
        }}
      >
        {ciclo.alias}
      </div>

      {/* Usar cuando label */}
      <div
        style={{
          color: GOLD_TEXT,
          fontSize: "13px",
          fontWeight: 600,
          marginBottom: "10px",
        }}
      >
        Usar cuando:
      </div>

      {/* Bullet list */}
      <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: "8px" }}>
        {ciclo.usarCuando.map((item, i) => (
          <li
            key={i}
            style={{
              color: "rgba(230,220,185,0.85)",
              fontSize: "13px",
              lineHeight: 1.55,
              display: "flex",
              alignItems: "flex-start",
              gap: "6px",
            }}
          >
            <span style={{ color: GOLD_ACCENT, marginTop: "1px", flexShrink: 0 }}>•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Seccion2CicloDeVida({ onBack }) {
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 40);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: BG_PAGE,
        color: "#fff",
        fontFamily: "'Segoe UI', system-ui, sans-serif",
        boxSizing: "border-box",
      }}
    >
      {/* ── TOP NAV BAR ── */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "14px 32px",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
          background: NAV_BG,
          position: "sticky",
          top: 0,
          zIndex: 100,
        }}
      >
        {/* PMBOK Badge */}
        <div
          style={{
            border: "1px solid rgba(255,255,255,0.5)",
            borderRadius: "6px",
            padding: "7px 14px",
            fontSize: "12px",
            fontWeight: 700,
            background: "transparent",
            color: "#fff",
          }}
        >
          PMBOK® Guide
          <div style={{ fontSize: "10px", fontWeight: 400, opacity: 0.6, marginTop: "1px" }}>
            Octava Edición
          </div>
        </div>

        {/* Center title */}
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: "17px", fontWeight: 700, letterSpacing: "-0.01em", color: "#fff" }}>
            El ADN de la gestión de proyectos de valor
          </div>
          <div style={{ fontSize: "11px", opacity: 0.5, marginTop: "2px", letterSpacing: "0.07em", color: "#fff" }}>
            PMBOK 8 &nbsp;–&nbsp; PMI 2025 &nbsp;–&nbsp; GUIA INTERACTIVA
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

      {/* ── PAGE CONTENT ── */}
      <div
        style={{
          padding: "36px 52px 56px",
          maxWidth: "1160px",
          margin: "0 auto",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(12px)",
          transition: "opacity 0.4s ease, transform 0.4s ease",
        }}
      >
        {/* Breadcrumb */}
        <div
          style={{
            fontSize: "13px",
            color: "rgba(240,230,185,0.5)",
            marginBottom: "24px",
            display: "flex",
            alignItems: "center",
            gap: "6px",
          }}
        >
          <span style={{ cursor: "pointer" }} onClick={onBack}>
            Inicio
          </span>
          <span style={{ opacity: 0.4 }}>/</span>
          <span style={{ color: "rgba(245,235,195,0.88)", fontWeight: 600 }}>
            Sección 2
          </span>
        </div>

        {/* Section label */}
        <div
          style={{
            color: GOLD_ACCENT,
            fontSize: "15px",
            fontWeight: 700,
            letterSpacing: "0.02em",
            marginBottom: "8px",
          }}
        >
          Sección 2
        </div>

        {/* Main heading */}
        <h1
          style={{
            fontSize: "clamp(30px, 4.5vw, 52px)",
            fontWeight: 700,
            margin: "0 0 20px",
            letterSpacing: "-0.02em",
            lineHeight: 1.08,
            color: "#ffffff",
          }}
        >
          Ciclo de Vida
        </h1>

        {/* Description */}
        <p
          style={{
            fontSize: "clamp(14px, 1.5vw, 18px)",
            color: "rgba(245,235,195,0.88)",
            lineHeight: 1.65,
            maxWidth: "900px",
            margin: "0 0 48px",
            fontWeight: 400,
          }}
        >
          Conjunto de fases que estructuran un proyecto para entregar valor de forma adaptada a su
          entorno. Estos se denominan como predictivos, adaptativos (frecuentemente denominados
          ágiles) e híbridos.
        </p>

        {/* ── THREE CARDS ── */}
        <div
          style={{
            display: "flex",
            gap: "24px",
            flexWrap: "wrap",
            alignItems: "stretch",
          }}
        >
          {CICLOS.map((ciclo, i) => (
            <CicloCard key={ciclo.id} ciclo={ciclo} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
