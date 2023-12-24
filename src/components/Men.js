import React from 'react'

export function Men({setName, setit}) {
    const [data, setData] = React.useState([]);
    React.useEffect(() => {
        const url = "https://fakestoreapi.com/products/category/men's clothing?limit=4";
        fetch(url)
          .then((response) => response.json())
          .then((json) => setData(json))
          .catch((error) => console.log(error));
      }, []);

    return (
        <>
         <div style={{display:'flex'}}>
            {data.map((data1)=>{return(<>
                <div className="card" style={{width: "18rem", marginRight:"10px", marginLeft:"10px"}}>
                <a onClick={()=>{setName(data1.title,data1.image,data1.description,data1.price,data1.rating.rate); setit(5);}}><img className="card-img-top image4" src={data1.image} alt="Card image cap"/></a>
                <div className="card-body">
                    <h5 className="card-title">{data1.title}</h5>
                    <button className="btn btn-primary m-2">Add to Cart</button>
                    <a className="btn btn-primary"><img className='image-icon2' src="https://static.vecteezy.com/system/resources/previews/000/284/952/original/flat-black-heart-icon-isolated-on-white-background-vector-illustration.jpg" alt="" /></a>
                </div>
                </div>
            </>)})} 
            </div>   
        </>
    )
}
