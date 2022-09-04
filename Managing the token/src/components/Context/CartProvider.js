import React,{ useState } from "react";
import CartContext from "./cart-contetxt";
const CartProvider = props =>{

    let [isCreds, setIsCreds] = useState([]);
    const addCredsHandler = (credential)=>{
        setIsCreds([...isCreds,credential])
    }

    const logOutHandler  = ()=>{
        setIsCreds([])
    }
    const checkHandler = ()=>{
        if(isCreds.length>0){
            return true
        }else{
            return false
        }
    }

    const cartContext = {
        creds:isCreds,
        addCreds:addCredsHandler,
        logOut:logOutHandler,
        check:checkHandler

    };


    return(
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>

    );

};

export default CartProvider;