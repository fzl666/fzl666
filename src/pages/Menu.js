import { Link } from "react-router-dom"
import cursor from "../assets/img/cursor.png"

const style={
contact:{
  width:50,
  position:'absolute',
  top:'15%',
  left:'15%',
},
web:{
  width:50,
  position:'absolute',
  top:'15%',
  left:'85%',
},
gallery:{
  width:50,
  position:'absolute',
  top:'85%',
  left:'15%',
},
effect:{
  width:50,
  position:'absolute',
  top:'85%',
  left:'85%',
}
}
const Menu = () => {
  return (
    
          <div>           
           <Link to="/Contact"><img title='Contact'style={style.contact} src={cursor}></img></Link>  
           <Link to="/Web"><img title='Web'style={style.web} src={cursor}></img></Link> 
           <Link to="/Gallery"><img title='Gallery'style={style.gallery} src={cursor}></img></Link>
           <Link to="/Effects"><img title= 'AR Effects'style={style.effect} src={cursor}></img></Link> 
          </div>
      )
  };
  
  export default Menu;