import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './index.css'

import PMBOKDiagram from "./App"
import Seccion1Principios from "./Seccion1Principios"
import DetalleVisionHolistica from './VisionHolistica'
import DetalleEnfocarseEnValor from './EnfoqueValor'
import DetalleCalidadIntegrada from './CalidadIntegrada'
import DetalleLiderazgoResponsable from './LiderazgoResponsable'
import DetalleCulturaDeSostenibilidad from './CulturaSostenibilidad'
import DetalleCulturaEmpoderada from './CulturaEmpoderada'

import Seccion2CicloDeVida from './Seccion2CicloDeVida'

import Seccion3AreasDeEnfoque from './Seccion3AreasDeEnfoque'
import DetalleInicio from './Inicio'
import DetallePlaneacion from './Planeacion'
import DetalleEjecucion from './Ejecucion'
import DetalleMonitoreoYControl from './MonitoreoYControl'
import DetalleCierre from './Cierre'

import Seccion4Dominios from './Seccion4DominiosDeDesempeño'
import DetalleGobernanza from './Governanza'
import DetalleAlcance from './Alcance'
import DetalleCronograma from './Cronograma'
import DetalleFinanzas from './Finanzas'
import DetalleRecursos from './Recursos'
import DetalleRiesgos from './Riesgos'
import DetalleInteresados from './Interesados'

import Seccion5Procesos from './Seccion5Procesos'
import Seccion6EntradasYSalidas from './Seccion6EntradasYSalidas'
import Seccion7HerramientasYTecnicas from './Seccion7HerramientasYTecnicas'
import Seccion8Glosario from './Seccion8Glosario'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PMBOKDiagram />} />
        <Route path="/principios" element={<Seccion1Principios />} />
        <Route path="/principios/vision-holistica" element={<DetalleVisionHolistica />} />
        <Route path="/principios/enfocarse-en-el-valor" element={<DetalleEnfocarseEnValor />} />
        <Route path="/principios/calidad-integrada" element={<DetalleCalidadIntegrada />} />
        <Route path="/principios/liderazgo-responsable" element={<DetalleLiderazgoResponsable />} />
        <Route path="/principios/cultura-de-sostenibilidad" element={<DetalleCulturaDeSostenibilidad />} />
        <Route path="/principios/cultura-empoderada" element={<DetalleCulturaEmpoderada />} />

        <Route path="/ciclo-de-vida" element={<Seccion2CicloDeVida />} />

        <Route path="/areas-de-enfoque" element={<Seccion3AreasDeEnfoque />} />
        <Route path="/areas-de-enfoque/inicio" element={<DetalleInicio />} />
        <Route path="/areas-de-enfoque/planeacion" element={<DetallePlaneacion />} />
        <Route path="/areas-de-enfoque/ejecucion" element={<DetalleEjecucion />} />
        <Route path="/areas-de-enfoque/monitoreo-y-control" element={<DetalleMonitoreoYControl />} />
        <Route path="/areas-de-enfoque/cierre" element={<DetalleCierre />} />
        

        <Route path="/dominios-de-desempeño" element={<Seccion4Dominios />} />
        <Route path="/dominios-de-desempeño/governanza" element={<DetalleGobernanza />} />
        <Route path="/dominios-de-desempeño/alcance" element={<DetalleAlcance />} />
        <Route path="/areas-de-enfoque/cronograma" element={<DetalleCronograma />} />
        <Route path="/areas-de-enfoque/finanzas" element={<DetalleFinanzas />} />
        <Route path="/areas-de-enfoque/recursos" element={<DetalleRecursos />} />
        <Route path="/areas-de-enfoque/riesgos" element={<DetalleRiesgos />} />
        <Route path="/areas-de-enfoque/interesados" element={<DetalleInteresados />} />


        <Route path="/procesos" element={<Seccion5Procesos />} />
        <Route path="/entradas-y-salidas" element={<Seccion6EntradasYSalidas />} />
        <Route path="/herramientas-y-tecnicas" element={<Seccion7HerramientasYTecnicas />} />
        <Route path="/glosario-y-conceptos-claves" element={<Seccion8Glosario />} />
        
      </Routes>
    </BrowserRouter>
  </StrictMode>
)