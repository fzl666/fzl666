import { Link } from "react-router-dom"
import Menu from "./Menu"

const Home = () => {

  return (        
          <div>
          <Link to="/Contact"><p id='intro'>Hello, I'm Luwenxi.</p></Link>
          <Menu></Menu>
          </div>
      )
  };
  
  export default Home;