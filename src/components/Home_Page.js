import React from 'react'
import { ProductCard } from './ProductCard';

export function HomePage({setName, setit, setwishlist}) {

    const [data, setData] = React.useState([]);
    React.useEffect(() => {
        const url = "https://fakestoreapi.com/products?limit=5";
        fetch(url)
          .then((response) => response.json())
          .then((json) => setData(json))
          .catch((error) => console.log(error));
      }, []);
    return (
        <>
          <div id="carouselExampleIndicators" className="carousel slide rounded m-1 shadow-lg" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1" ></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner" style={{height:"400px"}}>
                <div className="carousel-item img3">
                <img className="d-block w-100" src="https://static.vecteezy.com/system/resources/previews/002/006/774/large_2x/paper-art-shopping-online-on-smartphone-and-new-buy-sale-promotion-backgroud-for-banner-market-ecommerce-free-vector.jpg" alt="First slide"/>
                </div>
                <div className="carousel-item">
                <img className="d-block w-100 img3" src="https://s3.envato.com/files/145388275/01_preview3.jpg" alt="Second slide"/>
                </div>
                <div className="carousel-item active">
                <img className="d-block w-100 " src="https://cdn.dribbble.com/users/2073894/screenshots/13486402/media/eac9dbf93292e11e73a6f138873c0515.jpg" alt="Third slide"/>
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only"></span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only"></span>
            </a>
            </div> 
            <div className='rounded m-1 shadow-lg'>
            <h1>Top Products</h1>
            <div style={{display:'flex'}}>
            {data.map((data1)=>{return(<><ProductCard title={data1.title} image={data1.image} description={data1.description} price={data1.price} rating={data1.rating} setit={setit} setName={setName} setwishlist={setwishlist} /></>)})} 
            </div>
            </div>
        </>
    )
}
