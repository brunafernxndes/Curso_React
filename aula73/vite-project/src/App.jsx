import React from 'react'
import { useEffect } from 'react'
import { useReducer } from 'react'
import Filho1 from './components/Filho1'
import Filho2 from './components/Filho2'

const App = () => {

  return (
    <div>
      <Filho1 />
      <Filho2 />
    </div>
  )
}

export default App
