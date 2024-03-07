import React, { createContext, useContext, useState } from 'react'

const Contexto = createContext()

const ContextoUsuario = ({children}) => {

    const [contagem, setContagem] = useState(0)

  return (
    <Contexto.Provider value={{contagem, setContagem}}>
        {children}
    </Contexto.Provider>
  )
}

export const useContextoUsuario = () => useContext(Contexto)

export default ContextoUsuario