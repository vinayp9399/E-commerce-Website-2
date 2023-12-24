import React from 'react'

export function HomePage({setName, setit}) {

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
            {data.map((data1)=>{return(<>
                <div className="card" style={{width: "18rem", marginRight:"10px", marginLeft:"10px"}}>
                <a onClick={()=>{setName(data1.title,data1.image,data1.description,data1.price,data1.rating.rate); setit(5);}}><img className="card-img-top image4" src={data1.image} alt="Card image cap"/></a>
                <div className="card-body">
                    <h5 className="card-title">{data1.title}</h5>
                    <h5 style={{color:"green"}}>Rs {data1.price}</h5>
                    <a className="btn btn-primary m-2">Add to Cart</a>
                    <a href=""><img className='image-icon2' src="https://k7.pngheat.com/preview/95/220/943/heart-red-icon-symbol-red-heart-transparent-png-clip-art.jpg" alt="" /></a>
                </div>
                </div>
            </>)})} 
            </div>
            </div>
        </>
    )
}
