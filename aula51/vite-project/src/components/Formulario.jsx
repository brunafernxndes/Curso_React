import React, { useRef } from 'react'

const Formulario = () => {

  const referencia = useRef()

  const handleClick = () => {
      console.log(`Valor do input é ${referencia.current.value}`)
  }

  return (
    <div>
        <input ref={referencia} />
        <button onClick={handleClick}>Dar foco</button>
    </div>
  )
}

export default Formulario