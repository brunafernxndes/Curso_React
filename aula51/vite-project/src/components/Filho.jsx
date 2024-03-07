import React, {memo, useMemo} from 'react'

const Filho = ({valor, valor2}) => {

    console.log("Renderizou filho")

    //uma função computacionalmente pesada, que só precisa ser executada se valor for alterado.
    //não precisa ser executada se valor2 for alterado.
    useMemo(() => {
        console.log("Função computacionalmente pesada")
    },[valor])

  return (
    <div>Filho</div>
  )
}

export default memo(Filho)