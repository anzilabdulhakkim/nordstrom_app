import { createContext, useState } from "react";

export const CartContext = createContext()


export const SignUpConetextProvide = ({ children }) => {
   
    const [bagState, setBagState] = useState(false)
   

    return <CartContext.Provider value={{ userLogin, handleLogin, handleMiddle }}>
        {children}
    </CartContext.Provider>
}