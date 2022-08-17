import { Link } from "react-router-dom"
import cursor from "../assets/img/cursor.png"
import Menu from "./Menu"
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
  padding:10,
  borderStyle:'solid',
  transform: 'translate(-50%, -50%)'
}
}

const Home = () => {

  return (        
          <div id='box'>
           <p style={style.p}>Hello, I'm Luwenxi.</p>
           <Link to='/Contact'><img style={style.cursor} src={cursor} alt='menu'></img></Link>          
          <Menu></Menu>
          </div>
      )
  };
  
  export default Home;