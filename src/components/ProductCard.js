import React from 'react'

export function ProductCard(props) {
    
    const cartFunction=()=>{
        props.setcart(props.title,props.image,props.price);
        props.countcartup();
    }

    const wishFunction=()=>{
        props.setwishlist(props.title,props.image,props.price);
        props.countwishup();
    }

    return (
        <>
          <div className="card shadow" style={{width: "18rem", marginRight:"10px", marginLeft:"10px", marginBottom:"10px"}}>
                <div className="card-img-top" style={{backgroundColor:"black"}}><a style={{ cursor: 'pointer' }} onClick={()=>{props.setName(props.title,props.image,props.description,props.price,props.rating.rate); props.setit(5);}}><img className="card-img-top image4" src={props.image} alt="Card image cap"/></a></div>
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <h5 style={{color:"green"}}>$ {props.price}</h5>
                    <a onClick={cartFunction} className="btn btn-primary m-2">Add to Cart</a>
                    <a onClick={wishFunction}><img className='image-icon2' src="https://clipart-library.com/images_k/heart-symbol-transparent/heart-symbol-transparent-21.png" alt="" /></a>
                </div>
                </div>  
        </>
    )
}
