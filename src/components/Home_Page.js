import React from 'react'
import { ProductCard } from './ProductCard';
import { Spinner } from 'reactstrap';
import { Carousel1 } from './Carousel1';

export function HomePage({setName, setit, setwishlist, setcart, countcartup, countwishup}) {

    const [data, setData] = React.useState([]);
    const [IsLoading, setIsLoading] = React.useState(true);
    React.useEffect(() => {
        const url = "https://fakestoreapi.com/products?limit=5";
        fetch(url)
          .then((response) => response.json())
          .then((json) => {setData(json); setIsLoading(false)})
          .catch((error) => console.log(error));
      }, []);
    return (
        <>
            <Carousel1/>
            <div className='rounded m-1 shadow-lg'>
            <h1>Top Products</h1>
            {
                    IsLoading===true ?
                    <div className="loader">
                        <Spinner color="white" />
                    </div>
                    : 
                    <div style={{display:'flex'}}>
            {data.map((data1)=>{return(<><ProductCard title={data1.title} image={data1.image} description={data1.description} price={data1.price} rating={data1.rating} setit={setit} setName={setName} setwishlist={setwishlist} setcart={setcart} countcartup={countcartup} countwishup={countwishup} /></>)})} 
            </div>
                }
            </div>
        </>
    )
}
