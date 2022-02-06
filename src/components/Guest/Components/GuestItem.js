import { useDispatch } from "react-redux"
import { guestSliceActions } from "../../../store/reducers/guestSlice"

const GuestItem = ({guestName,guestNumber,selectedRooms}) => {
    const dispatch = useDispatch()
    return (
        <div className="flex items-center p-5 shadow m-2 hover:bg-room-item-hover" onDoubleClick={()=>dispatch(guestSliceActions.getGuestEdit(guestNumber))}>
            <div className="w-1/3 text-center font-light">{guestName}</div>
            <div className="w-1/3 text-center font-light">{guestNumber}</div>
            <div className="w-1/3 flex gap-2 flex-wrap font-light">

                {selectedRooms.map((room)=>{
                    return <div>{room.label}</div>
                })}
                
            </div>
        </div>
    )
}


export default GuestItem