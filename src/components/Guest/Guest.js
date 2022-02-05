import SideImage from './../../assets/register.png'
import { fetchGuests, GUESTVIEW } from '../../store/reducers/guestSlice' 
import { useDispatch, useSelector } from 'react-redux'
import { GuestRegistration,GuestList,GuestEdit } from './Components/index'
import {useEffect} from 'react'

const Guest = () => {
    const dispatch = useDispatch()
    const toggleView = useSelector(state=>state.guest.toggleView)
    useEffect(()=>{
        if(toggleView===GUESTVIEW.visual){
            dispatch(fetchGuests())
        }
    },[dispatch,toggleView])
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