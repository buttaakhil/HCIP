import { createContext, useState } from 'react'

export const AppContext=createContext();

const ContextProvider=(props)=>{
    const [cost,setCost]=useState(0);
    return(
        <AppContext.Provider value={{cost,setCost}}>
            {props.children}
        </AppContext.Provider>
    )
}

export default ContextProvider;