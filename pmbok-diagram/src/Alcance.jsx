import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// --- ESTRUCTURA DE LA INFO PARA "ALCANCE" (DOMINIO 2) ---
const ALCANCE_DATA = {
  id: "02 - 07",
  titulo: "Alcance",
  subtitulo: "Scope Domain",
  descripcion: "Define y controla qué está incluido y excluido del proyecto, asegurando que todo el trabajo contribuya al valor esperado.",
  definicion: {
    subtitulo: "Definición PMBOK 8",
    info: "Dominio que incluye los procesos para garantizar que el proyecto incluya todo el trabajo requerido, y solo el trabajo requerido, para completar el proyecto exitosamente."
  },
  puntosClave: [
    "EDT/WBS: descomposición jerárquica del trabajo en paquetes manejables",
    "Elicitar y Analizar Requisitos: capturar necesidades reales de stakeholders",
    "Definir el Alcance: declaración formal de lo que incluye y excluye el proyecto",
    "Controlar el Alcance: prevenir Scope Creep (expansión no autorizada)",
    "Validar el Alcance: obtener aceptación formal de entregables completados"
  ],
  areasEnfoque: ["Planeación", "Monitoreo y Control",],
  tip: {
    subtitulo: "Tip de Estudio",
    info: "Scope Creep vs. Gold Plating: el creep viene de stakeholders que piden más; el gold plating viene del equipo que da más de lo requerido. Ambos destruyen valor sin autorización."
  }
};

  // --- GREEN THEME PALETTE ---
  const GREEN_ACCENT = "#4ade80";      
  const BG_PAGE = "#1a2e23";           
  const BG_NAV = "#0e1628";            
  const BORDER_COLOR = "rgba(74, 222, 128, 0.25)";
  const HEADER_BG = "rgba(74, 222, 128, 0.1)";
  const BG_CARD = "rgba(255, 255, 255, 0.03)";
  const BORDER_CARD = "rgba(74, 222, 128, 0.25)";

const TABS = ["Definición", "Puntos Clave", "Tip"];

