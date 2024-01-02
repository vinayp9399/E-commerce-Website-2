import React from 'react'

export function CartItems(props) {
    

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
                            onclick="this.parentNode.querySelector('input[type=number]').stepDown()">
                            <i className="fas fa-minus"></i>
                        </button>

                        <div className="form-outline">
                            <input id="form1" min="0" name="quantity" value="1" type="number" className="form-control" />
                            <label className="form-label" for="form1">Quantity</label>
                        </div>

                        <button className="btn btn-primary px-3 ms-2"
                            onclick="this.parentNode.querySelector('input[type=number]').stepUp()">
                            <i className="fas fa-plus"></i>
                        </button>
                        </div>
                        

                        
                        <p className="text-start text-md-center">
                        <strong>Rs {props.price}</strong>
                        </p>
                       
                    </div>
                    </div>
                    <hr className="my-4" />
        </>
    )
}
