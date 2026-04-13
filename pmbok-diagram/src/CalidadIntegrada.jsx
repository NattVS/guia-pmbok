import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// --- Estructura de la info para Calidad Integrada (principio 3) ---
const CALIDAD_DATA = {
  id: "03 - 06",
  titulo: "Integrar la Calidad en los procesos y entregables",
  subtitulo: "Embed Quality",
  descripcion: "La calidad no es un control al final: se integra en cada proceso y entregable desde el inicio del proyecto.",
  definicion: {
    subtitulo: "Definición PMBOK 8",
    info: "La calidad es el grado en que las características inherentes de un entregable cumplen o superan los objetivos del proyecto. Se integra desde el inicio mediante mejora continua."
  },
  puntosClave: [
    "Dimensiones: Desempeño, Conformidad, Confiabilidad, Eficiencia, Resiliencia",
    "Satisfacción del cliente: responder a necesidades declaradas e implícitas",
    "Mejora continua y eliminación de waste (desperdicios)",
    "Práctica 'Shift-Left': incorporar calidad lo más pronto posible",
    "Métricas de calidad vinculadas a criterios de aceptación definidos"
  ],
  dominiosRelacionados: [
    "Gobernanza", "Alcance", "Cronograma", "Finanzas", "Interesados", "Recursos", "Riesgos"
  ],
  ejemplo: {
    subtitulo: "Ejemplo en Acción",
    info: "Una empresa expande servicios a nuevo mercado. Con calidad integrada: investigar expectativas reales de distribuidores → estándares superiores → mayor cuota de mercado."
  },
  tip: {
    subtitulo: "TIP de Práctica",
    info: "Cost of Quality (CoQ) = Cost of Conformance + Cost of Non-Conformance. Invertir en prevención (Shift-Left) siempre es más barato que corregir defectos en producción."
  }
};

// --- COLOR PALETTE (Light Blue / Cyan Theme) ---
const BLUE_ACCENT = "#38bdf8";    
const BG_PAGE = "#082f49";   
const BG_CARD = "rgba(12, 74, 110, 0.4)"; 
const BORDER_CARD = "rgba(56, 189, 248, 0.4)"; 
const NAV_BG = "#0e1628";

const TABS = ["Definición", "Puntos Clave", "Ejemplo", "Tip"];

