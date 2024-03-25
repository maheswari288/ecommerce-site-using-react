import "./card.css";

function Card(props){
    return(
       <div className="card" style={{backgroundColor: props.bgcolor}}> 
       <img src={props.image} width="250" height="200"/>
       <h4>s{props.name}</h4>
       <p> {props.para}</p>
       <button className="buttoncss">profile details </button>
       </div>
    );
}

export default Card;