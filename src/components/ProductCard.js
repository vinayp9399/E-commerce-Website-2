import React from 'react'

export function ProductCard(props) {
    

    return (
        <>
          <div className="card" style={{width: "18rem", marginRight:"10px", marginLeft:"10px"}}>
                <a style={{ cursor: 'pointer' }} onClick={()=>{props.setName(props.title,props.image,props.description,props.price,props.rating.rate); props.setit(5);}}><img className="card-img-top image4" src={props.image} alt="Card image cap"/></a>
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <h5 style={{color:"green"}}>Rs {props.price}</h5>
                    <a className="btn btn-primary m-2">Add to Cart</a>
                    <a onClick={()=>{props.setwishlist(props.title,props.image,props.price)}}><img className='image-icon2' src="https://k7.pngheat.com/preview/95/220/943/heart-red-icon-symbol-red-heart-transparent-png-clip-art.jpg" alt="" /></a>
                </div>
                </div>  
        </>
    )
}
