import { useState , useEffect, useRef} from "react";
import {  useDispatch, useSelector } from "react-redux";
import { roomsSliceActions } from "../../../store/reducers/roomSlice";
import CurrencyInput from 'react-currency-input-field';
import { Alert } from "@mui/material";
const EditRoom = () => {
  //style
   const dispatch = useDispatch();
   const isChecked = useRef()
   const roomDetails =  useSelector(state => state.rooms.roomDetails)
   const [roomName,setRoomName]  = useState(roomDetails.roomName)
   const [roomPrice,setRoomPrice] = useState(roomDetails.roomPrice)
   useEffect(()=>{
     if(roomDetails)
    { setRoomPrice(roomDetails.roomPrice)
    setRoomName(roomDetails.roomName)}
   },[roomDetails])

   const nameChangeHandler = (e) => {
    setRoomName(e.target.value)
   }

   const priceChangeHandler = (e) => {
     setRoomPrice(e)
    
   }

   const onSubmitHandler = (event)=> {
     event.preventDefault()
     
     console.log('price = ', roomPrice ,' name = ',roomName)
     if(isChecked.current.checked)dispatch(roomsSliceActions.updateRoom({roomName,roomPrice}))
   }

 

  return (
    <div className=" h-screen w-3/12 p-5 pt-10 flex flex-col justify-start gap-20">
      <h2 className="text-4xl font-light">Edit Room</h2>
      <form className="flex flex-col justify-evenly gap-5" onSubmit={onSubmitHandler}>
        <div className="flex h-9">
          <label className="w-28 text-lg" htmlFor="roomId">Room Id</label>
          <input className="shadow border rounded  py-2 px-3 focus:outline-none focus:shadow-outline ml-4 disabled:bg-gray-100" type="text" disabled={true} value={roomDetails.roomId}/>
        </div>
        <div className="flex h-9">
          <label className="w-28 text-lg" htmlFor="roomName">Room Name</label>
          <input className="shadow border rounded appearance-none py-2 px-3 focus:outline-none focus:shadow-outline ml-4 text-gray-700" type="text" required  value={roomName} onChange={nameChangeHandler} />
        </div>
        <div className="flex h-9">
          <label className="w-28 text-lg" htmlFor="roomPrice">Room Price</label>
        <CurrencyInput className="shadow border rounded appearance-none py-2 px-3 focus:outline-none focus:shadow-outline ml-4 text-gray-700" prefix="₹" value={roomPrice} intlConfig={{ locale: 'en-IN', currency: 'INR' }} onValueChange={priceChangeHandler}/>
        </div>
        <div className="flex h-9 items-center">``
          <input className="h-5 w-5"   type="checkbox" ref={isChecked} />
          <label className="ml-4 text-sm " htmlFor="roomUpdateCheck">Confirm Edit</label>
          
        </div>
        <div className="text-center">
            <button className="bg-room-button-primary w-28 h-10 rounded hover:-translate-x-1 hover:-translate-y-1 hover:duration-500 duration-500 active:translate-x-0 active:translate-y-0">Update</button>
           
        </div>

      </form>
    </div>
  );
};

export default EditRoom;
