import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'

export function Footer(props) {
    

    return (
        <>
         
        <footer className="bg-dark text-center text-lg-start bg-body-tertiary text-muted">
        
        <section className="bg-dark d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
            
            <div style={{color:"white"}} className=" me-5 d-none d-lg-block">
            <span>Get connected with us on social networks:</span>
            </div>
        

            
            <div style={{color:"white"}}>
            <a href="" className="me-4 text-reset">
            <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="" className="me-4 text-reset">
            <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="" className="me-4 text-reset">
            <FontAwesomeIcon icon={faWhatsapp} />
            </a>
            </div>
        </section>
        <section className="bg-dark">
            <div className="container text-center text-md-start">
            <div className="row">
                <div className="bg-dark col-md-3 col-lg-4 col-xl-3 mx-auto mb-4 mt-5">
                <h6 style={{color:"white"}} className="text-uppercase fw-bold mb-4">
                    <i className="fas fa-gem me-3"></i>Porto eCcommerce
                </h6>
                <p style={{color:"white"}}>
                    Here you can use rows and columns to organize your footer content. Lorem ipsum
                    dolor sit amet, consectetur adipisicing elit.
                </p>
                </div>
                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4  mt-5">
                <h6 style={{color:"white"}} className="text-uppercase fw-bold mb-4">
                    Products
                </h6>
                <p style={{color:"white"}}>
                    <a href="#!" className="text-reset">Men</a>
                </p>
                <p style={{color:"white"}}>
                    <a href="#!" className="text-reset">Women</a>
                </p>
                <p style={{color:"white"}}>
                    <a href="#!" className="text-reset">Electronics</a>
                </p>
                <p style={{color:"white"}}>
                    <a href="#!" className="text-reset">Jewellery</a>
                </p>
                </div>
                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4  mt-5">
                <h6 style={{color:"white"}} className="text-uppercase fw-bold mb-4">
                    Useful links
                </h6>
                <p style={{color:"white"}}>
                    <a href="#!" className="text-reset">Pricing</a>
                </p>
                <p style={{color:"white"}}>
                    <a href="#!" className="text-reset">Settings</a>
                </p>
                <p style={{color:"white"}}>
                    <a href="#!" className="text-reset">Orders</a>
                </p>
                <p style={{color:"white"}}>
                    <a href="#!" className="text-reset">Help</a>
                </p>
                </div>
                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4  mt-5">

                <h6 style={{color:"white"}} className="text-uppercase fw-bold mb-4">Contact</h6>
                <p style={{color:"white"}}> New York, NY 10012, US</p>
                <p style={{color:"white"}}>
                    
                    info@example.com
                </p>
                <p style={{color:"white"}}> + 01 234 567 88</p>
                <p style={{color:"white"}}> + 01 234 567 89</p>
                </div>
            </div>
            </div>
        </section>
        <div className="bg-dark text-center p-4" style={{backgroundColor: "rgba(0, 0, 0, 0.05)"}}>
            <a style={{color:"white",}} className=" fw-bold" href="/">MDBootstrap.com</a>
        </div>
        </footer> 
        </>
    )
}
