import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './scss/_app.scss'
import { NubesSonrisas } from './NubesSonrisas'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <NubesSonrisas />
  </StrictMode>
)
