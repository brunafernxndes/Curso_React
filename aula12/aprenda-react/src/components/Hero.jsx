import React from 'react'
//import H4 from './H4'
//import Qualquer1, {H2, H3} from './H1'

const Hero = (props) => {

  const {nome, personagem} = props

  return (
      <div style={{ marginLeft: '500px', textAlign: 'center' }}>
      <h1>{nome}</h1>
      <h3>{personagem}</h3>
    </div>
  )
}

export default Hero
