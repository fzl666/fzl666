import { Link } from "react-router-dom"
import cursor from "../assets/img/cursor.png"
import Draggable from 'react-draggable'
const style={
Menu:{
    width:50,
    position:'fixed',
    top:'50%',
    left:'50%',
    transform: 'translate(-50%, -50%)',
    
  },
Content:{
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width:'100%',
    height:'100%',
    zIndex:-1,
    backgroundColor:'#d3d3d3'
},
Box:{
    borderStyle:'solid',
    width:320,
    height:320
},
Frame:{
    border:'solid',
    padding:10,
},
}
const Web = () => {
    return (
    <div style={style.Content}>
    <Link to="/Menu"><img title='Menu'style={style.Menu} src={cursor} alt='Menu'></img></Link>  
    <Draggable bounds="parent">
        {/* <div style={style.Box}> */}
        <iframe style={style.Frame} src="https://fzllab.com/finalhome/" title="Finalhome" allowFullScreen onload='javascript:resizeIframe(this)'></iframe>
        {/* </div> */}
    </Draggable>

    <Draggable bounds="parent">
        {/* <div style={style.Box}> */}
        <iframe style={style.Frame} src="https://fzl666.github.io/Weather-App/index.html" title="Weatherapp"></iframe>
        
        {/* </div> */}
    </Draggable>
    
    <Draggable bounds="parent">
        {/* <div style={style.Box}> */}
        
        <iframe style={style.Frame} src="https://fzl666.github.io/fzl/" title="name"></iframe>
        {/* </div> */}
    </Draggable>

    <Draggable bounds="parent">
        {/* <div style={style.Box}> */}
        <iframe style={style.Frame} src="https://fzllab.com/" title="FZL Lab"></iframe>
        {/* </div> */}
    </Draggable>

    </div>
    );
    
  };
  
  export default Web;