import React from 'react'
import { WishlistItems } from './WishlistItems'

export function Wishlist({wishlists}) {


    return (
        <>
           {wishlists.map((wish1)=>{return<WishlistItems name={wish1.name} image={wish1.image} price={wish1.price}/>})}
        </>
    )
}
