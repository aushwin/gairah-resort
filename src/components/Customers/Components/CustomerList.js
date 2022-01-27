import { useDispatch } from "react-redux"
import { customerSliceActions, CUSTOMERVIEW } from "../../../store/reducers/customerSlice"
const CustomerList = () => {
    const dispatch = useDispatch()
    const onAddCustomerClick = ()=>{
        dispatch(customerSliceActions.toggleView(CUSTOMERVIEW.register))
    }
    return <div className="w-full h-full p-10 bg-red-500 flex flex-col">
        <div className="flex justify-between">
            <div className="text-6xl font-light">Customers</div>
            <button className="bg-blue-500" onClick={onAddCustomerClick}>Add Customer</button>
        </div>
    </div>
}

export default CustomerList