export default function DetalleAlcance() {
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
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 32px", background: BG_NAV, position: "sticky", top: 0, zIndex: 100 }}>
        <div style={{ border: "1px solid rgba(255,255,255,0.4)", padding: "6px 12px", borderRadius: "4px", fontSize: "12px" }}>
          <b>PMBOK® Guide</b>
          <div style={{ fontSize: "10px", opacity: 0.6 }}>Octava Edición</div>
        </div>

        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: "17px", fontWeight: 700 }}>El ADN de la gestión de proyectos de valor</div>
          <div style={{ fontSize: "11px", opacity: 0.5, marginTop: "2px", letterSpacing: "0.07em" }}>PMBOK 8 – PMI 2025 – GUIA INTERACTIVA</div>
        </div>

      {/* Back button */}
              <button
                onClick={() => navigate("/dominios-de-desempeño")}
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
        <div style={{ fontSize: "13px", color: GREEN_ACCENT, marginBottom: "25px"}}>
          Inicio <span style={{ margin: "0 8px", opacity: 0.4, color: "#fff" , fontWeight: 200}}>/</span> 
          Sección 4 <span style={{ margin: "0 8px", opacity: 0.4, color: "#fff" , fontWeight: 200}}>/</span> 
          <span style={{ color: "#fff" , fontWeight: 600}}>{ALCANCE_DATA.titulo}</span>
        </div>

        {/* ── HERO CARD ── */}
        <div style={{ background: BG_CARD, border: `1.5px solid ${BORDER_CARD}`, borderRadius: "20px", padding: "35px", marginBottom: "30px", boxShadow: "0 4px 20px rgba(0,0,0,0.2)" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
            <div>
              <div style={{ color: GREEN_ACCENT, fontSize: "13px", fontWeight: 600, marginBottom: "4px" }}>Dominio 2</div>
               <h1 style={{ fontSize: "48px", fontWeight: 800, margin: "0 0 4px", letterSpacing: "-0.02em" }}>
                {ALCANCE_DATA.titulo}
              </h1>
              <div style={{ color: GREEN_ACCENT, opacity: 0.8, fontSize: "14px", fontWeight: 600, marginBottom: "15px" }}>
                {ALCANCE_DATA.subtitulo}
              </div>
            </div>
            <span style={{ fontSize: "14px", fontWeight: 700, color: GREEN_ACCENT, opacity: 0.6 }}>
              {ALCANCE_DATA.id}
            </span>
          </div>
          <div style={{ color: "#d1fae5", fontSize: "16px", lineHeight: "1.7", maxWidth: "850px" }}>
            {ALCANCE_DATA.descripcion}
          </div>
        </div>

        {/* ── TABS ── */}
        <div style={{ display: "flex", gap: "12px", marginBottom: "25px" }}>
          {TABS.map((tab) => {
            const isActive = activeTab === tab;
            return (
              <button
                key={tab}
                onClick={() => handleTabChange(tab)}
                style={{
                  flex: 1,
                  padding: "16px",
                  borderRadius: "12px",
                  border: `1.5px solid ${isActive ? GREEN_ACCENT : "rgba(74, 222, 128, 0.15)"}`,
                  background: isActive ? "rgba(20, 83, 45, 0.6)" : "rgba(6, 78, 59, 0.3)",
                  color: isActive ? "#fff" : "#a7f3d0",
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
          style={{ background: "rgba(0,0,0,0.15)", border: `1px solid ${BORDER_CARD}`, borderRadius: "16px", padding: "40px", animation: "fadeUp 0.4s ease forwards" }}
        >
          <style>{`@keyframes fadeUp { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }`}</style>

          {activeTab === "Definición" && (
            <div>
              <h3 style={{ color: GREEN_ACCENT, fontSize: "12px", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "15px" }}>{ALCANCE_DATA.definicion.subtitulo}</h3>
              <p style={{ fontSize: "18px", lineHeight: "1.8", color: "#ecfdf5", margin: 0 }}>{ALCANCE_DATA.definicion.info}</p>
            </div>
          )}

          {activeTab === "Puntos Clave" && (
            <div>
              <h3 style={{ color: GREEN_ACCENT, fontSize: "12px", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "20px" }}>Puntos Clave</h3>
              <ul style={{ padding: 0, margin: "0 0 30px 0", listStyle: "none" }}>
                {ALCANCE_DATA.puntosClave.map((punto, i) => (
                  <li key={i} style={{ color: "#ecfdf5", marginBottom: "14px", fontSize: "15px", display: "flex", gap: "12px" }}>
                    <span style={{ color: GREEN_ACCENT }}>•</span> {punto}
                  </li>
                ))}
              </ul>
              
              <h4 style={{ color: GREEN_ACCENT, fontSize: "11px", textTransform: "uppercase", marginBottom: "15px", opacity: 0.8 }}>Áreas de Enfoque Relacionadas</h4>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                {ALCANCE_DATA.areasEnfoque.map((area, i) => (
                  <span key={i} style={{ fontSize: "13px", padding: "6px 12px", background: "rgba(74, 222, 128, 0.1)", border: "1px solid rgba(74, 222, 128, 0.2)", borderRadius: "6px", color: "#d1fae5" }}>
                    {area}
                  </span>
                ))}
              </div>
            </div>
          )}

          {activeTab === "Tip" && (
            <div style={{ borderLeft: `4px solid ${GREEN_ACCENT}`, paddingLeft: "25px" }}>
              <h3 style={{ color: GREEN_ACCENT, fontSize: "12px", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "10px" }}>{ALCANCE_DATA.tip.subtitulo}</h3>
              <p style={{ fontSize: "17px", lineHeight: "1.7", color: "#d1fae5", fontStyle: "italic", margin: 0 }}>
                "{ALCANCE_DATA.tip.info}"
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}