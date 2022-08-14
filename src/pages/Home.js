import { Link } from "react-router-dom"
import cursor from "../assets/img/cursor.png"
const style = {
cursor:{
  width:50,
  position:'absolute',
  top:'50%',
  left:'50%', 
  transform: 'translate(-50%, -50%)'
},
p:{
  textAlign:'center',
  position:'absolute',
  top:'40%',
  left:'50%',  
  transform: 'translate(-50%, -50%)',
  padding:10,
  borderStyle:'solid'
}
}

const Home = () => {
  return (
    
          <div>
           <p style={style.p}>Hello, I'm Luwenxi.</p>
           
           <Link title='Menu' to="/Menu"><img style={style.cursor} src={cursor}></img></Link>            
          
          </div>
      )
  };
  
  export default Home;