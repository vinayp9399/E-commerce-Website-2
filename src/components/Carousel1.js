import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

export function Carousel1(props) {
    
    return (
        <>
        <Carousel className="rounded m-1 shadow-lg">
      <Carousel.Item style={{backgroundColor:"black"}}>
        <img className='carousel-image' style={{height:"400px", width:"1300px"}} alt="" src="https://cdn.dribbble.com/users/2073894/screenshots/13486402/media/eac9dbf93292e11e73a6f138873c0515.jpg" />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{backgroundColor:"black"}}>
        <img className='carousel-image' style={{height:"400px", width:"1300px"}} src="https://s3.envato.com/files/145388275/01_preview3.jpg" alt="" />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{backgroundColor:"black"}}>
        <img className='carousel-image' style={{height:"400px", width:"1300px"}} src="https://static.vecteezy.com/system/resources/previews/002/006/774/large_2x/paper-art-shopping-online-on-smartphone-and-new-buy-sale-promotion-backgroud-for-banner-market-ecommerce-free-vector.jpg" alt="" />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>  
        </>
    )
}