import { Link } from "react-router-dom"
import cursor from "../assets/img/cursor.png"
import './Contact.css'

const Contact = () => {
    return (
    <div>
    <br></br>
    <Link to="/Menu"><img title='Home' id='menu' src={cursor} alt='home'></img></Link>  
        <div className="cursor"><a href="https://www.instagram.com/luwenxis"><img title='Instagram' id='ig' src={cursor} alt='instagram'></img></a></div>
        <p className='tooltip'id='i'>Instagram</p>
        <div className="cursor"><a href="https://github.com/fzl666"><img title='Github' id='git' src={cursor} alt='github'></img></a></div>
        <p className='tooltip'id='g'>Github</p>
        <div className="cursor"><a href="https://www.youtube.com/channel/UCxuz0g5hfYVvs5w_euqgmYQ/featured"><img title='Youtube' id='youtube' src={cursor} alt='youtube'></img></a></div>
        <p className='tooltip'id='y'>Youtube</p>
        <div className="cursor"><a href = "mailto: songl652@newschool.edu"><img title='Mail' id='mail' src={cursor} alt='mail'></img></a></div>
        <p className='tooltip'id='m'>Mail</p>
        
        
        

    </div>
    );

  };
  
  export default Contact;