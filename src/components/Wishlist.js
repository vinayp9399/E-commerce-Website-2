import React from 'react'
import { WishlistItems } from './WishlistItems'

export function Wishlist({wishlists}) {


    return (
        <>
        <div style={{maxWidth: "1140px", marginLeft:"100px", marginTop:"70px"}}>
           {wishlists.map((wish1)=>{return<WishlistItems name={wish1.name} image={wish1.image} price={wish1.price}/>})}
        </div>
        </>
    )
}
