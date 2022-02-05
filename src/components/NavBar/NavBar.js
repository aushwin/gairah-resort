import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { guestSliceActions, GUESTVIEW } from '../../store/reducers/guestSlice'
import NavTile from './NavTile'
const NavBar = () => {
    const dispatch =  useDispatch()
    return <div className="h-screen w-2/12 rounded-r-xl shadow  pt-5  bg-nav-bar text-white"> 
    <NavLink to={'/'} > 
    <NavTile title="DASHBOARD" />
    </NavLink>
    <NavLink to={'/Guests'} onClick={()=>dispatch(guestSliceActions.toggleView(GUESTVIEW.visual))}>
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