import { Item } from "./index";

const DUMMYDATAROOMS = [
  {
    roomId: "FBC1",
    roomName: "Full Bamboo Cottage 1",
    roomPrice: 499,
    active: false,
  },
  {
    roomId: "FBC2",
    roomName: "Full Bamboo Cottage 2",
    roomPrice: 599,
    active: true,
  },
  {
    roomId: "FBC2",
    roomName: "Full Bamboo Cottage 2",
    roomPrice: 599,
    active: true,
  },
  {
    roomId: "FBC2",
    roomName: "Full Bamboo Cottage 2",
    roomPrice: 599,
    active: true,
  },
  {
    roomId: "FBC2",
    roomName: "Full Bamboo Cottage 2",
    roomPrice: 599,
    active: true,
  },
  {
    roomId: "FBC2",
    roomName: "Full Bamboo Cottage 2",
    roomPrice: 599,
    active: true,
  },
  {
    roomId: "FBC2",
    roomName: "Full Bamboo Cottage 2",
    roomPrice: 599,
    active: true,
  },
  {
    roomId: "FBC2",
    roomName: "Full Bamboo Cottage 2",
    roomPrice: 599,
    active: true,
  },
  {
    roomId: "FBC2",
    roomName: "Full Bamboo Cottage 2",
    roomPrice: 599,
    active: true,
  },
  {
    roomId: "FBC2",
    roomName: "Full Bamboo Cottage 2",
    roomPrice: 599,
    active: true,
  },
];

const DUMMYDATAFOOD = { billName: "restaurent bill", amount: 733 };

const Bill = () => {
  return (
    <div className="w-full h-screen  p-5 ">
      <div className="text-4xl font-light mb-5 border-b-2 py-10">Bill</div>
    
      <div className="flex justify-evenly p-10">
        <div className="w-full font-bold">Name</div>
        <div className="w-full font-bold">Days</div>
        <div className="font-bold">Total</div>
      </div>
      <div className="h-4/6 w-full overflow-scroll"  >
        {DUMMYDATAROOMS.map(({ roomName, roomPrice }) => {
          return <Item itemName={roomName} itemPrice={roomPrice} />;
        })}
        {
          <Item
            itemName={DUMMYDATAFOOD.billName}
            itemPrice={DUMMYDATAFOOD.amount}
            daysValue={false}
          />

        }
      </div>
      <div>
          
      </div>
    </div>
  );
};

export default Bill;
