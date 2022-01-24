const EditRoom = () => {
  return (
    <div className=" h-screen w-3/12 p-5 pt-10 flex flex-col justify-start gap-20">
      <h2 className="text-4xl font-light">Edit Room</h2>
      <form className="flex flex-col justify-evenly gap-5">
        <div className="flex h-9">
          <label className="w-28 text-lg" for="roomId">Room Id</label>
          <input className="shadow border rounded  py-2 px-3 focus:outline-none focus:shadow-outline ml-4 disabled:bg-gray-100" type="text" disabled={true} />
        </div>
        <div className="flex h-9">
          <label className="w-28 text-lg" for="roomId">Room Name</label>
          <input className="shadow border rounded appearance-none py-2 px-3 focus:outline-none focus:shadow-outline ml-4 text-gray-700" type="text" required />
        </div>
        <div className="flex h-9">
          <label className="w-28 text-lg" for="roomId">Room Price</label>
          <input className="shadow border rounded appearance-none py-2 px-3 focus:outline-none focus:shadow-outline ml-4 text-gray-700" type="text" required />
        </div>
        <div className="flex h-9 items-center">
          <input className="h-5 w-5"   type="checkbox" />
          <label className="ml-4 text-sm " for="roomId">Confirm Edit</label>
        </div>
        <div className="text-center">
            <button className="bg-room-button-primary w-28 h-10 rounded hover:-translate-x-1 hover:-translate-y-1 hover:duration-500 duration-500 active:translate-x-0 active:translate-y-0">Update</button>
        </div>
       

      </form>
    </div>
  );
};

export default EditRoom;
