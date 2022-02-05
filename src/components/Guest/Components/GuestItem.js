const GuestItem = ({guestName,guestNumber,selectedRooms}) => {
    return (
        <div className="flex items-center p-5 shadow m-2 hover:bg-room-item-hover">
            <div className="w-1/3 text-center font-light">{guestName}</div>
            <div className="w-1/3 text-center font-light">{guestNumber}</div>
            <div className="w-1/3 flex gap-1 flex-wrap font-light">
                <div>Room 1</div>
                <div>Room 2</div>
                <div>Room 3</div>
                
            </div>
        </div>
    )

}


export default GuestItem