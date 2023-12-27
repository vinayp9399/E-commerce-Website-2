import React from 'react'

export function CartItems(props) {
    

    return (
        <>
            <div className="card mb-3 shadow">
            <div className="row no-gutters">
                <div className="col-md-4">
                <img style={{height:"200px"}} src={props.image} className="card-img" alt="..."/>
                </div>
                <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title">{props.name}</h5>
                    <p style={{color:"green"}} className="card-text">Rs {props.price}</p>
                    <p className="card-text"><small className="text-muted"></small></p>
                </div>
                </div>
            </div>
            </div>
        </>
    )
}
