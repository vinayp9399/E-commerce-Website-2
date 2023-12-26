import React from "react";

export function ProductDescription(props) {

    return (
        <>
        <img className="Desc_Image shadow p-3 mb-5 bg-white rounded" src={props.image} alt=""/>
        <div className="product_Desc">
        <h1>{props.name}</h1>
        <h4 style={{color:"green"}}>Rs {props.price}</h4>
        <p>{props.rate}</p>
        <p>{props.description}</p>
        <a className="btn btn-primary m-2">Add to Cart</a>
        <a onClick={()=>{props.setwishlist(props.name,props.image,props.price)}}><img className='image-icon2' src="https://k7.pngheat.com/preview/95/220/943/heart-red-icon-symbol-red-heart-transparent-png-clip-art.jpg" alt="" /></a>
        </div>
        </>
    )
}
