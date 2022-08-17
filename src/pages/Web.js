import { Link } from "react-router-dom"
import cursor from "../assets/img/cursor.png"
const style={
Content:{
    position:'absolute',
    width:'100%',
    height:'100%'
},
cursor:{
    position: 'absolute',
    width:50,
    top:'15%',
    left:'85%',
    transform: 'translate(-50%, -50%)',
    zIndex:1,
},
desktop:{  
    position:'absolute',   
    top:'15%',
    left:'15%',
    right:'0',
    marginRight:'15%',
    border:'solid',
    borderColor:'#d3d3d3',
},
Box:{
    float:'left',
    width: 'fit-content',
    
},
a:{ 
    paddingBottom:3.5,
    width: 'fit-content',
    border:'outset',
    backgroundColor:'#d3d3d3',
},
link:{
    textDecoration: 'none',
},
ac:{ 
    width: 'fit-content',
    border:'outset',
    backgroundColor:'#d3d3d3'
},
Frame:{
    
    width:'100%',
    maxWidth:900,
    maxHeight:900,
    minWidth:300,
    minHeight:150,
    overflow: 'auto',
    resize: 'both',   
    backgroundColor:'#d3d3d3',
    paddingBottom:10,
},
}
const Web = () => {
    return (
    <div style={style.Content}>
    <Link to="/"><img style={style.cursor}title='Menu' src={cursor} alt='Menu'></img></Link>
        <div style={style.desktop}>

        <div style={style.Box}>
        <div style={style.ac}><a style={style.link} href='"https://fzllab.com/finalhome/"'>天堂 Final Home</a></div>
        <iframe style={style.Frame} src="https://fzllab.com/finalhome/" title="Finalhome" allowFullScreen></iframe>
        </div>

        <div style={style.Box}>
        <div style={style.ac}><a style={style.link} href="https://fzl666.github.io/fzl/">高科技亚文化取名机</a></div>
        <iframe style={style.Frame} src="https://fzl666.github.io/fzl/" title="name"></iframe>
        </div>

        <div style={style.Box}>
        <div style={style.a}><a style={style.link} href='https://fzl666.github.io/Weather-App/index.html'>Weather Dashboard</a></div>
        <iframe style={style.Frame} src="https://fzl666.github.io/Weather-App/index.html" title="Weatherapp"></iframe>
        </div>

        <div style={style.Box}>
        <div style={style.a}><a style={style.link} href="https://fzllab.com/">FZL Lab</a></div>
        <iframe style={style.Frame} src="https://fzllab.com/" title="FZL Lab"></iframe>
        </div>

    </div>
    </div>
    );
    
  };
  
  export default Web;