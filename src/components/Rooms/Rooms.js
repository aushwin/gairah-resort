import { Fragment } from "react";
import RoomList from "./components/RoomList";
const Rooms = () => {
  return (
    <Fragment>
      <div className="w-7/12 h-screen overflow-clip shadow-xl">
        <div className="p-10">
          <div className="flex justify-between items-center">
            <div className="text-6xl font-light">Rooms</div>
            <button className="bg-blue-500 p-3 px-7 rounded-lg">
              Add Room
            </button>
          </div>
          <div className="ml-1 text-gray-400">4</div>
        </div>
        <RoomList />
      </div>
    </Fragment>
  );
};

export default Rooms;
