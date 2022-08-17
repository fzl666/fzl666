import { Link } from "react-router-dom"
import cursor from "../assets/img/cursor.png"

const Effects = () => {
    return (
    <div>
    <Link to="/"><img title="Home" id='menu3' src={cursor} alt='menu'></img></Link>  
    <div id='effects'> 
        <p>AR Effects
          <br></br>
        Under construction</p>
    </div>
    
    </div>
    );

  };
  
  export default Effects;