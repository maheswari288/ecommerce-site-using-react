import "./Login.css";
import  {useRef}  from "react";

function Login(props){

    let ref1 = useRef(null)
    let ref2=useRef(null)

  

    const change= () =>{

        var username = ref1.current.value;
        var Password = ref2.current.value;
      
       if(username === "mahi" && Password==="mahi28"){
             props.login(true);
       }
       else{
        alert("enter proper credentials");
       }

        

        ref1.current.value=""
        ref2.current.value=""
            };
    return(
        <div className="logincss">

            <h2>Login Page</h2>
            <div >
                <input  ref={ref1}   type="text" placeholder="username"/>
            </div>
            <div> <input ref={ref2} type="password" placeholder="Password"/></div>
            <div><button onClick={change}>Login</button></div>
        </div>
    )
}

export default Login;