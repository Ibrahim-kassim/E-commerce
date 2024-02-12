import React, { createContext, useState } from 'react'
import all_product from "../assets/all_product"


export const shopContext = createContext(null)
// const getDefaultCart = () =>{
//     let cart = {};
//     for (let i = 0; i < all_product.length+1; i++) {
//         cart[i] = 0;
//     }
//     return cart
    
// }
const getDefaultCart = () => {
    return Array.from({ length: all_product.length +1  }).fill(0);
}




const shopContextProvider = (props)=>{
    const [cartItem,setCartItem] = useState(getDefaultCart())

    
    const addToCart=(itemId)=>{
        const result = window.confirm("do you want to add to cart?")
        if(result){
            setCartItem((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        }
      
     
    }
    const removeFromCart=(itemId)=>{
        setCartItem((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }
    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItem) {
            if (cartItem.hasOwnProperty(item) && cartItem[item] > 0) {
                let itemInfo = all_product.find((product) => product.id === Number(item));
                if (itemInfo && itemInfo.new_price) {
                    totalAmount += itemInfo.new_price * cartItem[item];
                }
            }
        }
        return totalAmount;
    };
    
    const getTotalCartItems = () =>{
        let totalItem = 0 ;
        for(const item in cartItem){
            if(cartItem[item]>0){
                totalItem += cartItem[item]
            }
        }
        return totalItem
    }
    const contextValue = {all_product,cartItem,removeFromCart,addToCart,getTotalCartAmount,getTotalCartItems}
    return (
        <shopContext.Provider value={contextValue}>
            {props.children}
        </shopContext.Provider>
    )

}
export default shopContextProvider