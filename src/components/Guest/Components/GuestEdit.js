import Select from 'react-select'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { editGuest } from '../../../store/reducers/guestSlice'
const GuestEdit = ({guestNumber}) => {
    const rooms = useSelector(state=>  state.rooms.rooms)
    const {toEdit} = useSelector(state=> state.guest)
    const dispatch = useDispatch()

    const [mobileNumber,setMobileNumber] = useState(toEdit.guestNumber)
    const [guestName,setGuestName] = useState(toEdit.guestName)
    const [selectedRooms,setSelectedRooms] = useState(toEdit.selectedRooms)
    const options = rooms.map(room=>{return {value:room , label:room.roomName}})

    const onBookingSelectHandler = (selectedBooking) => {
      setSelectedRooms(selectedBooking)
  }


  const onNumberChangeHandler = (e)  => {
    const numberRegex = /^[0-9\b]+$/;
    if(e.target.value.length<=10){
      if(numberRegex.test(e.target.value===' '||e.target.value)){
        setMobileNumber(e.target.value)
      }else if(e.target.value.length===0){
        setMobileNumber('')
      }
    }else {

    }
    
  }

  const onNameChangeHanlder = (e) => {
    setGuestName(e.target.value)
  }


    const onSubmitHandler = (event)=>{
      console.log(event.preventDefault())
      const guest  = {
        "guestName" : guestName,
        "guestNumber" : toEdit.guestNumber,
        "editedNumber" : mobileNumber,
        "selectedRooms" :selectedRooms
      }

      dispatch(editGuest(guest))
    }


    return  <div className="flex justify-center items-center h-full w-full">
    <div className="bg-white  w-4/6 p-5 justify-center shadow-xl">
      <div className="text-4xl pt-10 font-light">Edit Guest</div>
      <form className="flex flex-col justify-evenly  gap-6 mt-16" onSubmit={onSubmitHandler} >
        <div className="flex h-9  justify-around">
          <label className="w-36 text-lg" htmlFor="guestName">
             Guest Name
          </label>
          <input
            className="shadow border w-full rounded appearance-none py-2 px-3 focus:outline-none focus:shadow-outline ml-4 text-gray-700"
            type="text"
            required
            value={guestName}
            onChange={onNameChangeHanlder}
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
            <Select className="w-full"  isMulti={true}   options={options} required onChange={onBookingSelectHandler}   defaultValue={toEdit.selectedRooms}/>
        </div>


        <div className="text-center">
          <button className="bg-room-button-primary w-28 h-10 rounded hover:-translate-x-1 hover:-translate-y-1 hover:duration-500 duration-500 active:translate-x-0 active:translate-y-0">
            Add
          </button>
        </div>
      </form>
    </div>
  </div>
}

export default GuestEdit