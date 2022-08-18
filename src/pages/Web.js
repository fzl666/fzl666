import { Link } from "react-router-dom"
import cursor from "../assets/img/cursor.png"
import './pages.css'
const Web = () => {
    return (
    <div className="content">
    <Link to="/"><img id='menu2' src={cursor} alt='Menu' title="Home"></img></Link>
        <div id='desktop'>

        <div className="Box">
        <iframe className="frame" src="https://fzllab.com/finalhome/" title="Finalhome" allowFullScreen></iframe>
        <div className="ac"><a className='link' href="https://fzllab.com/finalhome/">天堂 Final Home</a></div>
        </div>

        <div className="Box">
        
        <iframe className="frame" src="https://fzl666.github.io/fzl/" title="name"></iframe>
        <div className="ac"><a className='link' href="https://fzl666.github.io/fzl/">高科技亚文化取名机</a></div>
        </div>

        <div className="Box">
        
        <iframe className="frame" src="https://fzl666.github.io/Weather-App/index.html" title="Weatherapp"></iframe>
        <div className="a"><a className='link' href='https://fzl666.github.io/Weather-App/index.html'>Weather Dashboard</a></div>
        </div>

        <div className="Box">
        
        <iframe className="frame" src="https://fzllab.com/" title="FZL Lab"></iframe>
        <div className="a"><a className='link' href="https://fzllab.com/">FZL Lab</a></div>
        </div>

    </div>
    </div>
    );
    
  };
  
  export default Web;