import Menu from "./Menu"
const style = {
p:{
  position:'absolute',
  backgroundColor:'#caccc7',
  borderStyle:'outset',
  top:'50%',
  left:'50%', 
  textAlign: 'center',
  padding:30,
  margin:0,
  transform: 'translate(-50%, -50%)', 
}
}

const Home = () => {

  return (        
          <div>
          <p style={style.p}>Hello, I'm Luwenxi.</p>
          <Menu></Menu>
          </div>
      )
  };
  
  export default Home;