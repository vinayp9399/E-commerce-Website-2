import React from 'react'
import { WishlistItems } from './WishlistItems'

export function Wishlist(props) {
    let wishlists = [];
    
    let a ={name:props.name1,image:props.image1,price:props.price1}
    wishlists.push(a); 


    return (
        <>
           {wishlists.map((wish1)=>{return<WishlistItems name={wish1.name} image={wish1.image} price={wish1.price}/>})}
        </>
    )
}
