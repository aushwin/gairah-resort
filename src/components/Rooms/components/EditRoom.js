const EditRoom = () => {
    return <div className="bg-red-500 h-screen w-3/12 p-5 pt-10 flex flex-col justify-start gap-20">
        <h2 className="text-4xl font-light">Edit Room</h2>
        <form className="flex">
            <label for="roomId">Room Id</label>
            <input type='text' disabled={true}/>
        </form>
    </div>
}

export default EditRoom