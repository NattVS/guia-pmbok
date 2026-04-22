import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from "../src/assets/Logo-Nuevo-Grande.png";

// --- DATA STRUCTURE FOR "INICIO" (INITIATION) ---
const INICIO_DATA = {
  id: "01 - 05",
  titulo: "Inicio",
  subtitulo: "Initiating Focus Area",
  descripcion: "Procesos realizados para definir un nuevo proyecto o una nueva fase de un proyecto existente al obtener la autorización para comenzar.",
  definicion: "Área de enfoque que incluye los procesos necesarios para definir formalmente un nuevo proyecto o fase, obteniendo autorización para comenzar el trabajo.",
  puntosClave: [
    "Establecer la visión y los objetivos del proyecto.",
    "Identificar a los interesados clave desde el primer momento.",
    "Obtener la aprobación formal a través del Acta de Constitución.",
    "Nombrar al Director del Proyecto y definir su nivel de autoridad.",
    "Asegurar la alineación con los objetivos estratégicos."
  ],
  procesos: {
    subtitulo: "Procesos Principales",
    items: ["Iniciar el Proyecto o Fase", 
      "Identificar a los Interesados (Stakeholders)",
    ]
  },
  tip: {
    subtitulo: "TIP de Práctica",
    info: "El Project Charter NO define el alcance detallado — eso ocurre en Planeación. El Charter da autoridad y propósito al PM para comenzar el proyecto."
  }
};

// --- COLOR PALETTE (Matched to your Seccion3) ---
const PURPLE_ACCENT = "#c084fc"; 
const BG_PAGE = "#2e104e";       
const BG_CARD = "rgba(88, 28, 135, 0.4)"; 
const BORDER_CARD = "rgba(168, 85, 247, 0.4)"; 
const NAV_BG = "#0e1628";

const TABS = ["Definición", "Puntos Clave", "Procesos", "Tip"];

