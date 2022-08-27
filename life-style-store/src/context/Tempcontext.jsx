import { createContext, useState } from "react";


export const AuthContext = createContext()
export const AuthContextprovider = ({ children }) => {
    const [isAuth, setisAuth] = useState(false)
    function toggleAuth() { 
        setisAuth(false)
        // setisAuth((p) => {
        //     return !p
        // })
    }
    return <AuthContext.Provider value ={{isAuth,toggleAuth}}>{children}</AuthContext.Provider>
}