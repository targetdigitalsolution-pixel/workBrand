import React from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import ListInBell from "./ListOfBell";

const BellMenu = ({ isBellDrawerOpen, toggleBellDrawer }) => {
  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      <div
        className="absolute inset-0 bg-black opacity-50"
        onClick={toggleBellDrawer}
      ></div>
      <div
        className={`bg-white shadow-md transition-transform transform ${
          isBellDrawerOpen ? "translate-x-0" : "translate-x-full"
        } w-[500px] lg:w-[35%] h-full`}
      >
        <div className=" lg:p-8 p-4 h-[100vh] overflow-y-auto">
          <div className="flex justify-between mt-8">
            <h2 className="text-3xl font-bold text-custom-primary">
              Notifications
            </h2>
            <Link onClick={toggleBellDrawer}>
              <XMarkIcon className="w-8 h-8 m-1 cursor-pointer text-custom-primary" />
            </Link>
          </div>
          <hr className="px-8 mt-5" />
          <div className="mt-8 ">
            <ListInBell />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BellMenu;
