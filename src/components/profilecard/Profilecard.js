import "./Profilecard.css";
import {useState} from "react";





       function Profilecard(){

        const  [style, setstyle] = useState({
          bgColor:"white",
          color:"black"
        });


        const updatetheme=(event)=>{
         if(event.currentTarget.checked){
          setstyle({
            bgcolor:"black",
            color: "white"
          })

         }
        }


        const  [state, setState] = useState({
           
          name:"mahi",
          gender:"female",

          mail:"maheswari@gmail.com",
          desc:"girlboss #classy #boss In this video I share with you 3 tips that every professional women should practice if you want to be a BOSS!girlboss #classy #boss In this video I share with you 3 tips that every professional women should practice if you want to be a BOSS!girlboss #classy #boss In this video I share with you 3 tips that every professional women should practice if you want to be a BOSS!",
          image:"https://img.freepik.com/free-photo/amazing-cheerful-business-woman-standing-with-arms-crossed_171337-8487.jpg"

        });

         
        const updatetosheelaa =()=>{
          setState({
            name:"sheela",
            gender:"female",
            mail:"sheela@gmail.com",
            desc:"girlboss #classy #boss In this video I share with you 3 tips that every professional women should practice if you want to be a BOSS!girlboss #classy #boss In this video I share with you 3 tips that every professional women should practice if you want to be a BOSS!girlboss #classy #boss In this video I share with you 3 tips that every professional women should practice if you want to be a BOSS!",
            image:"https://img.freepik.com/free-photo/amazing-cheerful-business-woman-standing-with-arms-crossed_171337-8487.jpg"
  
          });
        };

        
        const updatetomahi=()=>{
          setState({
            name:"mahi",
            gender:"female",
  
            mail:"maheswari@gmail.com",
            desc:"girlboss #classy #boss In this video I share with you 3 tips that every professional women should practice if you want to be a BOSS!girlboss #classy #boss In this video I share with you 3 tips that every professional women should practice if you want to be a BOSS!girlboss #classy #boss In this video I share with you 3 tips that every professional women should practice if you want to be a BOSS!",
            image:"https://img.freepik.com/free-photo/amazing-cheerful-business-woman-standing-with-arms-crossed_171337-8487.jpg"
  
          });
        };


        

        
              return(
                <div className="profile">
                  <div className="profileimg">
                  
                    <img src={state.image} width="100%" height="100%"/>

                  </div>

                  <div className="profiledetails" style={{backgroundColor : style.bgColor, color:style.color}}>
                  <dl>
            <dt><b>username</b></dt>
            <dd>{state.name}</dd>
          </dl>

          <dl>
            <dt><b>gender</b></dt>
            <dd>{state.gender}</dd>
          </dl>

          <dl>
            <dt><b>mail</b></dt>
            <dd>{state.mail}</dd>
          </dl>

          <dl>
            <dt><b>description</b></dt>
            <dd> {state.desc}</dd>
          </dl>

          <button onclick={updatetomahi}>mahi</button>
                <button onclick={updatetosheelaa}>sheela</button>
               <br></br>

               <input type="checkbox" onclick={updatetheme}/>check
              
            </div>
                
                
            
                </div>
                
              );
            }

            export default Profilecard;