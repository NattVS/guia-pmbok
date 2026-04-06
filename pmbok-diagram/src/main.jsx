import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './index.css'

import PMBOKDiagram from "./App"
import Seccion1Principios from "./Seccion1Principios"
import VisionHolistica from './VisionHolistica'

import Seccion2CicloDeVida from './Seccion2CicloDeVida'

import Seccion3AreasDeEnfoque from './Seccion3AreasDeEnfoque'

import Seccion4Dominios from './Seccion4DominiosDeDesempeño'

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
        <Route path="/principios/vision-holistica" element={<VisionHolistica />} />

        <Route path="/ciclo-de-vida" element={<Seccion2CicloDeVida />} />

        <Route path="/areas-de-enfoque" element={<Seccion3AreasDeEnfoque />} />

        <Route path="/dominios-de-desempeño" element={<Seccion4Dominios />} />

        <Route path="/procesos" element={<Seccion5Procesos />} />
        <Route path="/entradas-y-salidas" element={<Seccion6EntradasYSalidas />} />
        <Route path="/herramientas-y-tecnicas" element={<Seccion7HerramientasYTecnicas />} />
        <Route path="/glosario-y-conceptos-claves" element={<Seccion8Glosario />} />
        
      </Routes>
    </BrowserRouter>
  </StrictMode>
)