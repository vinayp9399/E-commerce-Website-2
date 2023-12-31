import React from 'react'
import { Cart } from 'react-bootstrap-icons';

export function Navbar({setit, cartcount, wishcount}) {

    let toggleactive=(e)=>{
        let a = document.querySelectorAll('#nav-link');
        for(let x of a){
            x.style.textDecoration="none";
            x.className="nav-link fw-bold";
        }
        e.target.style.textDecoration="underline";
        e.target.className="nav-link fw-bold active";    
    }

    let toggleactive1=()=>{
        let a = document.querySelectorAll('#nav-link');
        for(let x of a){
            x.style.textDecoration="none";
            x.className="nav-link fw-bold";
        } 
    }

    

    return (
        <>
          <nav className="navbar navbar-expand-lg navbar-light bg-light nav1 shadow-lg rounded m-1 border border-2 border-dark">
            <div className="container-fluid">
                <a onClick={()=>{setit(0); toggleactive1();}} style={{ cursor: 'pointer' }}><img className='image-icon1' src="https://www.georgiascreenprints.com/creartivemind/wp-content/themes/porto/images/logo/logo_ecommerce_black.png" alt="" /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <a onClick={(e)=>{setit(1); toggleactive(e);}} style={{ cursor: 'pointer' }} id="nav-link" className="nav-link fw-bold" aria-current="page">Men</a>
                    </li>
                    <li className="nav-item">
                    <a onClick={(e)=>{setit(2); toggleactive(e);}} style={{ cursor: 'pointer' }} id="nav-link" className="nav-link fw-bold" aria-current="page">Women</a>
                    </li>
                    <li className="nav-item">
                    <a onClick={(e)=>{setit(3); toggleactive(e);}} style={{ cursor: 'pointer' }} id="nav-link" className="nav-link fw-bold" aria-current="page">Electronics</a>
                    </li>
                    <li className="nav-item">
                    <a onClick={(e)=>{setit(4); toggleactive(e);}} style={{ cursor: 'pointer' }} id="nav-link" className="nav-link fw-bold" aria-current="page">Jewelery</a>
                    </li>
                </ul>
                </div>
                <form className="d-flex form1">
                    <input className="form-control me-1 input1" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-warning btn21" type="submit"><img className='image-icon2' src="https://clipart-library.com/images_k/magnifying-glass-icon-transparent/magnifying-glass-icon-transparent-19.png" alt="" /></button>
                </form>
                <a aria-current="page" style={{ cursor: 'pointer' }}><img className='image-icon2' src="https://cdn.onlinewebfonts.com/svg/img_86362.png" alt="" /></a>
                <a onClick={(e)=>{setit(6); toggleactive1();}} style={{ cursor: 'pointer' }} aria-current="page"><img className='image-icon3' src="https://static.vecteezy.com/system/resources/previews/000/284/952/original/flat-black-heart-icon-isolated-on-white-background-vector-illustration.jpg" alt="" /><span style={{marginRight:'12px'}} class='badge badge-warning' id='lblCartCount'>{wishcount}</span></a>
                <a onClick={(e)=>{setit(7); toggleactive1();}} style={{ cursor: 'pointer' }} aria-current="page"><i class="fa" style={{fontSize:'26px'}}>&#xf07a;</i><span class='badge badge-warning' id='lblCartCount'>{cartcount}</span></a>
            </div>
</nav>
        </>
    )
}
