import { INCREMENTA, DECREMENTA } from "./action";

export const reducer = (prevState, action) => {
    if (action.type === INCREMENTA) {
      return {
        contador: prevState.contador + action.payload.valor
      }
    }
    if (action.type === DECREMENTA) {
      return {
        contador: prevState.contador - action.payload.valor
      }
    }
    return prevState;
  }
  
export const initialState = {
    contador: 0
}