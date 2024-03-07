import React, { useEffect } from 'react'

const Evento = () => {
    useEffect(() => {

        //assincrona
        async function executa() {

        }
        executa()
        
        const clicou = () => {
            console.log("Clicou no documento!")
        }

        document.addEventListener('click', clicou)

        return () => {
            document.removeEventListener('click', clicou)
        }
    }, [])

  return <div>Evento</div>
}

export default Evento