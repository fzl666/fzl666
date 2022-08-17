import { Link } from "react-router-dom"
import cursor from "../assets/img/cursor.png"

const style={
Menu:{
  width:50,
  position:'absolute',
  top:'85%',
  left:'15%',
  transform: 'translate(-50%, -50%)',
  zIndex:1
  },
Content:{
  position:'absolute',   
  bottom:"15%",
  left:'15%',
  marginRight:'15%',
  border:'outset',
  borderColor:'#caccc7',
  backgroundColor:'#caccc7'
},


}
const Effects = () => {
    return (
    <div>
    <Link to="/"><img style={style.Menu} src={cursor} alt='menu'></img></Link>  
    <div style={style.Content}> 
        <h1>AR Effects</h1>
    </div>
    
    </div>
    );

  };
  
  export default Effects;