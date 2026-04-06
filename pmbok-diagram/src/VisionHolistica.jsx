import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PRINCIPIOS_DATA = [
  {
    id: 1,
    titulo: "Visión Holística",
    subtitulo: "Adopt a Holistic View",
    descripcion:
      "Ver el proyecto como un sistema integrado considerando todas las interdependencias, desde el inicio hasta el cierre",
    definicion:
      "La Visión Holística implica comprender el proyecto en su totalidad, reconociendo que cada componente está interconectado. Un gerente de proyecto con visión holística no solo gestiona tareas aisladas, sino que comprende cómo cada decisión afecta al sistema completo.",
    puntosClave: [
      "Pensamiento sistémico: ver el TODO, no sólo las partes aisladas",
      "Alinear el proyecto con los objetivos estratégicos de la organización",
      "Tomar decisiones considerando el ecosistema completo del proyecto",
      "Gestión proactiva de riesgos a través de todos los dominios",
      "Fomenta comunicación clara y consistente entre stakeholders",
    ],
    ejemplo:
      "Un proyecto de transformación digital en una empresa de manufactura. El PM con visión holística no solo implementa el software, sino que considera el impacto en los procesos operativos, la capacitación del personal, la cultura organizacional y los indicadores financieros simultáneamente.",
    tip: "Usa mapas mentales o diagramas de influencia al inicio del proyecto para visualizar todas las interdependencias. Pregúntate siempre: ¿Cómo impacta esta decisión en los demás dominios del proyecto?",
    dominios: ["Gobernanza", "Alcance", "Cronograma", "Finanzas", "Interesados", "Recursos", "Riesgos"],
  },
  {
    id: 2,
    titulo: "Enfocarse en el Valor",
    subtitulo: "Focus on Value",
    descripcion:
      "El valor es el indicador final de éxito del proyecto. Todo el trabajo debe orientarse a maximizar el retorno sobre la inversión, sea financiero o no financiero.",
    definicion:
      "Enfocarse en el Valor significa que cada actividad, entregable y decisión del proyecto debe contribuir al valor esperado por los interesados. El valor puede ser financiero, social, ambiental o estratégico.",
    puntosClave: [
      "Definir claramente el valor esperado al inicio del proyecto",
      "Priorizar entregables según su contribución al valor total",
      "Medir continuamente el progreso en términos de valor generado",
      "Eliminar actividades que no aporten valor al resultado final",
      "Alinear expectativas de valor con todos los stakeholders clave",
    ],
    ejemplo:
      "En un proyecto de desarrollo de software, en lugar de completar todas las funcionalidades planeadas, el equipo prioriza las características que generan el 80% del valor para el cliente, entregando versiones incrementales que permiten obtener retroalimentación temprana.",
    tip: "Establece un 'registro de valor' al inicio del proyecto. Para cada entregable, documenta explícitamente cómo contribuye al valor esperado. Revísalo en cada reunión de seguimiento.",
    dominios: ["Alcance", "Interesados", "Finanzas", "Gobernanza"],
  },
  {
    id: 3,
    titulo: "Calidad Integrada",
    subtitulo: "Embed Quality",
    descripcion:
      "La calidad no es un control al final: se integra en cada proceso y entregable desde el inicio del proyecto.",
    definicion:
      "La Calidad Integrada significa incorporar estándares de calidad en cada fase y proceso del proyecto, no como una verificación final sino como parte inherente del trabajo diario del equipo.",
    puntosClave: [
      "Definir criterios de aceptación claros desde el inicio",
      "Integrar revisiones de calidad en cada etapa del proceso",
      "Empoderar al equipo para identificar y corregir defectos temprano",
      "Aplicar mejora continua basada en lecciones aprendidas",
      "Documentar estándares de calidad accesibles para todo el equipo",
    ],
    ejemplo:
      "En construcción, en lugar de inspeccionar la calidad solo al final, cada subcontratista verifica su trabajo antes de pasar al siguiente. Las revisiones diarias identifican problemas cuando son económicos de corregir.",
    tip: "Implementa checklists de calidad al completar cada entregable. Celebra cuando el equipo identifica problemas temprano — es más barato corregirlos ahora que después.",
    dominios: ["Alcance", "Recursos", "Cronograma", "Riesgos"],
  },
  {
    id: 4,
    titulo: "Liderazgo Responsable",
    subtitulo: "Be an Accountable Leader",
    descripcion:
      "Los proyectos exigen un liderazgo efectivo y ético. El líder toma responsabilidad por los objetivos, decisiones y acciones del proyecto.",
    definicion:
      "El Liderazgo Responsable implica que el gerente de proyecto asume plena responsabilidad por los resultados, actúa con integridad, toma decisiones difíciles y crea un ambiente donde el equipo puede prosperar.",
    puntosClave: [
      "Asumir responsabilidad personal por los resultados del proyecto",
      "Actuar con transparencia y ética en todas las decisiones",
      "Empoderar al equipo y delegar con claridad",
      "Comunicar proactivamente problemas y riesgos a los stakeholders",
      "Servir como modelo de los valores del proyecto",
    ],
    ejemplo:
      "Cuando un proyecto se retrasa por decisiones del PM, el líder responsable comunica abiertamente la situación al patrocinador, presenta un plan de recuperación concreto y asume públicamente la responsabilidad ante el equipo.",
    tip: "Practica el 'liderazgo sin excusas': cuando algo sale mal, pregúntate primero qué podrías haber hecho diferente. Esta mentalidad crea cultura de responsabilidad en todo el equipo.",
    dominios: ["Gobernanza", "Interesados", "Recursos", "Riesgos"],
  },
  {
    id: 5,
    titulo: "Cultura de Sostenibilidad",
    subtitulo: "Integrate Sustainability",
    descripcion:
      "Integrar la sostenibilidad en todas las áreas del proyecto: considerando personas, planeta, sociedad y valor económico (Triple Bottom Line).",
    definicion:
      "La Cultura de Sostenibilidad en gestión de proyectos significa tomar decisiones que no solo sean económicamente viables, sino que también consideren el impacto social y ambiental a largo plazo.",
    puntosClave: [
      "Evaluar el impacto ambiental de las decisiones del proyecto",
      "Considerar el bienestar del equipo como factor de sostenibilidad",
      "Medir el impacto social del proyecto en las comunidades afectadas",
      "Buscar soluciones que perduren más allá del cierre del proyecto",
      "Documentar prácticas sostenibles para futuros proyectos",
    ],
    ejemplo:
      "Un proyecto de construcción de oficinas implementa paneles solares, sistemas de recolección de agua lluvia y usa materiales locales. Además, el cronograma evita trabajo nocturno para proteger la vida personal del equipo.",
    tip: "Agrega una columna de 'impacto sostenible' a tu registro de decisiones. Para cada decisión importante, documenta brevemente su efecto en personas, planeta y prosperidad económica.",
    dominios: ["Gobernanza", "Recursos", "Interesados", "Finanzas", "Riesgos"],
  },
  {
    id: 6,
    titulo: "Cultura Empoderada",
    subtitulo: "Build an Empowered Culture",
    descripcion:
      "El entorno del proyecto debe promover confianza mutua, claridad de roles y colaboración, generando efectos sinérgicos entre los miembros del equipo.",
    definicion:
      "Construir una Cultura Empoderada significa crear un ambiente donde cada miembro del equipo tiene claridad sobre su rol, se siente seguro para proponer ideas y asumir responsabilidades, y colabora efectivamente hacia objetivos comunes.",
    puntosClave: [
      "Definir roles y responsabilidades con claridad desde el inicio",
      "Crear espacios seguros para que el equipo exprese ideas y preocupaciones",
      "Celebrar logros individuales y colectivos consistentemente",
      "Resolver conflictos de forma constructiva y transparente",
      "Fomentar el aprendizaje continuo y la experimentación segura",
    ],
    ejemplo:
      "El PM realiza retrospectivas semanales donde el equipo identifica mejoras al proceso sin temor a represalias. Cada miembro rota como facilitador, desarrollando liderazgo distribuido y compromiso con los resultados.",
    tip: "Implementa 'acuerdos de equipo' al inicio del proyecto: normas co-creadas sobre cómo trabajarán juntos. Cuando el equipo diseña sus propias reglas, las cumple con mayor compromiso.",
    dominios: ["Recursos", "Interesados", "Gobernanza", "Alcance"],
  },
];

