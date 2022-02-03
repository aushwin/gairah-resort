import { useState } from "react";

const Item = ({ itemName, itemPrice, daysValue = true }) => {
  const [days, setDays] = useState(1);
  return (
    <div>
      <div className="flex justify-evenly p-10  border-gray-500">
        <div className="w-full">{itemName}</div>
        <div className="w-full">
          {daysValue && (
            <input
              className="w-10 text-center"
              type="number"
              value={days}
              onChange={(value) => setDays(value.target.value)}
              required
              defaultValue={days}
            />
          )}
        </div>
        <div className="">{itemPrice * days}</div>
      </div>
    </div>
  );
};

export default Item;
