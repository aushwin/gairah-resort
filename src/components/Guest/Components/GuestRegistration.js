import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Select from 'react-select'
import AlertHandler from "../../AlertHandler/AlertHandler";

import { notificationSliceActions } from "../../../store/reducers/notificationSlice";

const GuestRegistration = () => {
    const rooms = useSelector(state=>  state.rooms.rooms)
    const notification = useSelector(state => state.notification.message)

    const dispatch = useDispatch()
    const [selectedRoom , setSelectedRoom] = useState([])
    const nameRef = useRef()
    const [mobileNumber,setMobileNumber] = useState('')
    const options = rooms.filter((room)=>room.active===true).map(room=>{return {value:room.roomId , label:room.roomName}})
    const onBookingSelectHandler = (selectedBooking) => {
        setSelectedRoom(selectedBooking)
    }

    const onNumberChangeHandler = (e)  => {
      const numberRegex = /^[0-9\b]+$/;
      console.log(e.target.value.length)
      console.log(numberRegex.test(e.target.value))
      if(e.target.value.length<=10){
        if(numberRegex.test(e.target.value===' '||e.target.value)){
          setMobileNumber(e.target.value)
        }else if(e.target.value.length===0){
          setMobileNumber('')
        }
      }else {
      }
      
    }
    const onGuestRegister = (event)=>{
        event.preventDefault()
        dispatch(notificationSliceActions.isSuccess('Guest Registerd Successfully !'))
        setTimeout(()=>dispatch(notificationSliceActions.reset()),3000)
        console.log(nameRef.current.value)
        console.log(selectedRoom)
    }
  return (
    <div className="flex justify-center items-center h-full w-full">
      <div className="bg-white  w-4/6 p-5 justify-center shadow-xl">
        <div className="text-4xl pt-10 font-light">Register Guest</div>
        <form className="flex flex-col justify-evenly  gap-6 mt-16" onSubmit={onGuestRegister}>
          <div className="flex h-9  justify-around">
            <label className="w-36 text-lg" htmlFor="guestName">
               Guest Name
            </label>
            <input
              className="shadow border w-full rounded appearance-none py-2 px-3 focus:outline-none focus:shadow-outline ml-4 text-gray-700"
              type="text"
              ref={nameRef}
              
              required
            />
          </div>
         
          <div className="flex h-9 justify-around">
            <label className="w-36 sm:text-lg" htmlFor="phonenumber">
             Number
            </label>
            <input
              className="shadow border w-full rounded appearance-none py-2 px-3 focus:outline-none focus:shadow-outline ml-4 text-gray-700"
              type="text"
              required
              value={mobileNumber}
              onChange={onNumberChangeHandler}
              
            />
          </div>
          <div className="flex h-9 justify-around">
              <label className="w-36">Booked</label>
              <Select className="w-full"  isMulti={true} options={options}   onChange={onBookingSelectHandler}/>
          </div>


          <div className="text-center">
            <button className="bg-room-button-primary w-28 h-10 rounded hover:-translate-x-1 hover:-translate-y-1 hover:duration-500 duration-500 active:translate-x-0 active:translate-y-0">
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default GuestRegistration;
