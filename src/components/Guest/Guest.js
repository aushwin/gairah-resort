import SideImage from './../../assets/register.png'
import { GUESTVIEW } from '../../store/reducers/guestSlice' 
import { useSelector } from 'react-redux'
import { GuestRegistration,GuestList,GuestEdit } from './Components/index'
const Guest = () => {
    const toggleView = useSelector(state=>state.guest.toggleView)
    const renderView = () => {
        switch(toggleView){
            case GUESTVIEW.register: return <GuestRegistration />
            case GUESTVIEW.visual: return <GuestList />
            case GUESTVIEW.edit: return <GuestEdit />
            default: return <GuestList />
        }
    }
    return <div className="flex w-10/12 gap-0">
        <div className="w-8/12 h-screen ">
            {
              renderView()
            }
        </div>
        <div className="w-4/12   h-screen bg-red-500">
            <img src={SideImage} className='w-full h-full object-cover ' alt='random images' />
        </div>
    </div>
}

export default Guest