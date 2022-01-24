const RoomItem = ({roomId,roomName,roomPrice,roomStatus})=>{
    return <div className=" xl:h-32 h-24 flex justify-evenly items-center hover:bg-room-item-hover" >
        <div className="font-light">{roomId}</div>
        <div className="font-medium" >{roomName}</div>
        <div>{roomPrice}</div>
        <div>{roomStatus ? 'true' : 'false'}</div>
    </div>
}

export default RoomItem
