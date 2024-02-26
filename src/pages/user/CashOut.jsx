import { Input, Tab, Tabs } from "@nextui-org/react";
import React, { useState } from "react";
import { IoMdEyeOff } from "react-icons/io";
import { IoEyeOutline } from "react-icons/io5";

export default function CashOut() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <div className=" flex flex-col  justify-center items-center gap-y-2 mt-5">
      <div className="w-1/2">
        <h1 className="text-2xl my-2 text-purple-500">
          Cash out from your Account{" "}
        </h1>

        <Input color="secondary" type="text" label="Agent Number" />
        <Input
          color="secondary"
          type="number"
          label="Enter Amount (Min amount 50 TK)"
          className="my-2"
        />
        <Input
          label="Account Password"
          color="secondary"
          endContent={
            <button
              className="focus:outline-none"
              type="button"
              onClick={toggleVisibility}
            >
              {isVisible ? (
                <IoMdEyeOff className="text-2xl text-default-400 pointer-events-none" />
              ) : (
                <IoEyeOutline className="text-2xl text-default-400 pointer-events-none" />
              )}
            </button>
          }
          type={isVisible ? "text" : "password"}
        />
        <button className="px-5 py-3 bg-purple-500 text-white rounded-lg ml-auto block mt-4">
          Cash Out
        </button>
      </div>
    </div>
  );
}
