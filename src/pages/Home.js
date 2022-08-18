import { Link } from "react-router-dom"
import Menu from "./Menu"
import cursor from "../assets/img/cursor.png"

const Home = () => {

  return (        
          <div>
          <p id='intro'>Hello, I am Luwenxi.</p>
          <Link to="/Contact"><img id='contact'src={cursor} alt='contact'></img></Link>
          <Menu></Menu>
          </div>
      )
  };
  
  export default Home;