import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

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
    subtitulo: "Focus on Value",
    descripcion:
      "El valor es el indicador final de éxito del proyecto. Todo el trabajo debe orientarse a maximizar el retorno sobre la inversión, sea financiero o no financiero.",
  },
  {
    id: "03",
    total: "06",
    titulo: "Calidad Integrada",
    subtitulo: "Embed Quality",
    descripcion:
      "La calidad no es un control al final: se integra en cada proceso y entregable desde el inicio del proyecto.",
  },
  {
    id: "04",
    total: "06",
    titulo: "Liderazgo Responsable",
    subtitulo: "Be an Accountable Leader",
    descripcion:
      "Los proyectos exigen un liderazgo efectivo y ético. El líder toma responsabilidad por los objetivos, decisiones y acciones del proyecto.",
  },
  {
    id: "05",
    total: "06",
    titulo: "Cultura de Sostenibilidad",
    subtitulo: "Integrate Sustainability",
    descripcion:
      "Integrar la sostenibilidad en todas las áreas del proyecto: considerando personas, planeta, sociedad y valor económico (Triple Bottom Line).",
  },
  {
    id: "06",
    total: "06",
    titulo: "Cultura Empoderada",
    subtitulo: "Build an Empowered Culture",
    descripcion:
      "El entorno del proyecto debe promover confianza mutua, claridad de roles y colaboración, generando efectos sinérgicos entre los miembros del equipo.",
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
        onClick={() => {
            if (principio.route) {
            navigate(principio.route);
            }
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
        cursor: principio.route ? "pointer" : "default",
        background: hovered
          ? "rgba(255,255,255,0.07)"
          : "rgba(255,255,255,0.04)",
        border: hovered
          ? "1.5px solid rgba(100,140,220,0.55)"
          : "1.5px solid rgba(100,140,220,0.22)",
        borderRadius: "14px",
        padding: "24px 22px 22px",
        display: "flex",
        flexDirection: "column",
        gap: "6px",
        transition:
          "opacity 0.45s ease, transform 0.45s ease, background 0.2s, border-color 0.2s, box-shadow 0.2s",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(18px)",
        boxShadow: hovered
          ? "0 4px 28px rgba(60, 100, 200, 0.18)"
          : "0 2px 12px rgba(0,0,0,0.18)",
      }}
    >
      {/* Counter */}
      <div
        style={{
          color: "rgba(130,160,230,0.7)",
          fontSize: "12px",
          fontWeight: 500,
          letterSpacing: "0.12em",
          alignSelf: "flex-end",
          marginBottom: "4px",
        }}
      >
        {principio.id} - {principio.total}
      </div>

      {/* Title */}
      <div
        style={{
          color: "#ffffff",
          fontSize: "18px",
          fontWeight: 700,
          lineHeight: 1.25,
          letterSpacing: "-0.01em",
        }}
      >
        {principio.titulo}
      </div>

      {/* Subtitle */}
      <div
        style={{
          color: "rgba(160,185,230,0.65)",
          fontSize: "13px",
          fontWeight: 400,
          fontStyle: "italic",
          marginBottom: "6px",
        }}
      >
        {principio.subtitulo}
      </div>

      {/* Description */}
      <div
        style={{
          color: "rgba(210,220,240,0.82)",
          fontSize: "13.5px",
          lineHeight: 1.65,
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
        background: "#0e1628",
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
          background: "#0e1628",
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
          }}
        >
          PMBOK® Guide
          <div
            style={{ fontSize: "10px", fontWeight: 400, opacity: 0.6, marginTop: "1px" }}
          >
            Octava Edición
          </div>
        </div>

        {/* Title */}
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: "18px", fontWeight: 700, letterSpacing: "-0.01em" }}>
            El ADN de la gestión de proyectos de valor
          </div>
          <div
            style={{ fontSize: "11px", opacity: 0.5, marginTop: "2px", letterSpacing: "0.07em" }}
          >
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
      <div style={{ padding: "32px 48px 48px", maxWidth: "1160px", margin: "0 auto" }}>
        {/* Breadcrumb */}
        <div
          style={{
            fontSize: "13px",
            color: "rgba(180,200,240,0.55)",
            marginBottom: "20px",
            opacity: headerVisible ? 1 : 0,
            transition: "opacity 0.4s ease",
          }}
        >
            <span style={{ cursor: "pointer" }} onClick={() => navigate("/")}>
            Inicio
            </span>
          <span style={{ margin: "0 8px", opacity: 0.4 }}>/</span>
          <span style={{ color: "rgba(200,215,255,0.85)", fontWeight: 500 }}>
            Sección 1
          </span>
        </div>

        {/* Section label */}
        <div
          style={{
            color: "#5a8aff",
            fontSize: "14px",
            fontWeight: 600,
            letterSpacing: "0.03em",
            marginBottom: "8px",
            opacity: headerVisible ? 1 : 0,
            transform: headerVisible ? "translateY(0)" : "translateY(10px)",
            transition: "opacity 0.4s ease, transform 0.4s ease",
          }}
        >
          Sección 1
        </div>

        {/* Main heading */}
        <h1
          style={{
            fontSize: "clamp(28px, 4vw, 48px)",
            fontWeight: 700,
            margin: "0 0 16px",
            letterSpacing: "-0.02em",
            lineHeight: 1.1,
            opacity: headerVisible ? 1 : 0,
            transform: headerVisible ? "translateY(0)" : "translateY(14px)",
            transition: "opacity 0.45s ease 0.06s, transform 0.45s ease 0.06s",
          }}
        >
          6 Principios&nbsp; de Gestión de Proyectos
        </h1>

        {/* Description paragraph */}
        <p
          style={{
            fontSize: "15px",
            color: "rgba(210,225,255,0.75)",
            lineHeight: 1.7,
            maxWidth: "780px",
            margin: "0 0 40px",
            opacity: headerVisible ? 1 : 0,
            transform: headerVisible ? "translateY(0)" : "translateY(10px)",
            transition: "opacity 0.45s ease 0.12s, transform 0.45s ease 0.12s",
          }}
        >
          Esta edición sintetiza los 12 principios previos en 6 principios fundamentales que
          guían el comportamiento del equipo hacia la entrega de resultados. No son reglas
          prescriptivas; son una mentalidad que orienta decisiones y acciones.
        </p>

        {/* Cards grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "20px",
          }}
        >
          {PRINCIPIOS.map((p, i) => (
            <PrincipioCard key={p.id} principio={p} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
