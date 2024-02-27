import { Input, Tab, Tabs } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import { IoMdEyeOff } from "react-icons/io";
import { IoEyeOutline } from "react-icons/io5";
import { useUserCashInMutation } from "../../redux/apis/agentAPi";
import toast from "react-hot-toast";
import { getToken } from "../../utils/localstorage";

export default function UserCashIn() {
  const token = getToken();
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);
  const [userCashIn, { isSuccess, isError, error }] = useUserCashInMutation();

  const handleUserCashIn = (e) => {
    e.preventDefault();

    const userMobileNumber = e.target.userMobileNumber.value;
    const amount = Number(e.target.amount.value);
    const agentPassword = e.target.agentPassword.value;
    const data = {
      userMobileNumber,
      amount,
      agentPassword,
    };
    userCashIn({ data, token });
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
      <form onSubmit={handleUserCashIn} className="w-1/2">
        <h1 className="text-2xl my-2 text-purple-500">
          Cash In To User Account{" "}
        </h1>

        <Input
          color="secondary"
          type="text"
          label="User Account Number"
          isRequired
          autoComplete="off"
          name="userMobileNumber"
        />
        <Input
          color="secondary"
          type="number"
          autoComplete="off"
          isRequired
          name="amount"
          label="Enter Amount (Min amount 50 TK)"
          className="my-2"
        />
        <Input
          label="Your Account Password"
          color="secondary"
          name="agentPassword"
          isRequired
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
          value="Cash In"
          className="px-5 py-3 bg-purple-500 text-white rounded-lg ml-auto block mt-4"
        />
      </form>
    </div>
  );
}
