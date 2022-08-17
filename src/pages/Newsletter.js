import { Link } from "react-router-dom"
import cursor from "../assets/img/cursor.png"

const style={
Menu:{
  width:50,
  position:'absolute',
  top:'85%',
  left:'85%',
  transform: 'translate(-50%, -50%)',
  zIndex:1
    },
Content:{
  position:'absolute',   
  bottom:"15%",
  right:0,
  textAlign:'right',
  marginRight:'15%',
  border:'outset',
  backgroundColor:'#caccc7'
  },  
}
const Newsletter = () => {
    return (
    <div>
    <Link to="/"><img style={style.Menu} src={cursor} alt='menu'></img></Link>  
    <div style={style.Content}> 
     <h1>Coming Soon</h1>
    </div>
    </div>
    );

  };
  
  export default Newsletter;