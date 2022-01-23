import NavTile from './NavTile'
const NavBar = () => {
    return <div className="h-screen w-2/12 border pt-5 "> 
    <NavTile title="DASHBOARD" />
    <NavTile title="CHECKOUT" />
    <NavTile title="ROOMS" />
    </div>

}

export default NavBar