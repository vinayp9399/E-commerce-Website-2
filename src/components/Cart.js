import React from 'react'
import { CartItems } from './CartItems'

export function Cart({CartProducts}) {
    

    return (
        <>
        <div style={{maxWidth: "1140px", marginLeft:"100px", marginTop:"70px"}}>
           {CartProducts.map((cart1)=>{return<CartItems name={cart1.name} image={cart1.image} price={cart1.price}/>})}
        </div>    
        </>
    )
}
