import { NavLink } from 'react-router-dom'
import NavTile from './NavTile'
const NavBar = () => {
    return <div className="h-screen w-2/12 rounded-r-xl shadow  pt-5  bg-nav-bar text-white"> 
    <NavLink to={'/'} > 
    <NavTile title="DASHBOARD" />
    </NavLink>
    <NavLink to={'/Guests'} >
    <NavTile title="Guests" />
    </NavLink>
   <NavLink to={'/checkout'}>
   <NavTile title="CHECKOUT" />
   </NavLink>
  <NavLink to={'/rooms'} >
  <NavTile title="ROOMS" />
  </NavLink>
    </div>

}

export default NavBar