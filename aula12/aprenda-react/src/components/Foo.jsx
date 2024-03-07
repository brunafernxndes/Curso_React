import React from 'react'
//import classes from './Foo.module.css'
import styles from 'styled-components'

/*const Foo = () => {
  return (
    <div className={classes.color}>Foo</div>
  )
}

export default Foo*/

const Foo = () => {
  return (
    <Div>Foo</Div>
  )
}

  const Div = styles.div`
  color: red;
  text-align: center;
  margin-bottom: 5rem;`

export default Foo