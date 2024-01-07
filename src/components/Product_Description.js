import React from "react";

export function ProductDescription(props) {

    return (
        <>
        <div>
        <img className="Desc_Image shadow p-3 mb-5 bg-white rounded" src={props.image} alt=""/>
        <div className="product_Desc">
        <h1>{props.name}</h1>
        <h4 style={{color:"green"}}>Rs {props.price}</h4>
        <h6>{props.rate} <img className="image-icon4" src="https://pixlok.com/wp-content/uploads/2021/07/Rating-SVG-Icon-s9fd.png" alt="" /></h6>
        <p>{props.description}</p>
        <a onClick={()=>{props.setcart(props.name,props.image,props.price); props.countcartup()}} className="btn btn-primary m-2">Add to Cart</a>
        <a onClick={()=>{props.setwishlist(props.name,props.image,props.price); props.countwishup()}}><img className='image-icon2' src="https://clipart-library.com/images_k/heart-symbol-transparent/heart-symbol-transparent-21.png" alt="" /></a>
        </div></div>
        </>
    )
}
