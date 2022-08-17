import { Link } from "react-router-dom"
import cursor from "../assets/img/cursor.png"
import './Contact.css'

const Contact = () => {
    return (
    <div>
    <br></br>
    <Link to="/"><img title='Home' id='menu' src={cursor} alt='home'></img></Link>  
        <div><a href="https://www.instagram.com/luwenxis"><p className='tooltip'id='i'>Instagram</p></a></div>
        <div><a href="https://github.com/fzl666"><p className='tooltip'id='g'>Github</p></a></div>  
        <div><a href="https://www.youtube.com/channel/UCxuz0g5hfYVvs5w_euqgmYQ/featured"><p className='tooltip' id='y'>Youtube</p></a></div>  
        <div><a href = "mailto: songl652@newschool.edu"><p className='tooltip' id='m'>Mail</p></a></div>
        
   </div>
    );

  };
  
  export default Contact;