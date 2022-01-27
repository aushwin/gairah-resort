import SideImage from './../../assets/register.png'
import { Routes,Route } from 'react-router-dom'
import { CUSTOMERVIEW } from '../../store/reducers/customerSlice' 
import { useSelector } from 'react-redux'
import { CustomerRegistration,CustomerList,CustomerEdit } from './Components/index'
const Customers = () => {
    const toggleView = useSelector(state=>state.customers.toggleView)
    const renderView = () => {
        switch(toggleView){
            case CUSTOMERVIEW.register: return <CustomerRegistration />
            case CUSTOMERVIEW.visual: return <CustomerList />
            case CUSTOMERVIEW.edit: return <CustomerEdit />
            default: return <CustomerList />
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

export default Customers