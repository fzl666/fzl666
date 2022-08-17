import { Link } from "react-router-dom"
import cursor from "../assets/img/cursor.png"

const Bulletin = () => {
    return (
    <div>
    <Link to="/"><img title="Home" id='menu4' src={cursor} alt='menu'></img></Link>  
    <div id='Bulletin'> 
        <p>Bulletin
          <br></br>
        Under construction</p>
    </div>
    
    </div>
    );

  };
  
  export default Bulletin;