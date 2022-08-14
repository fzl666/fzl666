import { Link } from "react-router-dom"
import cursor from "../assets/img/cursor.png"
import i164 from "../assets/img/i164.png"
import i155 from "../assets/img/i155.jpg"
import mk2 from "../assets/img/mk2.png"
import i154 from "../assets/img/i154.png"
import num1 from "../assets/img/num1.png"
import num2 from "../assets/img/num2.png"
import num3 from "../assets/img/num3.png"
import S4 from "../assets/img/S4.png"
import S3 from "../assets/img/S3.png"
import './Gallery.css'
const style={
Menu:{
    width:50,
    position:'absolute',
    top:'85%',
    left:'15%'
  },
Content:{
    position: 'fixed',
    width:'100%',
    height:'100%',
    backgroundColor:'blue',
    zIndex:-1
},
}
const Gallery = () => {
    return (
    <div>
    <Link to="/Menu"><img style={style.Menu} src={cursor}></img></Link>  
    <div style={style.Content}> 
    <h1>Gallery</h1>
    <div class='imgbox'>
    <img class='gallery' src={i164}></img>
    <img class='gallery' src={i155}></img>
    <img class='gallery' src={i154}></img>
    <img class='gallery' src={mk2}></img>
    <img class='gallery' src={num1}></img>
    <img class='gallery' src={num2}></img>
    <img class='gallery' src={num3}></img>
    <img class='gallery' src={S3}></img>
    <img class='gallery' src={S4}></img>
    </div>

    </div>
    </div>
    );
    
  };
  
  export default Gallery;