import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from "../src/assets/Logo-Nuevo-Grande.png";

// --- ESTRUCTURA DE LA INFO PARA "EJECUCIÓN" ---
const EJECUCION_DATA = {
  id: "03 - 05",
  titulo: "Ejecución",
  subtitulo: "Executing Focus Area",
  descripcion: "Realizar el trabajo planificado.",
  definicion: "Área de enfoque que coordina personas y recursos para llevar a cabo el plan del proyecto. Aquí se producen los entregables y se gestiona la calidad, comunicaciones y recursos.",
  puntosClave: [
    "Dirigir y Gestionar el Trabajo del Proyecto: producir entregables",
    "Gestionar la Calidad: asegurar que los procesos son correctos",
    "Adquirir, Desarrollar y Gestionar el Equipo del Proyecto",
    "Gestionar las Comunicaciones con stakeholders",
    "Implementar las Respuestas a Riesgos identificados"
  ],

  salidasPrincipales: ["Entregables", "Datos de desempeño", "Solicitudes de cambio", "Actualizaciones al plan"],

  procesos: {
    subtitulo: "Procesos Principales",
    items: [
      "Gestionar la ejecución del proyecto.",
      "Adquirir Recursos.",
      "Implementar Respuesta a los riesgos.",
      "Gestionar la participación de los interesados.",
    ]
  },

  tip: {
    subtitulo: "TIP de Práctica",
    info: "La mayor parte del presupuesto del proyecto se consume en la Ejecución. Es donde el equipo produce el valor real del proyecto."
  }
};

// --- COLOR PALETTE (Consistent with Section 3) ---
const PURPLE_ACCENT = "#c084fc"; 
const BG_PAGE = "#2e104e";       
const BG_CARD = "rgba(88, 28, 135, 0.4)"; 
const BORDER_CARD = "rgba(168, 85, 247, 0.4)"; 
const NAV_BG = "#0e1628";

const TABS = ["Definición", "Puntos Clave", "Procesos", "Tip"];

export default function DetalleEjecucion() {
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
          <span style={{ color: "#fff" }}>{EJECUCION_DATA.titulo}</span>
        </div>

        {/* ── HERO CARD ── */}
        <div style={{ background: BG_CARD, border: `1.5px solid ${BORDER_CARD}`, borderRadius: "20px", padding: "35px", marginBottom: "30px", boxShadow: "0 4px 20px rgba(0,0,0,0.2)" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
            <div>
               <h1 style={{ fontSize: "48px", fontWeight: 800, margin: "0 0 4px", letterSpacing: "-0.02em" }}>
                {EJECUCION_DATA.titulo}
              </h1>
              <div style={{ color: PURPLE_ACCENT, fontSize: "14px", fontWeight: 600, marginBottom: "15px" }}>
                {EJECUCION_DATA.subtitulo}
              </div>
            </div>
            <span style={{ fontSize: "14px", fontWeight: 700, color: PURPLE_ACCENT }}>
              {EJECUCION_DATA.id}
            </span>
          </div>
          <div style={{ color: "#e9d5ff", fontSize: "16px", lineHeight: "1.7", maxWidth: "800px" }}>
            {EJECUCION_DATA.descripcion}
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
              <h3 style={{ color: PURPLE_ACCENT, fontSize: "12px", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "15px" }}>Definición PMBOK 8</h3>
              <p style={{ fontSize: "17px", lineHeight: "1.8", color: "#f3e8ff", margin: 0 }}>{EJECUCION_DATA.definicion}</p>
            </div>
          )}

          {activeTab === "Puntos Clave" && (
            <div>
              <h3 style={{ color: PURPLE_ACCENT, fontSize: "12px", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "20px" }}>Puntos Clave</h3>
              <ul style={{ padding: 0, margin: 0, listStyle: "none" }}>
                {EJECUCION_DATA.puntosClave.map((punto, i) => (
                  <li key={i} style={{ color: "#f3e8ff", marginBottom: "12px", fontSize: "15px", display: "flex", gap: "10px" }}>
                    <span style={{ color: PURPLE_ACCENT }}>•</span> {punto}
                  </li>
                ))}
              </ul>
              <h4 style={{ color: PURPLE_ACCENT, fontSize: "11px", textTransform: "uppercase", marginBottom: "15px", opacity: 0.8 }}>Salidas Principales</h4>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                {EJECUCION_DATA.salidasPrincipales.map((area, i) => (
                  <span key={i} style={{ fontSize: "13px", padding: "6px 12px", background: "rgba(88, 28, 135, 0.4)", border: "rgba(182, 159, 203, 0.4)", borderRadius: "6px", color: "#d1fae5" }}>
                    {area}
                  </span>
                ))}
              </div>
            </div>
          )}

          {activeTab === "Procesos" && (
            <div>
              <h3 style={{ color: PURPLE_ACCENT, fontSize: "12px", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "15px" }}>{EJECUCION_DATA.procesos.subtitulo}</h3>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                {EJECUCION_DATA.procesos.items.map((item, i) => (
                  <div key={i} style={{ background: "rgba(168, 85, 247, 0.1)", border: `1px solid ${BORDER_CARD}`, padding: "18px 22px", borderRadius: "12px", fontSize: "14px", fontWeight: 500, color: "#fff", display: "flex", alignItems: "center" }}>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "Tip" && (
            <div style={{ borderLeft: `4px solid ${PURPLE_ACCENT}`, paddingLeft: "25px", background: "rgba(192, 132, 252, 0.05)", padding: "20px 25px", borderRadius: "0 12px 12px 0" }}>
              <h3 style={{ color: PURPLE_ACCENT, fontSize: "12px", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "10px" }}>{EJECUCION_DATA.tip.subtitulo}</h3>
              <p style={{ fontSize: "16px", lineHeight: "1.7", color: "#e9d5ff", fontStyle: "italic", margin: 0 }}>
                "{EJECUCION_DATA.tip.info}"
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}