import Nav from "./components/Nav";
import ShoeDetail from "./components/ShoeDetial";
import { SHOE_LIST } from "./constants";
import NewArrivalsSeciton from "./components/NewArrivalsSeciton";
import Sidebar from "./components/Sidebar";
import { useEffect, useState } from "react";
import Cart from "./components/Cart";
import { BiMoon, BiSun } from "react-icons/bi";
export function App() {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const [selectedShoe, setSelectedShoe] = useState(SHOE_LIST[0]);
  const [addedItems, setAddedItems] = useState([]);

  useEffect(() => {
    const darkMode = localStorage.getItem("darkMode");
    if (darkMode) {
      window.document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDark = () => {
    window.document.documentElement.classList.toggle("dark");
    if (window.document.documentElement.classList.contains("dark")) {
      localStorage.setItem("darkMode", true);
    }
  };

  return (
    <div className="animate-fadein p-4 dark:bg-night xl:p-6">
      <Nav onClickShoppingButton={() => setIsSideBarOpen(true)} />
      <ShoeDetail selectedShoe={selectedShoe} setAddedItems={setAddedItems} />
      <NewArrivalsSeciton items={SHOE_LIST} setSelectedShoe={setSelectedShoe} />
      <Sidebar
        isOpen={isSideBarOpen}
        onClickClose={() => setIsSideBarOpen(false)}
      >
        <Cart cartItems={addedItems} setAddedItems={setAddedItems} />
      </Sidebar>
      <div className="fixed bottom-4 right-4 z-50">
        <button
          onClick={toggleDark}
          className="rounded-full bg-night-50 px-4 py-2 text-white dark:bg-white dark:text-night"
        >
          <BiSun className="hidden dark:block"></BiSun>
          <BiMoon className="dark:hidden"></BiMoon>
        </button>
      </div>
    </div>
  );
}
