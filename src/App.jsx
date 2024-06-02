import { useState } from 'react'
import { Toaster } from 'react-hot-toast'
import { Login } from './components/Login.jsx'
import Services from './components/Servicios.jsx'
import Ofertas from './components/Ofertas-services.jsx'
import './App.css'

function App() {
  return (
    <>
      <Ofertas />
      {/*<Services/> Para probar el de servicios*/}
      {/*<Ofertas/> Para probar el de ofertas*/}
    </>
  )
}

export default App
