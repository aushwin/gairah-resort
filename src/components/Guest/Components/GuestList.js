import { useDispatch, useSelector } from "react-redux"
import { GuestItem } from "."
import { guestSliceActions, GUESTVIEW } from "../../../store/reducers/guestSlice"
const GuestList = () => {
    const dispatch = useDispatch()
    const {guests} = useSelector(state=> state.guest)
    const onAddGuestClick = ()=>{
        dispatch(guestSliceActions.toggleView(GUESTVIEW.register))
    }
    return <div className="w-full h-full p-10 shadow-xl ml-2 flex flex-col">
        <div className="flex justify-between">
            <div className="text-6xl font-light">Guests</div>
            <button className="shadow-xl bg-green-500 px-10" onClick={onAddGuestClick}>Add Guest</button>
        </div>
        <div className="flex items-center p-5 shadow m-4 hover:bg-room-item-hover">
            <div className="w-1/3 text-center font-bold">GUEST NAME</div>
            <div className="w-1/3 text-center font-bold">GUEST NUMBER</div>
            <div className="w-1/3 flex gap-1 flex-wrap font-bold">
                SELECTED ROOMS
                
            </div>
        </div>
        
        <div className="h-6/6 m-4 mt-0 shadow overflow-scroll w-full">
            {guests.map((guest)=>{
                return <GuestItem key={guest._id} guestName={guest.guestName} guestNumber={guest.guestNumber} selectedRooms={guest.selectedRooms} />
            })}
        </div>
    </div>
}

export default GuestList