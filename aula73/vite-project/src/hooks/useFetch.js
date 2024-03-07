import { useReducer, useEffect } from "react"

const fetchInitialState = {
    data: null,
    isLoading: false,
    error: null
};
  
const fetchReducer = (state, action) => {
    if (action.type === 'START') {
        console.log("Start")
        return {
        data: null,
        isLoading: true,
        error: null
        }
    }
    if (action.type === 'SUCCESS') {
        console.log("Success")
        return {
        data: action.payload,
        isLoading: false,
        error: null
        }
    }
    if (action.type === 'ERROR') {
        console.log("Error")
        return {
        data: null,
        isLoading: false,
        error: action.payload
        }
    }
    return state;
};

export const useFetch = (url) => {
    const [state, dispatch] = useReducer(fetchReducer, fetchInitialState)

    useEffect(() => {
        fetchData(url)
    },[]);

    async function fetchData(url) {
        dispatch({type: "START"})
        try {
        const retorno = await fetch(url)
        if (!retorno.ok) {
            throw new Error("Houve um erro")
        }
        const dados = await retorno.json()
        dispatch({type: "SUCCESS", payload: dados})
        } catch (error) {
        dispatch({type: "Error", payload: error})
        }
    }
    return state;
};