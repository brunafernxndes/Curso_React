import React, { useEffect } from 'react'
//import Counter from './components/Counter'
//import ShowHide from './components/ShowHide'
//import Limpeza from './components/Limpeza'
//import Contador from './components/Contador'
//import Formulario from './components/Formulario'
//import Contador2 from './components/Contador2'

const App = () => {

  useEffect(() => {
    getData()
  },[])

  async function getData() {
    const retorno = await fetch("https://jsonplaceholder.typicode.com/users")
    const dados = await retorno.json()
    console.log(dados)
  }

  return (
    <div>App</div>
  )
}
//const App = () => {
//  return (
//    <div>
//      <Contador2 />
//    </div>
//  )
//}
//const App = () => {
//  return (
//    <div>
//      <Formulario />
//    </div>
//  )
//}
//const App = () => {
//  const [showLimpeza, setShowLimpeza] = useState(false)

//  return (
//    <div>
//      {showLimpeza && <Limpeza/>}
//      <button onClick={() => setShowLimpeza(!showLimpeza)}>Show/Hide Limpeza</button>
//    </div>
//  )
//}

//function App() {
//  return (
//    <div>
//      <ShowHide />
//    </div>
//  )
  //return (
  //  <div>
  //    <Counter />
  //  </div>
  //)
//}

export default App
