import Select from "./Select";
import { QTY, SIZES } from "../constants.js";
import { useRef } from "react";
export default function ShoeDetail({ selectedShoe, setAddedItems }) {
  const qtyRef = useRef();
  const sizeRef = useRef();

  function addItemToBag() {
    const itemToBeAdded = {
      addedShoe: selectedShoe,
      qty: parseInt(qtyRef.current.value),
      size: sizeRef.current.value,
    };
    setAddedItems((prevItems) => {
      const addedItems = prevItems.filter(
        (item) => item.addedShoe.title === selectedShoe.title,
      );
      if (prevItems.length == 0) {
        return [itemToBeAdded];
      } else {
        if (addedItems.length > 0) {
          const itemFound = prevItems.find(
            (item) =>
              item.addedShoe.title === selectedShoe.title &&
              item.size === sizeRef.current.value,
          );
          if (itemFound && itemFound.size === sizeRef.current.value) {
            const remainingItem = prevItems.filter(
              (item) =>
                item.addedShoe.title !== selectedShoe.title ||
                item.size !== sizeRef.current.value,
            );

            itemFound.qty += parseInt(qtyRef.current.value);
            return [...remainingItem, itemFound];
          } else {
            return [...prevItems, itemToBeAdded];
          }
        } else {
          return [...prevItems, itemToBeAdded];
        }
      }
    });
  }

  return (
    <div className="flex flex-col space-y-4 dark:text-white lg:flex-row-reverse">
      {/* Shoe Image */}
      <div className="flex-1 lg:-mt-32 lg:ml-32">
        <div className="flex-center h-full bg-gradient-to-br from-[#F637CF] via-[#E3D876] to-[#4DD4C6]">
          <img className="animate-float" src={selectedShoe.src}></img>
        </div>
      </div>
      {/* Shoe Details*/}
      <div className="flex-1 space-y-4">
        <div className="text-5xl font-black md:text-9xl">
          {selectedShoe.title}
        </div>
        <div className="font-medium md:text-xl">{selectedShoe.description}</div>
        <div className="flex space-x-4">
          <div className="text-3xl font-extrabold md:text-6xl">
            ${selectedShoe.price}
          </div>
          <div>
            <Select
              selectRef={qtyRef}
              title={"QTY"}
              options={QTY}
              defaultValue={QTY[0]}
            ></Select>
          </div>
          <div>
            <Select
              selectRef={sizeRef}
              title={"SIZE"}
              options={SIZES}
              defaultValue={SIZES[0]}
            ></Select>
          </div>
        </div>
        {/* Shoe buttons and links */}
        <div className="space-x-10">
          <button
            onClick={addItemToBag}
            className="button-press-animate h-14 w-44 bg-black text-white hover:bg-gray-900 active:bg-gray-700 dark:bg-white dark:text-night dark:hover:bg-gray-400"
          >
            Add to bag
          </button>
          <a
            href="#"
            className="text-lg font-bold underline underline-offset-4 dark:text-white"
          >
            ViewDetails
          </a>
        </div>
      </div>
    </div>
  );
}
