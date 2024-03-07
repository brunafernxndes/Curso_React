import React, { useEffect, useRef, useState } from 'react'

const Contador = () => {

  const referencia = useRef(10)
  const executa = useRef(false)
  console.log(referencia)

  const [contagem, setContagem] = useState(0)

  useEffect(() => {
    if (executa.current === false) {
        executa.current = true
    } else {
        console.log("Efeito")
    }
  })

    const handleClick = () => {
      referencia.current = 11
    }
  
  return (
    <div>
      <button onClick={() => setContagem(contagem + 1)}>Incrementa {contagem}</button>
      <button onClick={handleClick}>Altera referência</button>
    </div>
  )
}

export default Contador