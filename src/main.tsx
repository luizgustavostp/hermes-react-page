import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './components/Header.tsx'
import Main from './components/Main.tsx'
import { ByFooter } from './components/ByFooter.tsx'
import Footer from './components/Footer.tsx'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Header />
    <Main />
    <ByFooter/>
    <Footer/>
    <h2 id='h2-rights'>Todos os direitos Reservados a Hermes soluction </h2>
  </StrictMode>,
)
