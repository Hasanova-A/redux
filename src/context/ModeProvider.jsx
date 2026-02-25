import { createContext, useEffect, useState } from "react"

export const ModeContext = createContext()
export const ModeProvider=({children})=>{
    const [mode, setMode] = useState('dark')
    useEffect(() =>{
        setMode(localStorage.getItem('mode'));
    }, [mode])

    return <ModeContext.Provider value={[mode, setMode]}>{children}</ModeContext.Provider>

}