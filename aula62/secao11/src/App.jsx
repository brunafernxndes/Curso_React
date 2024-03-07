import React, { useEffect, useState } from 'react';
import axios from 'axios'

const App = () => {
  
  const [users, setUsers] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(false)

  const [contagem, setContagem] = useState(0)

  useEffect(() => {
    const controller = new AbortController()
    setIsLoading(true)
    setTimeout(() => {
      console.log("A requisição foi enviada")
      setError(false)
      axios.get("https://jsonplaceholder.typicode.com/users", {
        signal: controller.signal
      }).then(response => {
      setUsers(response.data)
      console.log("A requisição retornou")
      setIsLoading(false)
      }).catch(() => {
        setIsLoading(false)
        setError(true)
      })
    },500)

    return () => {
      controller.abort()
    }

  },[])

  return (
    <div>
      <h2>{isLoading && <p>loading...</p>}</h2>
    {
      users.map(item => {
        return <h3 key={item.id}>{item.name}</h3>
      })
    }
    <h2>{error && <p>Algo de errado aconteceu</p>}</h2>
    <button onClick={() => setContagem(contagem + 1)}>contagem {contagem}</button>
    </div>
  );
};

export default App
