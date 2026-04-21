import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from "../src/assets/Logo-Nuevo-Grande.png";

// --- ESTRUCTURA DE LA INFO PARA "CRONOGRAMA" (DOMINIO 3) ---
const CRONOGRAMA_DATA = {
  id: "03 - 07",
  titulo: "Cronograma",
  subtitulo: "Schedule Domain",
  descripcion: "Planificar y controlar el tiempo de entrega del proyecto para maximizar el valor en el momento oportuno.",
  definicion: {
    subtitulo: "Definición PMBOK 8",
    info: "Dominio que gestiona la oportuna finalización del proyecto. Administra la secuencia, duración, dependencias y recursos de las actividades."
  },
  puntosClave: [
    "Ruta Crítica (CPM): secuencia que determina la duración mínima del proyecto",
    "Float/Holgura: tiempo disponible antes de retrasar la ruta crítica",
    "Predictivo: Gantt, CPM, PERT — plan detallado desde el inicio",
    "Adaptativo: Sprints (2-4 semanas), Kanban/flujo continuo",
    "Buffer de tiempo: reservas de contingencia para incertidumbre estimada"
  ],
  areasEnfoque: ["Planeación", "Monitoreo y Control",],

  procesos: {
    subtitulo: "Procesos Relacionados",
    items: [
      "Planificar la Gestión del Cronograma.",
      "Desarrollar el Cronograma.",
      "Monitorear y Controlar el Cronograma.",
    ]
  },

  tip: {
    subtitulo: "Tip de Estudio",
    info: "SPI = EV/PV. SPI > 1: adelantado. SPI < 1: atrasado. Usar siempre junto con CPI para una visión completa del desempeño del proyecto."
  }
};

  // --- GREEN THEME PALETTE ---
  const GREEN_ACCENT = "#4ade80";      
  const BG_PAGE = "#1a2e23";           
  const NAV_BG = "#0e1628";            
  const BORDER_COLOR = "rgba(74, 222, 128, 0.25)";
  const HEADER_BG = "rgba(74, 222, 128, 0.1)";
  const BG_CARD = "rgba(255, 255, 255, 0.03)";
  const BORDER_CARD = "rgba(74, 222, 128, 0.25)";

const TABS = ["Definición", "Puntos Clave", "Procesos", "Tip"];

export default function DetalleCronograma() {
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
            src={logo} // or "/Logo-Nuevo-Grande.png"
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
            pointerEvents: "none" // prevents blocking clicks
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
        <div style={{ fontSize: "13px", color: GREEN_ACCENT, marginBottom: "25px", }}>
          Inicio <span style={{ margin: "0 8px", opacity: 0.4, color: "#fff" , fontWeight: 200}}>/</span> 
          Sección 4 <span style={{ margin: "0 8px", opacity: 0.4, color: "#fff" , fontWeight: 200}}>/</span> 
          <span style={{ color: "#fff", fontWeight: 600}}>{CRONOGRAMA_DATA.titulo}</span>
        </div>

        {/* ── HERO CARD ── */}
        <div style={{ background: BG_CARD, border: `1.5px solid ${BORDER_CARD}`, borderRadius: "20px", padding: "35px", marginBottom: "30px", boxShadow: "0 4px 20px rgba(0,0,0,0.2)" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
            <div>
              <div style={{ color: GREEN_ACCENT, fontSize: "13px", fontWeight: 600, marginBottom: "4px" }}>Dominio 3</div>
               <h1 style={{ fontSize: "48px", fontWeight: 800, margin: "0 0 4px", letterSpacing: "-0.02em" }}>
                {CRONOGRAMA_DATA.titulo}
              </h1>
              <div style={{ color: GREEN_ACCENT, opacity: 0.8, fontSize: "14px", fontWeight: 600, marginBottom: "15px" }}>
                {CRONOGRAMA_DATA.subtitulo}
              </div>
            </div>
            <span style={{ fontSize: "14px", fontWeight: 700, color: GREEN_ACCENT, opacity: 0.6 }}>
              {CRONOGRAMA_DATA.id}
            </span>
          </div>
          <div style={{ color: "#d1fae5", fontSize: "16px", lineHeight: "1.7", maxWidth: "850px" }}>
            {CRONOGRAMA_DATA.descripcion}
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
              <h3 style={{ color: GREEN_ACCENT, fontSize: "12px", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "15px" }}>{CRONOGRAMA_DATA.definicion.subtitulo}</h3>
              <p style={{ fontSize: "18px", lineHeight: "1.8", color: "#ecfdf5", margin: 0 }}>{CRONOGRAMA_DATA.definicion.info}</p>
            </div>
          )}

          {activeTab === "Puntos Clave" && (
            <div>
              <h3 style={{ color: GREEN_ACCENT, fontSize: "12px", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "20px" }}>Puntos Clave</h3>
              <ul style={{ padding: 0, margin: "0 0 30px 0", listStyle: "none" }}>
                {CRONOGRAMA_DATA.puntosClave.map((punto, i) => (
                  <li key={i} style={{ color: "#ecfdf5", marginBottom: "14px", fontSize: "15px", display: "flex", gap: "12px" }}>
                    <span style={{ color: GREEN_ACCENT }}>•</span> {punto}
                  </li>
                ))}
              </ul>
              
              <h4 style={{ color: GREEN_ACCENT, fontSize: "11px", textTransform: "uppercase", marginBottom: "15px", opacity: 0.8 }}>Áreas de Enfoque Relacionadas</h4>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                {CRONOGRAMA_DATA.areasEnfoque.map((area, i) => (
                  <span key={i} style={{ fontSize: "13px", padding: "6px 12px", background: "rgba(74, 222, 128, 0.1)", border: "1px solid rgba(74, 222, 128, 0.2)", borderRadius: "6px", color: "#d1fae5" }}>
                    {area}
                  </span>
                ))}
              </div>
            </div>
          )}

          
          {activeTab === "Procesos" && (
            <div>
              <h3 style={{ color: GREEN_ACCENT, fontSize: "12px", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "15px" }}>{CRONOGRAMA_DATA.procesos.subtitulo}</h3>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                {CRONOGRAMA_DATA.procesos.items.map((item, i) => (
                  <div key={i} style={{ background: "rgba(74, 222, 128, 0.1)", border: `1px solid ${BORDER_CARD}`, padding: "18px 22px", borderRadius: "12px", fontSize: "14px", fontWeight: 500, color: "#fff", display: "flex", alignItems: "center" }}>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "Tip" && (
            <div style={{ borderLeft: `4px solid ${GREEN_ACCENT}`, paddingLeft: "25px" }}>
              <h3 style={{ color: GREEN_ACCENT, fontSize: "12px", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "10px" }}>{CRONOGRAMA_DATA.tip.subtitulo}</h3>
              <p style={{ fontSize: "17px", lineHeight: "1.7", color: "#d1fae5", fontStyle: "italic", margin: 0 }}>
                "{CRONOGRAMA_DATA.tip.info}"
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}