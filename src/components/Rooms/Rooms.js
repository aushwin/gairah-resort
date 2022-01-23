import { Fragment } from "react"
import RoomItem from "./components/RoomItem"
const Rooms = () => {
    return <Fragment>
        <div className="h-screen w-9/12 bg-mid-section flex flex-row flex-wrap flex-grow  overflow-y-scroll gap-1 ">
        <RoomItem />
        <RoomItem />
        <RoomItem />
        <RoomItem />
        <RoomItem />
        <RoomItem />
        <RoomItem />
        <RoomItem />
        </div>
        <div className="w-3/12">asdd</div> 
    </Fragment>
}

export default Rooms