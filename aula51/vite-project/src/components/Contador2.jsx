import React, { useState, useMemo } from 'react'
import Filho from './Filho'

const Contador2 = () => {

    const [contagem, setContagem] = useState(0)
    const [contagem2, setContagem2] = useState(0)

    useMemo(() => {
        console.log("useMemo foi executado")
    },[contagem])

    console.log("Renderizou contador")

  return (
    <div>
        <button onClick={() => setContagem(contagem + 1)}>contagem {contagem}</button>
        <button onClick={() => setContagem2(contagem2 + 1)}>contagem2 {contagem2}</button>
        <Filho valor={contagem} />
    </div>
  )
}

export default Contador2