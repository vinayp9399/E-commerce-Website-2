import React, { useEffect, useState } from 'react'

export function CartItems(props) {

    const [a, seta] = useState(1);

    let b = a*(props.price);

    
    useEffect(() => {
        props.totalprice(b);
    }, [props,b])

    

    return (
        <>
            <div className="row">
                    <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
                        
                        <div className="bg-image hover-overlay hover-zoom ripple rounded" data-mdb-ripple-color="light">
                        <img src={props.image}
                            className="w-100" alt="Blue Jeans Jacket" />
                        <a href="#!">
                            <div className="mask" style={{backgroundColor: "rgba(251, 251, 251, 0.2)"}}></div>
                        </a>
                        </div>
                        
                    </div>

                    <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
                        
                        <p><strong>{props.name}</strong></p>
                        <button onClick={()=>props.cartitemDelete(props.name,props.image,props.price)} type="button" className="btn btn-danger btn-sm mb-2" data-mdb-toggle="tooltip"
                        title="Move to the wish list">
                        Delete
                        </button>
                       
                    </div>

                    <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                       
                        <div className="d-flex mb-4" style={{maxWidth:"300px"}}>
                        <button className="btn btn-primary px-3 me-2"
                            onClick={()=>{seta(a-1)}}>
                            <i style={{fontWeight:'bold'}}>-</i>
                        </button>

                        <div id="form12" className="form-outline">
                            <input onClick={()=>props.totalprice(b)} id="input" min="0" name="quantity" value={a} type="number" className="form-control" />
                            <label className="form-label" for="form1">Quantity</label>
                        </div>

                        <button className="btn btn-primary px-3 ms-2"
                            onClick={()=>{seta(a+1)}}>
                            <i style={{fontWeight:'bold'}}>+</i>
                        </button>
                        </div>
                        

                        
                        <p className="text-start text-md-center">
                            <strong>$ {b}</strong>
                        </p>
                       
                    </div>
                    </div>
                    <hr className="my-4" />
        </>
    )
}
