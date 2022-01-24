import RoomItem from './RoomItem'
const ROOMS = [
    {roomId: 'FBC1',roomName: 'Full Bamboo Cottage 1',roomPrice:499,active:false},
    {roomId: 'FBC2',roomName: 'Full Bamboo Cottage 2',roomPrice:599,active:true},
    {roomId: 'HBC1',roomName: 'Half Bamboo Cottage 1',roomPrice:399,active:false},
    {roomId: 'HBC2',roomName: 'Half Bamboo Cottage 2',roomPrice:299,active:false},
    {roomId: 'HBC3',roomName: 'Half Bamboo Cottage 3',roomPrice:299,active:false},
    {roomId: 'HBC4',roomName: 'Half Bamboo Cottage 4',roomPrice:699,active:false},
    {roomId: 'HBC5',roomName: 'Half Bamboo Cottage 5',roomPrice:799,active:false},
    {roomId: 'HBC6',roomName: 'Half Bamboo Cottage 6',roomPrice:899,active:false}
]
const RoomList = ()=>{
    return <div className="h-5/6 overflow-y-scroll no-scrollbar">
    <div className="flex flex-col ">
        {ROOMS.map(({roomId,roomName,roomPrice,active})=><RoomItem roomId={roomId} roomName={roomName} roomPrice={roomPrice} roomStatus={active} />)}
        roomStatus
    </div>
  </div>
}

export default RoomList