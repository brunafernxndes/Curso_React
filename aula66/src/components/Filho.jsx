import React from 'react'
import Neto from './Neto'
import { useContextoUsuario } from '../store/ContextoUsuario'

const Filho = () => {

    console.log("Componente Filho")

    const {contagem, setContagem} = useContextoUsuario()

  return (
    <div>
        <p>Contagem: {contagem}</p>
        <Neto/>
    </div>
  )
}

export default Filho