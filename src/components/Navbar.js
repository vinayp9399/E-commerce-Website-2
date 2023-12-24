import React from 'react'
import { Cart } from 'react-bootstrap-icons';

export function Navbar({setit}) {

    return (
        <>
          <nav className="navbar navbar-expand-lg navbar-light bg-light nav1 shadow-lg rounded m-1 border border-2 border-dark">
            <div className="container-fluid">
                <a onClick={()=>setit(0)}><img className='image-icon1' src="https://www.georgiascreenprints.com/creartivemind/wp-content/themes/porto/images/logo/logo_ecommerce_black.png" alt="" /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <a onClick={()=>setit(1)} className="nav-link fw-bold" aria-current="page">Men</a>
                    </li>
                    <li className="nav-item">
                    <a onClick={()=>setit(2)} className="nav-link fw-bold" aria-current="page">Women</a>
                    </li>
                    <li className="nav-item">
                    <a onClick={()=>setit(3)} className="nav-link fw-bold" aria-current="page">Electronics</a>
                    </li>
                    <li className="nav-item">
                    <a onClick={()=>setit(4)} className="nav-link fw-bold" aria-current="page">Jewelery</a>
                    </li>
                </ul>
                </div>
                <form className="d-flex form1">
                    <input className="form-control me-1 input1" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-warning btn21" type="submit"><img className='image-icon2' src="https://clipart-library.com/images_k/magnifying-glass-icon-transparent/magnifying-glass-icon-transparent-19.png" alt="" /></button>
                </form>
                <a aria-current="page"><img className='image-icon2' src="https://cdn.onlinewebfonts.com/svg/img_86362.png" alt="" /></a>
                <a onClick={()=>setit(6)} aria-current="page"><img className='image-icon2' src="https://static.vecteezy.com/system/resources/previews/000/284/952/original/flat-black-heart-icon-isolated-on-white-background-vector-illustration.jpg" alt="" /></a>
                <a onClick={()=>setit(7)} aria-current="page"><img className='image-icon2' src="https://cdn.icon-icons.com/icons2/1369/PNG/512/-shopping-cart_90604.png" alt="" /></a>
            </div>
</nav>
        </>
    )
}
