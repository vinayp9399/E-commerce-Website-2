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


  switch (screen) {
    case 1:
      return <><Navbar setit={setit}/><Men setName={clickMe} setit={setit}/></>;
    case 2:
      return <><Navbar setit={setit}/><Women  setName={clickMe} setit={setit}/></>;
    case 3:
      return <><Navbar setit={setit}/><Electronics  setName={clickMe} setit={setit}/></>;
    case 4:
      return <><Navbar setit={setit}/><Jewelery  setName={clickMe} setit={setit}/></>;
    case 5:
      return <><Navbar setit={setit}/><ProductDescription name={name} image={image} description={description} price={price} rate={rate} /></>;
    case 6:
      return <><Navbar setit={setit}/><Wishlist name={name} image={image} description={description} /></>;
    case 7:
      return <><Navbar setit={setit}/><Cart name={name} image={image} description={description} /></>;    
      
    case 0:
      return <><Navbar setit={setit}/><HomePage setName={clickMe} setit={setit}/></>;
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




