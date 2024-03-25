import "./Header.css";
function Header(props){
    return(
        <div>
            <img src={props.image} width="70px" height="70px"/>
            <h5>{props.title}</h5>
        </div>
    );
}

export default Header;