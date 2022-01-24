import { useDispatch } from "react-redux"
import { roomsSliceActions } from "../../../store/reducers/roomSlice"
const RoomItem = ({roomId,roomName,roomPrice,roomStatus})=>{
    const dispatch = useDispatch()
    const onGetRoomDetailsHandler = () => {
        dispatch(roomsSliceActions.getRoomDetails(roomId))
    }
    return <div className=" xl:h-32 h-24 flex justify-evenly items-center hover:bg-room-item-hover" onDoubleClick={onGetRoomDetailsHandler}>
        <div className="font-light">{roomId}</div>
        <div className="font-medium" >{roomName}</div>
        <div>{roomPrice}</div>
        <div>{roomStatus ? 'true' : 'false'}</div>
    </div>
}

export default RoomItem
