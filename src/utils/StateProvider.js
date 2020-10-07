import React,{ createContext, useContext, useReducer } from "react";

// this is the data Layer
export const StateContext = createContext();

// this is the provider
export const StateProvider = ({reducer, initialState, children}) => {
    return <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
}
export const useStateValue = () => useContext(StateContext)