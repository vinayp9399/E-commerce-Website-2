import React from 'react'

export function WishlistItems(props) {
    const cartFunction=()=>{
        props.setcart(props.name,props.image,props.price);
        props.countcartup();
    }

    return (
        <>
            <div className="card mb-3 shadow">
            <div className="row no-gutters">
                <div className="col-md-4">
                <img style={{height:"170px", width:"200px"}} src={props.image} className="card-img" alt="..."/>
                </div>
                <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title">{props.name}</h5>
                    <h6 style={{color:"green"}} className="card-text">Rs {props.price}</h6>
                    <a onClick={cartFunction} className="btn btn-primary m-2">Add to Cart</a>
                    <a onClick={()=>props.wishitemDelete(props.name,props.image,props.price)} className="btn btn-danger">Delete</a>
                </div>
                </div>
            </div>
            </div>
        </>
    )
}
