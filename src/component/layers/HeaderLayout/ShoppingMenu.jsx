import React from "react";
import CustomMainButton from "../../sharedComponents/CustomMainButton";
import ListInCart from "./ListInCart";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const ShoppingMenu = ({ isShoppingOpen, toggleDrawer, handleClickCart }) => {
  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      <div
        className="absolute inset-0 bg-black opacity-50"
        onClick={toggleDrawer}
      ></div>
      <div
        className={`bg-white shadow-md transition-transform transform ${
          isShoppingOpen ? "translate-x-0" : "translate-x-full"
        } w-[500px] lg:w-[35%] h-full`}
      >
        <div className="h-[100vh] overflow-y-auto lg:p-8 p-4">
          <div className="flex justify-between mt-8">
            <h2 className="text-3xl font-bold text-custom-primary">
              Shopping Cart
            </h2>
            <Link onClick={toggleDrawer}>
              <XMarkIcon className="w-8 h-8 m-1 cursor-pointer text-custom-primary" />
            </Link>
          </div>
          <hr className="px-8 mt-5" />
          <div className="mt-10 ">
            <ListInCart />
          </div>
          <div className="flex justify-between my-5">
            <h3 className="text-3xl font-medium ">SubTotal:</h3>
            <h3 className="text-2xl font-medium">45$</h3>
          </div>
          <div className="grid mt-4 place-items-center">
            <CustomMainButton
              text={"Checkout"}
              onClick={handleClickCart}
              fullWidth={true}
            />
            {/* <button
                    onClick={handleClickCart}
                    className="w-full px-6 py-2 text-lg text-white rounded bg-primary-color"
                  >
                    Checkout
                  </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingMenu;
