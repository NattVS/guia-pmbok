import React from 'react';
import { useNavigate } from 'react-router-dom';

const Seccion8Glosario = () => {
  const navigate = useNavigate();

  // Data extracted from the PMBOK 8 Glossary reference
  const glossaryData = [
    { termino: "Proyecto", definicion: "Iniciativa temporal en un contexto único emprendida para crear valor. Tiene un inicio y un fin definidos." },
    { termino: "Gestión de proyectos", definicion: "Aplicación de conocimientos, habilidades, herramientas y técnicas para cumplir o superar el valor previsto del proyecto." },
    { termino: "Valor", definicion: "El exceso de beneficios financieros y no financieros sobre la inversión. Diferente stakeholders perciben el valor de forma diferente." },
    { termino: "Resultado (Outcome)", definicion: "Consecuencia final de un proceso o proyecto; los efectos a largo plazo, cambios o valor generado por los entregables." },
    { termino: "Entregable (Output)", definicion: "Producto, resultado o servicio generado por un proceso. Puede ser entrada de otro proceso." },
    { termino: "Beneficio (Benefit)", definicion: "Ganancia o activo realizado por la organización como resultado de los outcomes entregados." },
    { termino: "Portafolio", definicion: "Colección de programas, proyectos y operaciones gestionados como grupo para maximizar la entrega de valor estratégico." },
    { termino: "Programa", definicion: "Grupo de proyectos relacionados gestionados coordinadamente para obtener beneficios no disponibles gestionándolos individualmente." },
    { termino: "Éxito del proyecto", definicion: "Vista de consenso entre beneficiarios, stakeholders y equipo de que el proyecto entregó valor que valió el esfuerzo e inversión." },
    { termino: "EEF", definicion: "Enterprise Environmental Factors: condiciones externas e internas que impactan el proyecto (mercado, regulación, cultura, tecnología)." },
    { termino: "OPA", definicion: "Organizational Process Assets: activos internos de la organización (plantillas, políticas, lecciones aprendidas, repositorios)." },
    { termino: "Tailoring", definicion: "Adaptar el enfoque, procesos y herramientas al contexto único del proyecto. Es obligatorio en PMBOK 8, no opcional." },
    { termino: "PMO", definicion: "Project Management Office: entidad organizacional que centraliza actividades relacionadas con gestión de portafolios, programas y proyectos." },
    { termino: "Sistema de entrega de valor", definicion: "Conjunto de actividades estratégicas para construir, sostener y/o avanzar la organización (portafolios, programas, proyectos, productos, operaciones)." }
  ];

  // --- GREEN THEME PALETTE ---
  const GREEN_ACCENT = "#4ade80";      
  const BG_PAGE = "#1a2e23";           
  const BG_NAV = "#0e1628";            
  const BORDER_COLOR = "rgba(74, 222, 128, 0.25)";
  const HEADER_BG = "rgba(74, 222, 128, 0.1)";

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
      maxWidth: '1200px',
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
      color: GREEN_ACCENT,
      fontWeight: '700',
      fontSize: '16px',
      textTransform: 'uppercase',
      letterSpacing: '1px'
    },
    title: {
      fontSize: '48px',
      fontWeight: '800',
      margin: '8px 0 12px 0'
    },
    tableContainer: {
      borderRadius: '12px',
      border: `1px solid ${BORDER_COLOR}`,
      overflow: 'hidden',
      boxShadow: '0 10px 30px rgba(0,0,0,0.3)'
    },
    table: {
      width: '100%',
      borderCollapse: 'collapse',
      backgroundColor: 'rgba(255, 255, 255, 0.02)'
    },
    th: {
      backgroundColor: HEADER_BG,
      padding: '18px 20px',
      fontSize: '15px',
      fontWeight: '700',
      borderBottom: `2px solid ${BORDER_COLOR}`,
      textAlign: 'left',
      color: GREEN_ACCENT
    },
    td: {
      padding: '16px 20px',
      fontSize: '14px',
      borderBottom: `1px solid ${BORDER_COLOR}`,
      verticalAlign: 'top',
      lineHeight: '1.6',
      color: 'rgba(255,255,255,0.9)'
    },
    termCell: {
      fontWeight: '700',
      color: '#fff',
      width: '25%',
      backgroundColor: 'rgba(255,255,255,0.02)'
    },
    backButton: {
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
      transition: "background 0.2s",
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
        <button
          onClick={() => navigate("/")}
          style={styles.backButton}
          onMouseEnter={(e) => (e.currentTarget.style.background = "#4a5fd8")}
          onMouseLeave={(e) => (e.currentTarget.style.background = "#3a4fc8")}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M10 3L5 8L10 13" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Inicio
        </button>
      </div>

      <div style={styles.contentArea}>
        {/* Title and Intro */}
        <div style={styles.titleSection}>
          <div style={styles.breadcrumb}>Inicio / <span style={{color: '#fff'}}>Sección 8</span></div>
          <div style={styles.sectionLabel}>Sección 8</div>
          <h1 style={styles.title}>Definiciones Clave y Glosario Esencial</h1>
        </div>

        {/* Glossary Table */}
        <div style={styles.tableContainer}>
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.th}>Término</th>
                <th style={styles.th}>Definición Guía PMBOK 8</th>
              </tr>
            </thead>
            <tbody>
              {glossaryData.map((item, index) => (
                <tr key={index}>
                  <td style={{ ...styles.td, ...styles.termCell }}>{item.termino}</td>
                  <td style={styles.td}>{item.definicion}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Seccion8Glosario;