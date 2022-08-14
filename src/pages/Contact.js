import { Link } from "react-router-dom"
import cursor from "../assets/img/cursor.png"

const style={
Menu:{
    width:50,
    position:'fixed',
    top:'50%',
    left:'50%',
    transform: 'translate(-50%, -50%)'
  },
Content:{
    position: 'fixed',
    top: '40%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    lineHeight:'10%',
    textAlign:'center',
    padding:10,
    borderStyle:'solid'
},
ig:{
    width:50,
    position:'absolute',
    transform: 'translate(-50%, -50%)',
    top:'15%',
    left:'50%',
  },
git:{
    width:50,
    position:'absolute',
    transform: 'translate(-50%, -50%)',
    top:'50%',
    left:'85%',
  },
youtube:{
    width:50,
    position:'absolute',
    transform: 'translate(-50%, -50%)',
    top:'50%',
    left:'15%',
  },
mail:{
    width:50,
    position:'absolute',
    transform: 'translate(-50%, -50%)',
    top:'85%',
    left:'50%',
  }
}
const Contact = () => {
    return (
    <div>
   
    <div style={style.Content}> 
        <p>Contact</p>
    </div> 
    <br></br>
    <Link to="/Menu"><img title='Home' style={style.Menu} src={cursor}></img></Link>  
    <a href="https://www.instagram.com/luwenxis"><img title='Instagram' style={style.ig} src={cursor}></img></a>
        <br></br>
        <a href="https://github.com/fzl666"><img title='Github' style={style.git} src={cursor}></img></a>
        <br></br>
        <a href="https://www.youtube.com/channel/UCxuz0g5hfYVvs5w_euqgmYQ/featured"><img title='Youtube' style={style.youtube} src={cursor}></img></a>
        <br></br>
        <a href = "mailto: songl652@newschool.edu"><img title='Mail' style={style.mail} src={cursor}></img></a>
    </div>
    );

  };
  
  export default Contact;