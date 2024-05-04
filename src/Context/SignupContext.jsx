import { createContext, useState } from "react";

export const SignUpContext = createContext()


export const SignUpContextProvide =({children})=>{
    const [userLogin, setUserLogin] = useState(false)
    const handleLogin=()=>{
        setUserLogin(true)
    }
     const handleMiddle=()=>{
         setUserLogin(false)
   }
    
    return <SignUpContext.Provider value={{ userLogin, handleLogin, handleMiddle }}>
    {children}
</SignUpContext.Provider>
}