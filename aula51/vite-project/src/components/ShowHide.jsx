import React, { useState } from 'react'
import Evento from './Evento'

const ShowHide = () => {

    const [show, setShow] = useState(false)

  return (
    <div>
        <button onClick={() => setShow(!show)}>Show/Hide</button>
        {show && <Evento/>}
    </div>
  )
}

export default ShowHide