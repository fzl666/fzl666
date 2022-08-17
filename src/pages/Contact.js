import { Link } from "react-router-dom"
import cursor from "../assets/img/cursor.png"
import './pages.css'
const Contact = () => {
    return (
      <div>
        <Link to="/"><img title='Home' id='menu0' src={cursor} alt='home'></img></Link>  
        <div><a href="https://www.instagram.com/luwenxis"><p className='contacts'id='i'>Instagram</p></a></div>
        <div><a href="https://github.com/fzl666"><p className='contacts'id='g'>Github</p></a></div>  
        <div><a href="https://www.youtube.com/channel/UCxuz0g5hfYVvs5w_euqgmYQ/featured"><p className='contacts' id='y'>Youtube</p></a></div>  
        <div><a href = "mailto: songl652@newschool.edu"><p className='contacts' id='m'>Mail</p></a></div>    
      </div>
   )
  };
  
  export default Contact;