export default function DetalleInicio() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("Definición");
  const [visible, setVisible] = useState(false);
  const [contentKey, setContentKey] = useState(0);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 50);
    return () => clearTimeout(t);
  }, []);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setContentKey((k) => k + 1);
  };

  return (
    <div style={{ minHeight: "100vh", background: BG_PAGE, color: "#fff", fontFamily: "system-ui, sans-serif" }}>
      
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
            {/* LEFT: Logo + PMBOK */}
            <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
              <img 
                src={logo}
                alt="Logo" 
                style={{ height: "45px", width: "auto" }} 
              />
    
              <div style={{ 
                borderLeft: "1px solid rgba(255,255,255,0.3)", 
                paddingLeft: "15px"
              }}>
                <div style={{ fontWeight: 700, fontSize: "12px" }}>
                  PMBOK® Guide
                </div>
                <div style={{ fontSize: "10px", opacity: 0.6 }}>
                  Octava Edición
                </div>
              </div>
            </div>
    
            {/* CENTER: Title */}
              <div style={{ 
                position: "absolute",
                left: "50%",
                transform: "translateX(-50%)",
                textAlign: "center",
                pointerEvents: "none" 
              }}>
                <div style={{ fontSize: "18px", fontWeight: 700 }}>
                  El ADN de la gestión de proyectos de valor
                </div>
                <div style={{ fontSize: "11px", opacity: 0.5, letterSpacing: "0.07em" }}>
                  PMBOK 8 – PMI 2025
                </div>
              </div>
    
        {/* Back button */}
              <button
                onClick={() => navigate("/areas-de-enfoque")}
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
                Volver
              </button>
      </div>

      {/* ── PAGE CONTENT ── */}
      <div style={{ padding: "32px 48px", maxWidth: "1000px", margin: "0 auto", opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(15px)", transition: "all 0.5s ease" }}>
        
        {/* Breadcrumb */}
        <div style={{ fontSize: "13px", color: PURPLE_ACCENT, marginBottom: "25px", fontWeight: 600 }}>
          Inicio <span style={{ margin: "0 8px", opacity: 0.4, color: "#fff" }}>/</span> 
          Fases de Ciclo de Vida <span style={{ margin: "0 8px", opacity: 0.4, color: "#fff" }}>/</span> 
          <span style={{ color: "#fff" }}>{INICIO_DATA.titulo}</span>
        </div>

        {/* ── HERO CARD (Matched to your BG_CARD and BORDER_CARD) ── */}
        <div style={{ background: BG_CARD, border: `1.5px solid ${BORDER_CARD}`, borderRadius: "20px", padding: "35px", marginBottom: "30px", boxShadow: "0 4px 20px rgba(0,0,0,0.2)" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
            <div>
               <h1 style={{ fontSize: "48px", fontWeight: 800, margin: "0 0 4px", letterSpacing: "-0.02em" }}>
                {INICIO_DATA.titulo}
              </h1>
              <div style={{ color: PURPLE_ACCENT, fontSize: "14px", fontWeight: 600, marginBottom: "15px" }}>
                {INICIO_DATA.subtitulo}
              </div>
            </div>
            <span style={{ fontSize: "14px", fontWeight: 700, color: PURPLE_ACCENT }}>
              {INICIO_DATA.id}
            </span>
          </div>
          <div style={{ color: "#e9d5ff", fontSize: "16px", lineHeight: "1.7", maxWidth: "800px" }}>
            {INICIO_DATA.descripcion}
          </div>
        </div>

        {/* ── TABS ── */}
        <div style={{ display: "flex", gap: "10px", marginBottom: "25px" }}>
          {TABS.map((tab) => {
            const isActive = activeTab === tab;
            return (
              <button
                key={tab}
                onClick={() => handleTabChange(tab)}
                style={{
                  flex: 1,
                  padding: "15px",
                  borderRadius: "12px",
                  border: `1.5px solid ${isActive ? PURPLE_ACCENT : "rgba(168, 85, 247, 0.2)"}`,
                  background: isActive ? "rgba(126, 34, 206, 0.4)" : "rgba(88, 28, 135, 0.2)",
                  color: isActive ? "#fff" : "#d8b4fe",
                  fontSize: "14px",
                  fontWeight: 600,
                  cursor: "pointer",
                  transition: "all 0.2s ease"
                }}
              >
                {tab}
              </button>
            );
          })}
        </div>

        {/* ── TAB CONTENT ── */}
        <div 
          key={contentKey}
          style={{ background: "rgba(0,0,0,0.15)", border: `1px solid ${BORDER_CARD}`, borderRadius: "16px", padding: "35px", animation: "fadeUp 0.4s ease forwards" }}
        >
          <style>{`@keyframes fadeUp { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }`}</style>

          {activeTab === "Definición" && (
            <div>
              <h3 style={{ color: PURPLE_ACCENT, fontSize: "12px", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "15px" }}>Definición</h3>
              <p style={{ fontSize: "17px", lineHeight: "1.8", color: "#f3e8ff", margin: 0 }}>{INICIO_DATA.definicion}</p>
            </div>
          )}

          {activeTab === "Puntos Clave" && (
            <div>
              <h3 style={{ color: PURPLE_ACCENT, fontSize: "12px", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "20px" }}>Puntos Clave</h3>
              <ul style={{ padding: 0, margin: 0, listStyle: "none" }}>
                {INICIO_DATA.puntosClave.map((punto, i) => (
                  <li key={i} style={{ color: "#f3e8ff", marginBottom: "12px", fontSize: "15px", display: "flex", gap: "10px" }}>
                    <span style={{ color: PURPLE_ACCENT }}>•</span> {punto}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {activeTab === "Procesos" && (
            <div>
              <h3 style={{ color: PURPLE_ACCENT, fontSize: "12px", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "15px" }}>{INICIO_DATA.procesos.subtitulo}</h3>
              <div style={{ display: "grid", gap: "12px" }}>
                {INICIO_DATA.procesos.items.map((item, i) => (
                  <div key={i} style={{ background: "rgba(168, 85, 247, 0.1)", border: `1px solid ${BORDER_CARD}`, padding: "18px 22px", borderRadius: "12px", fontSize: "15px", fontWeight: 500, color: "#fff" }}>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "Tip" && (
            <div style={{ borderLeft: `4px solid ${PURPLE_ACCENT}`, paddingLeft: "25px", background: "rgba(192, 132, 252, 0.05)", padding: "20px 25px", borderRadius: "0 12px 12px 0" }}>
              <h3 style={{ color: PURPLE_ACCENT, fontSize: "12px", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "10px" }}>{INICIO_DATA.tip.subtitulo}</h3>
              <p style={{ fontSize: "16px", lineHeight: "1.7", color: "#e9d5ff", fontStyle: "italic", margin: 0 }}>
                "{INICIO_DATA.tip.info}"
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}