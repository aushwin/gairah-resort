import { useRef, useState } from "react";
import { useSelector } from "react-redux";
import Select from "react-select";
import { Bill } from "./components/index";
const Checkout = () => {
  const guests = useSelector((state) => state.guest.guests);
  const optionGuest = guests.map((guest) => {
    return { value: guest, label: guest.name };
  });

  const [mobileNumber, setMobileNumber] = useState("");
  const emailRef = useRef();

  const onGuestChangeHandler = (e) => {
    console.log(e);
    console.log(emailRef.current.value)
  };

  const onNumberChangeHandler = (e) => {
    const numberRegex = /^[0-9\b]+$/;
    console.log(e.target.value);
    if (e.target.value.length <= 10) {
      if (numberRegex.test(e.target.value === " " || e.target.value)) {
        setMobileNumber(e.target.value);
      } else if (e.target.value.length === 0) {
        setMobileNumber("");
      }
    } else {
    }
  };

  return (
    <div className="w-10/12 h-screen  flex  ">
      <div className="h-screen w-screen p-5 m-2 shadow-2xl">
        <div>
          <div className="text-4xl font-light mb-5 border-b-2 py-10">
            Select User
          </div>
          <Select options={optionGuest} onChange={onGuestChangeHandler} />
        </div>
        
        <div>
          <div className="text-2xl font-light mb-5 border-b-2 py-6 w-2/5">
            Email
          </div>
          <input
            className="shadow border w-3/6 rounded appearance-none py-2 px-3 focus:outline-none focus:shadow-outline ml-4 text-gray-700"
            type="email"
            required
            ref={emailRef}
          />
        </div>

        <div className="mb-5">
        <div className="text-2xl font-light mb-5 border-b-2 py-6 ">
            Summary
          </div>
          <div className=" font-light mb-2">
             Room : 4000
          </div>
          <div className=" font-light mb-2">
             Food : 1000
          </div>
          <div className=" font-light border-b-2 w-2/6 pb-2 mb-2">
             Subtotal : 5000
          </div>
          <div className=" font-bold mb-2">
             Total : 5000
          </div>
        </div>
        
        <div>
          <button className="bg-green-400 px-5 py-2 rounded">Checkout</button>
        </div>
      </div>
      <div className="h-full w-full">
        <Bill />
      </div>
    </div>
  );
};
export default Checkout;
