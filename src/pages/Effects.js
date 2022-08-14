import { Link } from "react-router-dom"
import cursor from "../assets/img/cursor.png"

const style={
Menu:{
    width:50,
    position:'absolute',
    top:'85%',
    left:'85%',
  },
Content:{
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width:'60%',
    height:'60%',
    backgroundColor:'grey'
}
}
const Effects = () => {
    return (
    <div>
    <Link to="/Menu"><img style={style.Menu} src={cursor}></img></Link>  
    <div style={style.Content}> 
        <h1>AR Effects</h1>
    </div>
    
    </div>
    );

  };
  
  export default Effects;