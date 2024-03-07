import React from 'react'
import { useFetch } from '../hooks/useFetch'

const Filho1 = () => {

const {isLoading, error, data} = useFetch("https://jsonplaceholder.typicode.com/posts")
  return (
    <div>
        {isLoading && <p>Is loading...</p>}
        {error && <p>Houve um erro</p>}
        {data && <p>{data.length}</p>}
    </div>
  )
}

export default Filho1