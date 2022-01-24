import { useSelector } from 'react-redux'
import RoomItem from './RoomItem'

const RoomList = ()=>{
    const rooms = useSelector(state=>state.rooms.rooms)
    return <div className="h-5/6 overflow-y-scroll no-scrollbar">
    <div className="flex flex-col ">
        {rooms.map(({roomId,roomName,roomPrice,active})=><RoomItem key={roomId} roomId={roomId} roomName={roomName} roomPrice={roomPrice} roomStatus={active} />)}
        roomStatus
    </div>
  </div>
}

export default RoomList