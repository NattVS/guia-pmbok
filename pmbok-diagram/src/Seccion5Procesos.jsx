import React from 'react';
import { useNavigate } from 'react-router-dom';

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

  // --- BLUE THEME PALETTE ---
  const BLUE_ACCENT = "#7eb6e2";       // Light blue for "Sección 5"
  const BG_PAGE = "#3a506b";            // Steel blue background from image
  const BG_NAV = "#0e1628";             // Top navbar dark navy
  const BORDER_COLOR = "rgba(165, 191, 221, 0.3)"; // Muted blue borders
  const HEADER_BG = "rgba(255, 255, 255, 0.08)";

  const styles = {
    container: {
      backgroundColor: BG_PAGE,
      minHeight: '100vh',
      color: '#fff',
      paddingBottom: '60px',
      fontFamily: 'Inter, system-ui, -apple-system, sans-serif'
    },
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '20px 40px',
      backgroundColor: BG_NAV,
      marginBottom: '40px'
    },
    contentArea: {
      maxWidth: '1280px',
      margin: '0 auto',
      padding: '0 40px'
    },
    titleSection: {
      marginBottom: '40px'
    },
    breadcrumb: {
      fontSize: '14px',
      color: 'rgba(255,255,255,0.6)',
      marginBottom: '10px'
    },
    sectionLabel: {
      color: BLUE_ACCENT,
      fontWeight: '700',
      fontSize: '16px',
      textTransform: 'uppercase',
      letterSpacing: '1px'
    },
    title: {
      fontSize: '56px',
      fontWeight: '800',
      margin: '8px 0 12px 0'
    },
    tableContainer: {
      overflowX: 'auto',
      borderRadius: '16px',
      border: `1px solid ${BORDER_COLOR}`,
      boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
    },
    table: {
      width: '100%',
      borderCollapse: 'collapse',
      backgroundColor: 'rgba(255, 255, 255, 0.03)'
    },
    th: {
      backgroundColor: HEADER_BG,
      padding: '18px 15px',
      fontSize: '14px',
      fontWeight: '600',
      border: `1px solid ${BORDER_COLOR}`,
      textAlign: 'center',
      color: 'rgba(255,255,255,0.9)'
    },
    td: {
      padding: '14px 15px',
      fontSize: '13px',
      border: `1px solid ${BORDER_COLOR}`,
      verticalAlign: 'middle',
      lineHeight: '1.5',
      color: 'rgba(255,255,255,0.85)'
    },
    domainCell: {
      textAlign: 'center',
      fontWeight: '700',
      backgroundColor: 'rgba(255,255,255,0.05)',
      fontSize: '15px'
    },
    navButton: {
      background: 'rgba(255,255,255,0.08)',
      border: '1px solid rgba(255,255,255,0.2)',
      color: '#fff',
      padding: '8px 24px',
      borderRadius: '8px',
      cursor: 'pointer',
      transition: 'all 0.2s ease'
    }
  };

  return (
    <div style={styles.container}>
      {/* Top Navigation */}
      <div style={styles.header}>
        <div style={{ border: '1px solid #fff', padding: '6px 12px', fontSize: '12px', borderRadius: '4px' }}>
          PMBOK® Guide <br /> <span style={{ opacity: 0.5 }}>Octava Edición</span>
        </div>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontWeight: '600', fontSize: '18px' }}>El ADN de la gestión de proyectos de valor</div>
          <div style={{ fontSize: '12px', opacity: 0.4, letterSpacing: '1.5px' }}>PMBOK 8 - PMI 2025 - GUIA INTERACTIVA</div>
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
        <div style={styles.titleSection}>
          <div style={styles.breadcrumb}>Inicio / <span style={{color: '#fff'}}>Sección 5</span></div>
          <div style={styles.sectionLabel}>Sección 5</div>
          <h1 style={styles.title}>Procesos</h1>
          <p style={{ opacity: 0.7, fontSize: '18px', maxWidth: '800px' }}>
            El PMBOK 8 incluye 5 áreas de enfoque, con 40 procesos integrados en los 7 dominios.
          </p>
        </div>

        {/* Interactive Table Area */}
        <div style={styles.tableContainer}>
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.th}>Áreas de Enfoque / Dominios</th>
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
                    <tr key={`${gIdx}-${rIdx}`}>
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