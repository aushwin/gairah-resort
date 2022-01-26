import { useSelector } from 'react-redux'
import RoomItem from './RoomItem'

const RoomList = ()=>{
    const rooms = useSelector(state=>state.rooms.rooms)
    return <div className="h-5/6 overflow-y-scroll no-scrollbar">
      <div className="  xl:h-16 mb-10 h-16 px-10 columns-4 gap-8 items-center shadow">
          <div className="font-light">Room Id</div>
          <div className="font-medium">Room Name</div>
          <div>Room Price</div>
          <div>Room Status</div>
        </div>
    <div className="flex flex-col ">
        {rooms.map(({roomId,roomName,roomPrice,active})=><RoomItem key={roomId} roomId={roomId} roomName={roomName} roomPrice={roomPrice} roomStatus={active} />)}
        roomStatus
    </div>
  </div>
}

export default RoomList