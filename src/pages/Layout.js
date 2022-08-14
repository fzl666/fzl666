import { Outlet, Link } from "react-router-dom";
const style= {
div:{
   position: 'fixed',
   top: '50%',
   left: '50%',
   transform: 'translate(-50%, -50%)'
      } 
}
const Layout = () => {
  return (
    <div>
      <Outlet />
    </div>
  )
};

export default Layout;