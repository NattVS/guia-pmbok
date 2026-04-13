import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../src/assets/Logo-Nuevo-Grande.png";

// --- COLOR PALETTE (Light Blue / Cyan Theme) ---
const BLUE_ACCENT = "#38bdf8"; 
const BG_PAGE = "#082f49";        
const BG_CARD = "rgba(12, 74, 110, 0.4)"; 
const BORDER_CARD = "rgba(56, 189, 248, 0.3)"; 
const NAV_BG = "#0e1628";

const Seccion5Procesos = () => {
  const navigate = useNavigate();

  // The 40 processes mapped by Domain and Focus Area
  const tableData = [
    {
      domain: "Gobernanza",
      rows: [
        { inicio: "Inicio de proyecto o fase", planeacion: "Integrar y alinear los planes del proyecto", ejecucion: "Gestionar la ejecución del proyecto", monitoreo: "Monitorear y controlar el rendimiento del proyecto", cierre: "Cierre de proyecto o fase" },
        { inicio: "", planeacion: "Planear la estrategia de compras/adquisiciones", ejecucion: "Gestionar y garantizar calidad", monitoreo: "Evaluar y aplicar los cambios", cierre: "" },
        { inicio: "", planeacion: "", ejecucion: "Gestionar el conocimiento del proyecto", monitoreo: "", cierre: "" }
      ]
    },
    {
      domain: "Alcance",
      rows: [
        { inicio: "", planeacion: "Planificación del alcance del proyecto", ejecucion: "", monitoreo: "Monitorear y controlar el alcance", cierre: "" },
        { inicio: "", planeacion: "Obtener y analizar requisitos", ejecucion: "", monitoreo: "", cierre: "" },
        { inicio: "", planeacion: "Definición del alcance", ejecucion: "", monitoreo: "Validar el alcance", cierre: "" },
        { inicio: "", planeacion: "Desarrollar la estructura del alcance", ejecucion: "", monitoreo: "", cierre: "" }
      ]
    },
    {
      domain: "Cronograma",
      rows: [
        { inicio: "", planeacion: "Planificar la Gestión del cronograma", ejecucion: "", monitoreo: "Monitorear y controlar el cronograma", cierre: "" },
        { inicio: "", planeacion: "Desarrollar el cronograma", ejecucion: "", monitoreo: "", cierre: "" }
      ]
    },
    {
      domain: "Finanzas",
      rows: [
        { inicio: "", planeacion: "Planificación de la gestión financiera", ejecucion: "", monitoreo: "Monitorear y controlar las finanzas", cierre: "" },
        { inicio: "", planeacion: "Estimar el costo", ejecucion: "", monitoreo: "", cierre: "" },
        { inicio: "", planeacion: "Elaborar el presupuesto", ejecucion: "", monitoreo: "", cierre: "" }
      ]
    },
    {
      domain: "Recursos",
      rows: [
        { inicio: "", planeacion: "Planificar la gestión de recursos", ejecucion: "Adquirir recursos", monitoreo: "Monitorear y controlar los recursos", cierre: "" },
        { inicio: "", planeacion: "Estimar los recursos", ejecucion: "Liderar al equipo", monitoreo: "", cierre: "" }
      ]
    },
    {
      domain: "Riesgos",
      rows: [
        { inicio: "", planeacion: "Planificar la gestión del riesgo", ejecucion: "Implementar respuestas a los riesgos", monitoreo: "Monitorear los riesgos", cierre: "" },
        { inicio: "", planeacion: "Identificar riesgos", ejecucion: "", monitoreo: "", cierre: "" },
        { inicio: "", planeacion: "Realizar análisis de riesgos", ejecucion: "", monitoreo: "", cierre: "" },
        { inicio: "", planeacion: "Planificar las respuestas al riesgo", ejecucion: "", monitoreo: "", cierre: "" }
      ]
    },
    {
      domain: "Interesados",
      rows: [
        { inicio: "", planeacion: "Planificar la participación de los interesados", ejecucion: "Gestionar la participación de los interesados", monitoreo: "Monitorear la participación de los interesados", cierre: "" },
        { inicio: "Identificar Interesados", planeacion: "Planificar gestión de las comunicaciones", ejecucion: "Gestionar las comunicaciones", monitoreo: "Monitorear las comunicaciones", cierre: "" }
      ]
    }
  ];

  const styles = {
    container: {
      backgroundColor: BG_PAGE,
      minHeight: '100vh',
      color: '#fff',
      paddingBottom: '60px',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    },
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '14px 32px',
      backgroundColor: NAV_BG,
      position: 'sticky',
      top: 0,
      zIndex: 100,
      borderBottom: '1px solid rgba(255,255,255,0.05)'
    },
    contentArea: {
      maxWidth: '1350px',
      margin: '0 auto',
      padding: '40px'
    },
    breadcrumb: {
      fontSize: '13px',
      color: 'rgba(255,255,255,0.6)',
      marginBottom: '15px'
    },
    sectionLabel: {
      color: BLUE_ACCENT,
      fontWeight: '700',
      fontSize: '14px',
      textTransform: 'uppercase',
      letterSpacing: '1px',
      marginBottom: '8px'
    },
    title: {
        fontSize: "clamp(28px, 4vw, 48px)",
        fontWeight: 700,
        margin: "0 0 16px",
        letterSpacing: "-0.02em",
        lineHeight: 1.1,
        transition: "opacity 0.45s ease 0.06s, transform 0.45s ease 0.06s",
      },
    tableContainer: {
      overflowX: 'auto',
      borderRadius: '16px',
      border: `1.5px solid ${BORDER_CARD}`,
      boxShadow: '0 20px 50px rgba(0,0,0,0.3)',
      backgroundColor: 'rgba(0,0,0,0.2)'
    },
    table: {
      width: '100%',
      borderCollapse: 'collapse',
    },
    th: {
      backgroundColor: 'rgba(56, 189, 248, 0.15)',
      padding: '20px 15px',
      fontSize: '13px',
      fontWeight: '700',
      border: `1px solid ${BORDER_CARD}`,
      textAlign: 'center',
      color: BLUE_ACCENT,
      textTransform: 'uppercase',
      letterSpacing: '0.5px'
    },
    td: {
      padding: '14px 18px',
      fontSize: '13.5px',
      border: `1px solid ${BORDER_CARD}`,
      verticalAlign: 'middle',
      lineHeight: '1.4',
      color: '#e0f2fe'
    },
    domainCell: {
      textAlign: 'center',
      fontWeight: '800',
      backgroundColor: 'rgba(56, 189, 248, 0.05)',
      fontSize: '15px',
      color: '#fff',
      minWidth: '140px'
    }
  };

  return (
    <div style={styles.container}>
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


      <div style={styles.contentArea}>
        {/* Title and Intro */}
        <div style={{ marginBottom: '40px' }}>
          <div style={styles.breadcrumb}>
          <div style={styles.breadcrumb}>Inicio / <span style={{color: '#fff'}}>Sección 8</span></div>
          </div>
          <div style={styles.sectionLabel}>Sección 5</div>
          <h1 style={styles.title}>Procesos</h1>
          <p style={{ color: '#bae6fd', fontSize: '18px', maxWidth: '850px', lineHeight: '1.6' }}>
            El PMBOK 8 integra <b>40 procesos</b> fundamentales distribuidos en las 5 áreas de enfoque y 
            mapeados a través de los 7 dominios de desempeño.
          </p>
        </div>

        {/* Interactive Table Area */}
        <div style={styles.tableContainer}>
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={{ ...styles.th, textAlign: 'left', color: '#fff' }}>Dominios / Enfoque</th>
                <th style={styles.th}>Inicio</th>
                <th style={styles.th}>Planeación</th>
                <th style={styles.th}>Ejecución</th>
                <th style={styles.th}>Monitoreo y Control</th>
                <th style={styles.th}>Cierre</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((group, gIdx) => (
                <React.Fragment key={gIdx}>
                  {group.rows.map((row, rIdx) => (
                    <tr key={`${gIdx}-${rIdx}`} style={{ backgroundColor: rIdx % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.02)' }}>
                      {rIdx === 0 && (
                        <td 
                          rowSpan={group.rows.length} 
                          style={{ ...styles.td, ...styles.domainCell }}
                        >
                          {group.domain}
                        </td>
                      )}
                      <td style={styles.td}>{row.inicio}</td>
                      <td style={styles.td}>{row.planeacion}</td>
                      <td style={styles.td}>{row.ejecucion}</td>
                      <td style={styles.td}>{row.monitoreo}</td>
                      <td style={styles.td}>{row.cierre}</td>
                    </tr>
                  ))}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Seccion5Procesos;