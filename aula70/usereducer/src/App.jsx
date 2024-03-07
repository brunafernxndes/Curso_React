import React, { useReducer, useRef } from 'react'
import {reducer, initialState} from './store/reducer'
import { INCREMENTA, DECREMENTA } from './store/action'

const App = () => {

  const [state, dispatch] = useReducer(reducer, initialState)

  const meuInput = useRef()

  const handleClickIncrementar = () => {
    const valor = Number(meuInput.current.value)
    dispatch({type: INCREMENTA, payload: {valor}})
  }

  const handleClickDecrementar = () => {
    const valor = Number(meuInput.current.value)
    dispatch({type: DECREMENTA, payload: {valor}})
  }

  return (
    <div>
      <p>Contagem: {state.contador}</p>
      <input ref={meuInput} />
      <button onClick={handleClickIncrementar}>Incrementar</button>
      <button onClick={handleClickDecrementar}>Decrementar</button>
    </div>
  )
}

export default App
