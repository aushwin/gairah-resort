import { useDispatch } from "react-redux"
import { roomsSliceActions } from "../../../store/reducers/roomSlice"
import { formatValue } from 'react-currency-input-field';
const RoomItem = ({roomId,roomName,roomPrice,roomStatus})=>{
    const dispatch = useDispatch()

    const price = formatValue({
        value: roomPrice.toString(),
        intlConfig: { locale: 'en-IN', currency: 'INR' },
    })
    const onGetRoomDetailsHandler = () => {
        dispatch(roomsSliceActions.getRoomDetails(roomId))
    }
    return <div className=" xl:h-32 h-24 px-10 columns-4 gap-8 items-center hover:bg-room-item-hover" onDoubleClick={onGetRoomDetailsHandler}>
        <div className="font-light">{roomId}</div>
        <div className="font-medium" >{roomName}</div>
        <div>{price}</div>
        <div>{roomStatus ? 'true' : 'false'}</div>
    </div>
}

export default RoomItem
