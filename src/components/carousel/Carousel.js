
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 

function MyCarousel(){
    return(
        <div  style={{width:"90%",  margin:"auto" }}>
        <Carousel autoPlay={true} interval={1000} infiniteLoop showThumbs={false}>
     
            <div>
                <img src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/ca2843e62171405e.jpg?q=20" width="100%" height="250px" />
            </div>

            <div>
                <img src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/7c97c35eafcc3e76.jpeg?q=20" width="100%" height="250px"/>
            </div>

            <div>
                <img src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/4025b7673b94098d.jpg?q=20"  width="100%" height="250px" />
            </div>


            <div>
                <img src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/2679332fb2e55e22.jpeg?q=20"  width="100%" height="250px" />
            </div>
        </Carousel>
    </div>
    );
   
}

export default MyCarousel;