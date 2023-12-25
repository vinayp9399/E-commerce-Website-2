import React from 'react'
import { ProductCard } from './ProductCard';

export function Electronics({setName, setit, setwishlist}) {
    const [data, setData] = React.useState([]);
    React.useEffect(() => {
        const url = "https://fakestoreapi.com/products/category/electronics?limit=4";
        fetch(url)
          .then((response) => response.json())
          .then((json) => setData(json))
          .catch((error) => console.log(error));
      }, []);

    return (
        <>
         <div style={{display:'flex'}}>
            {data.map((data1)=>{return(<><ProductCard title={data1.title} image={data1.image} description={data1.description} price={data1.price} rating={data1.rating} setit={setit} setName={setName} setwishlist={setwishlist} /></>)})} 
            </div>   
        </>
    )
}