export default function DetalleCalidadIntegrada() {
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
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 32px", background: NAV_BG, position: "sticky", top: 0, zIndex: 100 }}>
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
                onClick={() => navigate("/principios")}
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
        <div style={{ fontSize: "13px", color: "rgba(200,215,255,0.85)", marginBottom: "25px" }}>
          Inicio <span style={{ margin: "0 8px", opacity: 0.4, color: "#fff" , fontWeight: 200}}>/</span> 
          Sección 1 <span style={{ margin: "0 8px", opacity: 0.4, color: "#fff", fontWeight: 200 }}>/</span> 
          <span style={{ color: "#fff", fontWeight: 600 }}>{CALIDAD_DATA.titulo}</span>
        </div>

        {/* ── HERO CARD ── */}
        <div style={{ background: BG_CARD, border: `1.5px solid ${BORDER_CARD}`, borderRadius: "20px", padding: "35px", marginBottom: "30px", boxShadow: "0 10px 30px rgba(0,0,0,0.3)" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
            <div>
              <div style={{ color: BLUE_ACCENT, fontSize: "13px", fontWeight: 700, marginBottom: "4px", textTransform: "uppercase", letterSpacing: "1px" }}>Principio 03</div>
               <h1 style={{
                  fontSize: "clamp(28px, 4vw, 48px)",
                  fontWeight: 700,
                  margin: "0 0 16px",
                  letterSpacing: "-0.02em",
                  lineHeight: 1.1,
                  transition: "opacity 0.45s ease 0.06s, transform 0.45s ease 0.06s",
                }}>
                {CALIDAD_DATA.titulo}
              </h1>
              <div style={{ color: BLUE_ACCENT, opacity: 0.9, fontSize: "14px", fontWeight: 600, marginBottom: "15px" }}>
                {CALIDAD_DATA.subtitulo}
              </div>
            </div>
            <span style={{ fontSize: "14px", fontWeight: 700, color: BLUE_ACCENT }}>
               {CALIDAD_DATA.id}
            </span>
          </div>
          <div style={{ color: "#e0f2fe", fontSize: "16px", lineHeight: "1.7", maxWidth: "850px" }}>
            {CALIDAD_DATA.descripcion}
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
                  border: `1.5px solid ${isActive ? BLUE_ACCENT : "rgba(56, 189, 248, 0.2)"}`,
                  background: isActive ? "rgba(14, 165, 233, 0.3)" : "rgba(12, 74, 110, 0.2)",
                  color: isActive ? "#fff" : "#bae6fd",
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
          style={{ background: "rgba(0,0,0,0.2)", border: `1px solid ${BORDER_CARD}`, borderRadius: "16px", padding: "40px", animation: "fadeUp 0.4s ease forwards" }}
        >
          <style>{`@keyframes fadeUp { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }`}</style>

          {activeTab === "Definición" && (
            <div>
              <h3 style={{ color: BLUE_ACCENT, fontSize: "12px", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "15px" }}>{CALIDAD_DATA.definicion.subtitulo}</h3>
              <p style={{ fontSize: "18px", lineHeight: "1.8", color: "#f0f9ff", margin: 0 }}>{CALIDAD_DATA.definicion.info}</p>
            </div>
          )}

          {activeTab === "Puntos Clave" && (
            <div>
              <h3 style={{ color: BLUE_ACCENT, fontSize: "12px", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "20px" }}>Puntos Clave</h3>
              <ul style={{ padding: 0, margin: "0 0 30px 0", listStyle: "none" }}>
                {CALIDAD_DATA.puntosClave.map((punto, i) => (
                  <li key={i} style={{ color: "#f0f9ff", marginBottom: "14px", fontSize: "15px", display: "flex", gap: "12px" }}>
                    <span style={{ color: BLUE_ACCENT }}>•</span> {punto}
                  </li>
                ))}
              </ul>
              
              <h4 style={{ color: BLUE_ACCENT, fontSize: "11px", textTransform: "uppercase", marginBottom: "15px", opacity: 0.8 }}>Dominios Relacionados</h4>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                {CALIDAD_DATA.dominiosRelacionados.map((dominio, i) => (
                  <span key={i} style={{ fontSize: "12px", padding: "6px 14px", background: "rgba(56, 189, 248, 0.1)", border: "1px solid rgba(56, 189, 248, 0.2)", borderRadius: "20px", color: "#bae6fd", fontWeight: 500 }}>
                    {dominio}
                  </span>
                ))}
              </div>
            </div>
          )}

          {activeTab === "Ejemplo" && (
            <div>
              <h3 style={{ color: BLUE_ACCENT, fontSize: "12px", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "15px" }}>{CALIDAD_DATA.ejemplo.subtitulo}</h3>
              <div style={{ background: "rgba(12, 74, 110, 0.2)", padding: "25px", borderRadius: "12px", borderLeft: `4px solid ${BLUE_ACCENT}` }}>
                <p style={{ fontSize: "16px", lineHeight: "1.8", color: "#f0f9ff", margin: 0, fontStyle: "italic" }}>
                  {CALIDAD_DATA.ejemplo.info}
                </p>
              </div>
            </div>
          )}

          {activeTab === "Tip" && (
            <div style={{ borderLeft: `4px solid ${BLUE_ACCENT}`, paddingLeft: "25px", background: "rgba(56, 189, 248, 0.05)", padding: "20px 25px", borderRadius: "0 12px 12px 0" }}>
              <h3 style={{ color: BLUE_ACCENT, fontSize: "12px", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "10px" }}>{CALIDAD_DATA.tip.subtitulo}</h3>
              <p style={{ fontSize: "17px", lineHeight: "1.7", color: "#e0f2fe", margin: 0 }}>
                "{CALIDAD_DATA.tip.info}"
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}