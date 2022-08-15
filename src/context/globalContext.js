import { createContext, useReducer } from "react";

import AppReducer from "./AppReducer";

const initialState = {
    transaction: [
        // {id:1, text:'salary', amount: 200},
        // {id:2, text:'flowers', amount: -20},
        // {id:3, text:'bill eletriques', amount: -100},
        // {id:4, text:'book', amount: -70},
    ],
}


export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({children}) =>{

    const [state, dispatch] = useReducer(AppReducer, initialState);


    function deleteTrasaction(id){
        dispatch({
            type: 'DELETE_TRASACTION',
            payload: id,
        })
    }

    function AddTransaction(transaction){
      dispatch({
         type: 'ADD_TRANSACTION',
         payload: transaction
      })

    }

    return(
        <GlobalContext.Provider
        value={{transaction: state.transaction, deleteTrasaction, AddTransaction}}
        >
            {children}
        </GlobalContext.Provider>
    )
}