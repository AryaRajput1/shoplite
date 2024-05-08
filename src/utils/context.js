import { createContext } from "react";

const Context = createContext()

export const AppContext = ({children})=>{
    return <Context.Provider>
        {children}
    </Context.Provider>
}

export default Context;