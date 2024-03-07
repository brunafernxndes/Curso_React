import React, { useEffect } from 'react'

const Limpeza = () => {

    useEffect(() => {
        console.log("Conectou ao banco de dados...")

        return () => {
            console.log("Desconectou do banco de dados...")
        }
    },[])

  return (
    <div>Limpeza</div>
  )
}

export default Limpeza