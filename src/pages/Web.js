import { Link } from "react-router-dom"
import cursor from "../assets/img/cursor.png"
const style={
Menu:{
    width:50,
    position:'absolute',
    top:'85%',
    left:'85%',
    
  },
Content:{
    position:'absolute',
    width:'100%',
    height:'100%',
    zIndex:-1,
    backgroundColor:'#d3d3d3'
},
Box:{
    float:'left',
    width: 'fit-content',
    margin:5,
    backgroundColor:'#d3d3d3',
    padding:0,
},
a:{ 
    paddingBottom:3.5,
    width: 'fit-content',
    border:'outset',
},
ac:{ 
    width: 'fit-content',
    border:'outset',
},
Frame:{
    width:'100%',
    maxWidth:900,
    maxHeight:900,
    minWidth:300,
    minHeight:150,
    overflow: 'auto',
    paddingBottom:10,
    resize: 'both',   
},
}
const Web = () => {
    return (
    <div style={style.Content}>
    <Link to="/Menu"><img title='Menu'style={style.Menu} src={cursor} alt='Menu'></img></Link>  

        <div style={style.Box}>
        <div style={style.ac}><a href='"https://fzllab.com/finalhome/"'>天堂 Final Home</a></div>
        <iframe style={style.Frame} src="https://fzllab.com/finalhome/" title="Finalhome" allowFullScreen></iframe>
        </div>

        <div style={style.Box}>
        <div style={style.ac}><a href="https://fzl666.github.io/fzl/">高科技亚文化取名机</a></div>
        <iframe style={style.Frame} src="https://fzl666.github.io/fzl/" title="name"></iframe>
        </div>

        <div style={style.Box}>
        <div style={style.a}><a href='https://fzl666.github.io/Weather-App/index.html'>Weather Dashboard</a></div>
        <iframe style={style.Frame} src="https://fzl666.github.io/Weather-App/index.html" title="Weatherapp"></iframe>
        </div>

        <div style={style.Box}>
        <div style={style.a}><a href="https://fzllab.com/">FZL Lab</a></div>
        <iframe style={style.Frame} src="https://fzllab.com/" title="FZL Lab"></iframe>
        </div>
   
    </div>
    );
    
  };
  
  export default Web;