import { createContext } from "react";

export const CartContext = createContext({
    items: [],
    addItemToCart: () => {},


})


//intial value for this context - avialble to the conponents
    // this value can be anything
    // then we need to porvide this to our componenets 
    // so that they have access to it
    
    // well you first create a context value : then you take that context value and wrap the callbacks for the components you want to use this state/context in that
    
    // we create a context and then  store it in a variable
    // it will create a react object, wich contains react context

    //now we export this created Context 
    // we import it in the component where the callback for the intended  context is used then we
    