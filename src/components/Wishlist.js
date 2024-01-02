import React from 'react'
import { WishlistItems } from './WishlistItems'

export function Wishlist({wishlists, setwishlist, setcart, countcartup, countwishup, wishitemDelete }) {


    return (
        <>
        <div style={{maxWidth: "1140px", marginLeft:"100px", marginTop:"50px"}}>
           {wishlists.map((wish1)=>{return<WishlistItems name={wish1.name} image={wish1.image} price={wish1.price} setwishlist={setwishlist} setcart={setcart} countcartup={countcartup} countwishup={countwishup} wishitemDelete={wishitemDelete}/>})}
        </div>
        </>
    )
}
