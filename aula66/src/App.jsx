import React from 'react'
import Filho from './components/Filho'
import ContextoUsuario from './store/ContextoUsuario'

const App = () => {

  console.log("Componente App")

  return (
    <ContextoUsuario>
      <Filho/>
    </ContextoUsuario>
  )
}

export default App