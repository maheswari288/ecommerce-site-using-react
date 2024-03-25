import "./Product.css";
import axios from "axios";
import { useState } from "react";

function Product(){
const [state,setState]=useState([])


const getusers=()=>{


var promiseobj = axios.get("https://randomuser.me/api/?results=10");
promiseobj.then((successdata)=>{
    console.log("success data",successdata);
 })
 .catch((failuredata)=>{
    console.log("failure data",failuredata);
 })
}

 
 

    return(
        
<button onClick={getusers}>getusers</button>
        
    );
}

export default Product;