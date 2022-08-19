import { Link } from "react-router-dom"
import cursor from "../assets/img/cursor.png"
import gif1 from "../assets/img/gif1.gif"
import gif2 from "../assets/img/gif2.gif"
import gif3 from "../assets/img/gif3.gif"

const Effects = () => {
    return (
    <div>
    <Link to="/"><img title="Home" id='menu3' src={cursor} alt='menu'></img></Link>  
    <div id='effects'> 
        <div className="ardiv"><img className='ar'src={gif1} alt=''></img></div>
        <div className="ardiv"><img className='ar'src={gif2} alt=''></img></div>
        <div className="ardiv">
        <img className='ar'src={gif3} alt=''></img>
        <p className='arcap'>for @luchen_ny</p>
        </div>
    </div>
    </div>
    );

  };
  
  export default Effects;