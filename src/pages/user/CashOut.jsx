import { Input, Tab, Tabs } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import { IoMdEyeOff } from "react-icons/io";
import { IoEyeOutline } from "react-icons/io5";
import { useCashOutMutation } from "../../redux/apis/userApi";
import { getToken } from "../../utils/localstorage";
import toast from "react-hot-toast";

export default function CashOut() {
  const token = getToken();
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);
  const [cashOut, { isSuccess, isError, error }] = useCashOutMutation();

  const handleCashOut = (e) => {
    e.preventDefault();
    const agentNumber = e.target.agentNumber.value;
    const amount = Number(e.target.amount.value);
    const password = e.target.password.value;
    const data = {
      agentNumber,
      amount,
      password,
    };
    cashOut({ data, token });
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success("Send money success");
    }
    if (isError) {
      toast.error(error?.data?.error);
    }
  }, [isError, error, isSuccess]);
  return (
    <div className=" flex flex-col  justify-center items-center gap-y-2 mt-5">
      <form onSubmit={handleCashOut} className="w-1/2">
        <h1 className="text-2xl my-2 text-purple-500">
          Cash out from your Account{" "}
        </h1>

        <Input
          color="secondary"
          isRequired
          name="agentNumber"
          type="text"
          autoComplete="off"
          label="Agent Account Number"
        />
        <Input
          color="secondary"
          type="number"
          name="amount"
          autoComplete="off"
          isRequired
          label="Enter Amount (Min amount 50 TK)"
          className="my-2"
        />
        <Input
          label="Account Password"
          color="secondary"
          isRequired
          autoComplete="off"
          name="password"
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
        <input
          type="submit"
          value={"Cash Out"}
          className="px-5 py-3 bg-purple-500 text-white rounded-lg ml-auto block mt-4"
        />
      </form>
    </div>
  );
}
