import { Fragment } from "react";
import { useSelector } from "react-redux";
import EditRoom from "./components/EditRoom";
import RoomList from "./components/RoomList";
const Rooms = () => {
    const totalRooms = useSelector((state) => state.rooms.rooms.length)
  return (
    <Fragment>
      <div className="w-7/12 h-screen overflow-clip shadow-xl">
        <div className="p-10">
          <div className="flex justify-between items-center">
            <h1 className="text-6xl font-light">Rooms</h1>
            <button className="bg-blue-500 p-3 px-7 rounded-lg">
              Add Room
            </button>
          </div>
          <div className="ml-1 text-gray-400">{totalRooms}</div>
        </div>
        <RoomList />
      </div>
      <EditRoom />
    </Fragment>
  );
};

export default Rooms;
