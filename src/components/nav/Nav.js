 import "./Nav.css";
 import {Link} from 'react-router-dom';
 
 function Nav(props){
    return(

        <div  className="navbarcss">
            <div  className="title"><h3>Ecommerce-Website</h3></div>
            <div className="menu">
            <Link to="/">services</Link>
           <Link to="/home">home</Link>
           <Link to="/users">Users</Link>
           <Link to="/products">Products</Link>
           <Link to="/profile">profile</Link>
          
           <Link to="/signup" onClick={()=>{props.logout(false)}}><button>Logout</button></Link>
        </div>

      
    </div>
    );
 }


 export default Nav;