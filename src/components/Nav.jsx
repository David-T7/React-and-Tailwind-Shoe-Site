import { TbShoppingBag } from "react-icons/tb";
import NikeLogo from "../assets/nike-logo.svg?react";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import { twMerge } from "tw-merge";
const Router = ["Home", "About", "Services", "Pricing", "Contact"];

export default function Nav({ onClickShoppingButton }) {
  const [isMoblieMenuHidden, setIsMobileMenuHidden] = useState(false);

  return (
    <nav className="relative z-10 mb-3 flex flex-wrap items-center justify-between md:mb-0">
      {/* Logo */}
      <NikeLogo className="h-20 w-20 dark:fill-white" />

      {/* Burger Button */}
      <button
        className="rounded-lg p-2 hover:bg-gray-100 focus:ring-2 focus:ring-gray-200 dark:text-white dark:hover:bg-gray-700 lg:hidden"
        onClick={() => setIsMobileMenuHidden(!isMoblieMenuHidden)}
      >
        <RxHamburgerMenu size={30} />
      </button>
      {/* Menu  List */}
      <div className={`${isMoblieMenuHidden && "hidden"} w-full lg:w-auto`}>
        <ul className="flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 text-lg dark:bg-night lg:flex-row lg:space-x-8 lg:border-none lg:bg-transparent lg:dark:bg-transparent lg:dark:text-white">
          {Router.map((route, i) => {
            return (
              <li
                key={route}
                className={twMerge(
                  `cursor-pointer rounded px-3 py-2 dark:text-white dark:hover:bg-white dark:hover:text-night lg:hover:bg-transparent lg:hover:text-blue-500 lg:dark:hover:bg-transparent lg:dark:hover:text-blue-500 ${i == 0 ? "bg-blue-500 dark:bg-white dark:text-night lg:bg-transparent lg:text-blue-500 lg:dark:bg-transparent lg:dark:text-blue-500" : "hover:bg-gray-200"} ${i == 3 || i == 4 ? "lg:text-white" : ""}`,
                )}
              >
                {route}
              </li>
            );
          })}
        </ul>
      </div>
      {/* Cart Button */}
      <div
        onClick={onClickShoppingButton}
        className="fixed bottom-4 left-4 lg:static lg:mr-8"
      >
        <div className="button-press-animate flex-center h-12 w-12 cursor-pointer justify-center rounded-full bg-white shadow-md">
          <TbShoppingBag />
        </div>
      </div>
    </nav>
  );
}
