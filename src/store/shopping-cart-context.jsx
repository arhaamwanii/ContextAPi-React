import { createContext } from "react";

export const CartContext = createContext({
    items: []
})

//intial value for this context - avialble to the conponents
    // this value can be anything
    // then we need to porvide this to our componenets 
    // so that they have access to it
    