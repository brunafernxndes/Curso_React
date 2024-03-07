import React, { useState } from 'react'

const Form = () => {
    
    const [nome, setNome] = useState('')
    const [sobrenome, setSobrenome] = useState('')
    const [idade, setIdade] = useState(0)

    /*const handleChange = (event) => {
        setNome(event.target.value)
        console.log(nome);
    }*/

    //const [aceito, setAceito] = useState(false)

    const [estado, setEstado] = useState({
        nome: '',
        sobrenome: '',
        idade: 0,
        aceito: false,
        sexo: 'masculino',
        cidade: ''
    })

    const handleChange = (event) => {
        setEstado({
            ...estado,
            [event.target.name]:event.target.value
        })
    }

    const handleSubimit = () => {
        event.preventDefault()
        console.log(estado.nome + "" + estado.sobrenome + "" + estado.idade + "" + estado.aceito + "" + estado.sexo + "" + estado.cidade);
    };

    const handleChangeCB = () => {
        setEstado({
            ...estado,
            aceito: !estado.aceito
        })
    }

    const handleChangeRadio = (event) => {
        setEstado({
            ...estado,
            sexo: event.target.value
        })
    }

    const handleChangeSelect = (event) => {
        setEstado({
            ...estado,
            cidade: event.target.value
        })
    }

    return (
        <form onSubmit={handleSubimit}>
            <div>
                <input type="text" onChange={handleChange} value={estado.nome} name="nome"/>
            </div>
            <div>
                <input type="text" onChange={handleChange} value={estado.sobrenome} name="sobrenome"/>
            </div>
            <div>
                <input type="text" onChange={handleChange} value={estado.idade} name="idade"/>
            </div>
            <div>
                <input type="checkbox" onChange={handleChangeCB} checked={estado.aceito}/>
            </div>
            <div>
                <input type="radio" name="sexo" onChange={handleChangeRadio} value="masculino" checked={estado.sexo === "masculino"} /> Masculino
                <input type="radio" name="sexo" onChange={handleChangeRadio} value="feminino" checked={estado.sexo === "feminino"} /> Feminino
            </div>
            <div>
                <select name="cidade" onChange={handleChangeSelect}>
                    <option value="Rio de Janeiro">Rio de Janeiro</option>
                    <option value="João Pessoa">João Pessoa</option>
                    <option value="Salvador">Salvador</option>
                </select>
            </div>
            <button>Clique me</button>
        </form>
    )
}

export default Form