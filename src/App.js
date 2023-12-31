import {React, useState} from "react";
import './App.css';
import { Navbar } from './components/Navbar';
import { HomePage } from './components/Home_Page';
//import {
  //BrowserRouter as Router,
  //Switch,
  //Route
//} from "react-router-dom";
import { Men } from './components/Men';
import { Women } from './components/Women';
import { Electronics } from './components/Electronics';
import { Jewelery } from './components/Jewelery';
import { ProductDescription } from './components/Product_Description';
import { Cart } from './components/Cart';
import { Wishlist } from './components/Wishlist';

const App = () => {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [rate, setRate] = useState('');
  const [screen, setScreen] = useState(0);

  const [wishlists, setwishlists]=useState([]);
  const [CartProducts, setCartProducts]=useState([]);
  const [cartcount, setcartcount]=useState(0);
  const [wishcount, setwishcount]=useState(0);
  
  let clickMe=(name,image,description, price,rate)=>{
    setName(name);
    setImage(image);
    setDescription(description);
    setPrice(price);
    setRate(rate);
  };

  let setit=(e)=>{
    setScreen(e);
  };

  let setwishlist=(name,image,price)=>{ 
    let a = {'name':name,'image':image,'price':price};
    if(a.name!==''){
    //let updatedwishlist = [...wishlists,a];
    wishlists.push(a);
    //setwishlists(updatedwishlist);
    //console.log(updatedwishlist);
  }
  };

  let setcart=(name,image,price)=>{ 
    let b = {'name':name,'image':image,'price':price};
    if(b.name!==''){
    //let updatedwishlist = [...wishlists,a];
    CartProducts.push(b);
    //setwishlists(updatedwishlist);
    //console.log(updatedwishlist);
  }
  };

  let countcartup=()=>{
    setcartcount(cartcount+1);
  }

  let countwishup=()=>{
    setwishcount(wishcount+1);
  }



  switch (screen) {
    case 1:
      return <><Navbar setit={setit} cartcount={cartcount} wishcount={wishcount}/><Men setName={clickMe} setit={setit} setwishlist={setwishlist} setcart={setcart} countcartup={countcartup} countwishup={countwishup}/></>;
    case 2:
      return <><Navbar setit={setit} cartcount={cartcount} wishcount={wishcount}/><Women  setName={clickMe} setit={setit} setwishlist={setwishlist} setcart={setcart} countcartup={countcartup} countwishup={countwishup}/></>;
    case 3:
      return <><Navbar setit={setit} cartcount={cartcount} wishcount={wishcount}/><Electronics  setName={clickMe} setit={setit} setwishlist={setwishlist} setcart={setcart} countcartup={countcartup} countwishup={countwishup}/></>;
    case 4:
      return <><Navbar setit={setit} cartcount={cartcount} wishcount={wishcount}/><Jewelery  setName={clickMe} setit={setit} setwishlist={setwishlist} setcart={setcart} countcartup={countcartup} countwishup={countwishup}/></>;
    case 5:
      return <><Navbar setit={setit} cartcount={cartcount} wishcount={wishcount}/><ProductDescription name={name} image={image} description={description} price={price} rate={rate} setwishlist={setwishlist} setcart={setcart} countcartup={countcartup} countwishup={countwishup} /></>;
    case 6:
      return <><Navbar setit={setit} cartcount={cartcount} wishcount={wishcount}/><Wishlist wishlists={wishlists}/></>;
    case 7:
      return <><Navbar setit={setit} cartcount={cartcount} wishcount={wishcount}/><Cart CartProducts={CartProducts}/></>;    
      
    case 0:
      return <><Navbar setit={setit} cartcount={cartcount} wishcount={wishcount}/><HomePage setName={clickMe} setit={setit} setwishlist={setwishlist} setcart={setcart} countcartup={countcartup} countwishup={countwishup}/></>;
  }

  //return (
    {/*<>
    
          <Route exact path = "/" component={()=><HomePage setName={clickMe}/>}/>
          <Route exact path ="/Men" component={()=><Men/>}/>
          <Route exact path="/Women" component={()=><Women/>}/>
          <Route exact path="/Electronics" component={()=><Electronics/>}/>
          <Route exact path="/Jewelery" coponent={()=><Jewelery/>}/>
          <Route exact path="/ProductDescription" component={()=><ProductDescription name={name} />}/>
          <Route exact path="/Cart" component={()=><Cart/>}/>
</>*/}
//  );
};

export default (App);




