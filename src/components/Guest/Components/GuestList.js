import { useDispatch } from "react-redux"
import { guestSliceActions, GUESTVIEW } from "../../../store/reducers/guestSlice"
const GuestList = () => {
    const dispatch = useDispatch()
    const onAddGuestClick = ()=>{
        dispatch(guestSliceActions.toggleView(GUESTVIEW.register))
    }
    return <div className="w-full h-full p-10 bg-red-500 flex flex-col">
        <div className="flex justify-between">
            <div className="text-6xl font-light">Guests</div>
            <button className="bg-blue-500" onClick={onAddGuestClick}>Add Guest</button>
        </div>
    </div>
}

export default GuestList