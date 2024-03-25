import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

import Card from "./components/card/Card.js";
import Nav from "./components/nav/Nav.js";
import Header from "./components/header/Header.js";
import Profilecard from './components/profilecard/Profilecard.js';
import {Route, Routes}  from 'react-router-dom';
import MyCarousel from "./components/carousel/Carousel.js";
import PageNotFound from './components/pagenotfound/PageNotFound.js';
import Users from "./components/users/Users.js";
import Login from "./components/login/Login.js";
import Products from "./components/products/Products.js"


function App() {
  const [isLogin, setlogin] = useState(false)
  return (
    <div className="App">
    
      <div className="navcss">
      {isLogin ? <Nav   logout={setlogin}/> : null}
     </div>
<Routes>

<Route path="/" element={  isLogin ? <Profilecard/> : <Login  login={setlogin}/> }/>

<Route path="/home" element={
  <div>
    
  <div  className="headercss">
    
    <Header 
    image="https://www.quicklly.com/upload_images/product/thumb/1646347911-saffola-masala-oats-everyday-peppy-tomato.jpeg"
    title="wheat"
    />
    <Header 
    image="https://m.media-amazon.com/images/I/5136Y63Lq4L.SL500.jpg"
    title="salt"
    />
    <Header 
    image="https://thumbs.dreamstime.com/b/shopping-basket-variety-grocery-products-isolated-whi-white-background-d-illustration-84983080.jpg"
    title="groceries"/>
    < Header 
    image="https://www.quicklly.com/upload_images/product/thumb/1646347911-saffola-masala-oats-everyday-peppy-tomato.jpeg"
    title="wheat"
    />
    <Header
    image="https://m.media-amazon.com/images/I/5136Y63Lq4L.SL500.jpg"
    title="salt"
    />
    <Header 
    image="https://thumbs.dreamstime.com/b/shopping-basket-variety-grocery-products-isolated-whi-white-background-d-illustration-84983080.jpg"
    title="groceries"/>

<Header 
    image="https://www.quicklly.com/upload_images/product/thumb/1646347911-saffola-masala-oats-everyday-peppy-tomato.jpeg"
    title="wheat"
    />
    <Header 
    image="https://m.media-amazon.com/images/I/5136Y63Lq4L.SL500.jpg"
    title="salt"
    />
    <Header 
    image="https://thumbs.dreamstime.com/b/shopping-basket-variety-grocery-products-isolated-whi-white-background-d-illustration-84983080.jpg"
    title="groceries"/>
   
 </div>

    <div><MyCarousel/>
    
    </div>
  </div>
  
  
     
}/>

<Route path="/profile" element={
   <div className="cardcss">
   <Card
   bgcolor ="lightgreen"
   name ="sheela"
    image="https://img.freepik.com/free-photo/brunette-business-woman-with-wavy-long-hair-blue-eyes-stands-holding-notebook-hands_197531-343.jpg?size=626&ext=jpg&ga=GA1.1.1448711260.1706400000&semt=ais"
    para="A professional is a member of a profession or any person  prepare members of the profession with the particular knowledge and skills necessary to perform their specific role within that profession."
    />
    
   <Card
   name="priya"
   bgcolor ="lightpink"
    image="https://static.vecteezy.com/system/resources/thumbnails/025/464/038/small_2x/portrait-of-a-professional-woman-in-a-suit-business-woman-standing-in-an-office-ai-generated-photo.jpg"

    para="who works in a specified professional activity. The term also describes the standards of education and training that"
    />
   
   
   <Card 
   name="maaallleeen"
   bgcolor =" lightyellow "
   image="https://media.istockphoto.com/id/831902150/photo/ive-solidified-my-name-in-the-business-world.jpg?s=612x612&w=0&k=20&c=GCkoeN4GXE9W3EgNmwnInZpvGEepUSPd7N8NMKGBGFs="
   para="A professional is a member of a profess with the particular knowledge and skills necessary to perform their specific role within that profession."/>
   </div>
}/>
<Route path="/Users" element={<Users/>}

/>
<Route path="/signin" element={<Login/>}/>
 
 <Route path="*" element={<PageNotFound/>}/>
 <Route path="/products" element={<Products/>}/>
    

</Routes>
     </div>
    
  );
}

export default App;
