import { QTY, SIZES } from "../constants";
import Select from "./Select";
import { CiTrash } from "react-icons/ci";
export default function CartItem({ item, setAddedItems }) {
  function removeItem() {
    setAddedItems((prevItems) => {
      const remainingItem = prevItems.filter(
        (prevItem) =>
          prevItem.addedShoe.title !== item.addedShoe.title ||
          prevItem.size !== item.size,
      );
      if (remainingItem.length > 0) {
        return [...remainingItem];
      } else {
        return [];
      }
    });
  }

  return (
    <div className="cursor-pointer space-y-3 bg-gray-50 p-2 hover:bg-[#DAFFA2] dark:bg-transparent dark:hover:bg-night-50">
      <div className="space-x-2s flex">
        {/* Shoe Image */}
        <img className="h-24" src={item.addedShoe.src} />
        {/* Shoe Details*/}
        <div className="space-y-2">
          <div className="font-bold dark:text-white dark:hover:text-night">
            {item.addedShoe.title}
          </div>
          <div className="text-sm text-gray-500 dark:text-gray-300">
            {item.addedShoe.description}
          </div>
        </div>
        <div className="font-bold dark:text-white">${item.addedShoe.price}</div>
      </div>
      <div className="flex justify-between pl-32">
        <div className="flex space-x-6">
          <div>
            <div className="font-bold dark:text-white">QTY</div>
            <Select
              defaultValue={item.qty ? item.qty : QTY[0]}
              title={item.qty ? item.qty : QTY[0]}
              options={QTY}
              className={"pls-2 w-16 p-1"}
            />
          </div>
          <div>
            <div className="font-bold dark:text-white">SIZE</div>
            <Select
              defaultValue={item.size ? item.size : SIZES[0]}
              title={item.size ? item.size : SIZES[0]}
              options={SIZES}
              className={"w-16 p-1 pl-2"}
            />
          </div>
        </div>
        <button onClick={removeItem} className="dark:text-white button-press-animate hover:scale-125">
          <CiTrash size={25}></CiTrash>
        </button>
      </div>
    </div>
  );
}
