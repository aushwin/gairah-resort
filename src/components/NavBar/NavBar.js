import NavTile from './NavTile'
const NavBar = () => {
    return <div className="h-screen w-2/12 rounded-r-xl shadow  pt-5  bg-nav-bar text-white"> 
    <NavTile title="DASHBOARD" />
    <NavTile title="CHECKOUT" />
    <NavTile title="ROOMS" />
    </div>

}

export default NavBar