const TABS = ["Definición", "Puntos Clave", "Ejemplo", "Tip"];

export default function VisionHolistica({ principioId = 1, onBack, onBackToSeccion1 }) {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("Puntos Clave");
  const [visible, setVisible] = useState(false);
  const [contentKey, setContentKey] = useState(0);

  const principio = PRINCIPIOS_DATA.find((p) => p.id === principioId) || PRINCIPIOS_DATA[0];

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 40);
    return () => clearTimeout(t);
  }, []);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setContentKey((k) => k + 1);
  };

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
          <div style={{ fontSize: "10px", fontWeight: 400, opacity: 0.6, marginTop: "1px" }}>
            Octava Edición
          </div>
        </div>

        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: "17px", fontWeight: 700, letterSpacing: "-0.01em" }}>
            El ADN de la gestión de proyectos de valor
          </div>
          <div style={{ fontSize: "11px", opacity: 0.5, marginTop: "2px", letterSpacing: "0.07em" }}>
            PMBOK 8 &nbsp;–&nbsp; PMI 2025 &nbsp;–&nbsp; GUIA INTERACTIVA
          </div>
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
      <div
        style={{
          padding: "28px 48px 48px",
          maxWidth: "1100px",
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
            color: "rgba(180,200,240,0.5)",
            marginBottom: "22px",
            display: "flex",
            alignItems: "center",
            gap: "6px",
          }}
        >
          <span style={{ cursor: "pointer" }} onClick={onBack}>Inicio</span>
          <span style={{ opacity: 0.4 }}>/</span>
          <span style={{ cursor: "pointer" }} onClick={onBackToSeccion1}>Sección 1</span>
          <span style={{ opacity: 0.4 }}>/</span>
          <span style={{ color: "rgba(220,230,255,0.9)", fontWeight: 600 }}>
            {principio.titulo}
          </span>
        </div>

        {/* ── HERO CARD ── */}
        <div
          style={{
            background: "rgba(255,255,255,0.04)",
            border: "1.5px solid rgba(100,140,220,0.25)",
            borderRadius: "14px",
            padding: "28px 32px",
            marginBottom: "24px",
          }}
        >
          <div
            style={{
              color: "#5a8aff",
              fontSize: "13px",
              fontWeight: 600,
              letterSpacing: "0.03em",
              marginBottom: "8px",
            }}
          >
            Principio {principio.id}
          </div>
          <h1
            style={{
              fontSize: "clamp(26px, 3.5vw, 42px)",
              fontWeight: 700,
              margin: "0 0 8px",
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
            }}
          >
            {principio.titulo}
          </h1>
          <div
            style={{
              color: "rgba(170,190,235,0.6)",
              fontSize: "13px",
              fontStyle: "italic",
              marginBottom: "12px",
            }}
          >
            {principio.subtitulo}
          </div>
          <div
            style={{
              color: "rgba(210,225,255,0.78)",
              fontSize: "15px",
              lineHeight: 1.65,
            }}
          >
            {principio.descripcion}
          </div>
        </div>

        {/* ── TABS ── */}
        <div
          style={{
            display: "flex",
            gap: "12px",
            marginBottom: "20px",
            flexWrap: "wrap",
          }}
        >
          {TABS.map((tab) => {
            const isActive = activeTab === tab;
            return (
              <button
                key={tab}
                onClick={() => handleTabChange(tab)}
                style={{
                  flex: "1 1 120px",
                  padding: "14px 20px",
                  borderRadius: "10px",
                  border: "1.5px solid rgba(100,140,220,0.25)",
                  background: isActive
                    ? "rgba(90,138,255,0.22)"
                    : "rgba(255,255,255,0.04)",
                  color: isActive ? "#fff" : "rgba(200,215,255,0.65)",
                  fontSize: "14px",
                  fontWeight: isActive ? 700 : 500,
                  cursor: "pointer",
                  transition: "all 0.18s ease",
                  letterSpacing: "0.01em",
                  outline: "none",
                  boxShadow: isActive ? "0 2px 16px rgba(90,138,255,0.18)" : "none",
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.background = "rgba(255,255,255,0.07)";
                    e.currentTarget.style.color = "#fff";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.background = "rgba(255,255,255,0.04)";
                    e.currentTarget.style.color = "rgba(200,215,255,0.65)";
                  }
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
          style={{
            background: "rgba(255,255,255,0.04)",
            border: "1.5px solid rgba(100,140,220,0.2)",
            borderRadius: "14px",
            padding: "28px 32px",
            animation: "fadeSlideIn 0.3s ease forwards",
          }}
        >
          <style>{`
            @keyframes fadeSlideIn {
              from { opacity: 0; transform: translateY(8px); }
              to   { opacity: 1; transform: translateY(0); }
            }
          `}</style>

          {/* DEFINICIÓN */}
          {activeTab === "Definición" && (
            <div>
              <div
                style={{
                  color: "rgba(160,185,230,0.6)",
                  fontSize: "12px",
                  fontWeight: 600,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  marginBottom: "14px",
                }}
              >
                Definición
              </div>
              <p
                style={{
                  color: "rgba(210,225,255,0.82)",
                  fontSize: "15px",
                  lineHeight: 1.75,
                  margin: 0,
                }}
              >
                {principio.definicion}
              </p>
            </div>
          )}

          {/* PUNTOS CLAVE */}
          {activeTab === "Puntos Clave" && (
            <div>
              <div
                style={{
                  color: "rgba(160,185,230,0.6)",
                  fontSize: "12px",
                  fontWeight: 600,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  marginBottom: "16px",
                }}
              >
                Puntos Clave
              </div>
              <ul style={{ margin: 0, padding: "0 0 0 18px" }}>
                {principio.puntosClave.map((punto, i) => (
                  <li
                    key={i}
                    style={{
                      color: "rgba(210,225,255,0.82)",
                      fontSize: "14.5px",
                      lineHeight: 1.65,
                      marginBottom: "10px",
                      paddingLeft: "4px",
                    }}
                  >
                    {punto}
                  </li>
                ))}
              </ul>

              {/* Dominios Relacionados */}
              <div style={{ marginTop: "28px" }}>
                <div
                  style={{
                    color: "rgba(160,185,230,0.6)",
                    fontSize: "12px",
                    fontWeight: 600,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    marginBottom: "14px",
                  }}
                >
                  Dominios Relacionados
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                  {principio.dominios.map((dom) => (
                    <span
                      key={dom}
                      style={{
                        color: "rgba(200,218,255,0.8)",
                        fontSize: "13.5px",
                        padding: "4px 14px",
                        borderRadius: "20px",
                        background: "rgba(90,138,255,0.1)",
                        border: "1px solid rgba(90,138,255,0.2)",
                      }}
                    >
                      {dom}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* EJEMPLO */}
          {activeTab === "Ejemplo" && (
            <div>
              <div
                style={{
                  color: "rgba(160,185,230,0.6)",
                  fontSize: "12px",
                  fontWeight: 600,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  marginBottom: "14px",
                }}
              >
                Ejemplo Práctico
              </div>
              <div
                style={{
                  borderLeft: "3px solid rgba(90,138,255,0.5)",
                  paddingLeft: "20px",
                }}
              >
                <p
                  style={{
                    color: "rgba(210,225,255,0.82)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    margin: 0,
                  }}
                >
                  {principio.ejemplo}
                </p>
              </div>
            </div>
          )}

          {/* TIP */}
          {activeTab === "Tip" && (
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  marginBottom: "16px",
                }}
              >
                <div
                  style={{
                    background: "rgba(90,138,255,0.18)",
                    border: "1px solid rgba(90,138,255,0.35)",
                    borderRadius: "8px",
                    padding: "6px 10px",
                    fontSize: "18px",
                    lineHeight: 1,
                  }}
                >
                  💡
                </div>
                <div
                  style={{
                    color: "rgba(160,185,230,0.6)",
                    fontSize: "12px",
                    fontWeight: 600,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                  }}
                >
                  Consejo Práctico
                </div>
              </div>
              <p
                style={{
                  color: "rgba(210,225,255,0.82)",
                  fontSize: "15px",
                  lineHeight: 1.75,
                  margin: 0,
                  background: "rgba(90,138,255,0.06)",
                  borderRadius: "10px",
                  padding: "18px 20px",
                  border: "1px solid rgba(90,138,255,0.15)",
                }}
              >
                {principio.tip}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
