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
  border:'solid',
  borderColor:'#d3d3d3'
  },  
}
const Newsletter = () => {
    return (
    <div>
    <Link to="/"><img style={style.Menu} src={cursor} alt='menu'></img></Link>  
    <div style={style.Content}> 
     <h1>Under construction</h1>
    </div>
    </div>
    );

  };
  
  export default Newsletter;