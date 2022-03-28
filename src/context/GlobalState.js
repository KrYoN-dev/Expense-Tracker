import React,{ useReducer, createContext } from 'react';
import AppReducer from './AppReducer';

//Initial state of the global state

const initialState = {
    transactions:[
    ]
}

// Create a context for the global state
 export const GlobalContext = createContext(initialState)

 //Provider component for the global state
    export const GlobalProvider = ({children}) => {
        const [state, dispatch] = useReducer(AppReducer, initialState); //useReducer is a hook that allows us to use state management in React)

    //actions for the global state
    function deleteTransaction(id){
        dispatch({
            type:'DELETE_TRANSACTION',
            payload:id
        })
    }
    function addTransaction(transaction){
        dispatch({
            type:'ADD_TRANSACTION',
            payload:transaction
        });
    }

        return(
        <GlobalContext.Provider value={{
            transactions: state.transactions,
            deleteTransaction,
            addTransaction
        }}>
        {children}

        </GlobalContext.Provider>)
    }