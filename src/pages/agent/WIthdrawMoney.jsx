import { Input } from "@nextui-org/react";
import React, { useEffect, useState } from "react";

import { useWithdrawRequestMutation } from "../../redux/apis/agentAPi";
import toast from "react-hot-toast";
import { getToken } from "../../utils/localstorage";

export default function WithdrawMoney() {
  const token = getToken();
  const [amount, setAmount] = useState();
  const [withdraw, { isSuccess, isError, error }] =
    useWithdrawRequestMutation();

  const handleUserWithdraw = (e) => {
    e.preventDefault();

    const data = {
      amount,
    };
    withdraw({ data, token });
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success("Send money success");
      setAmount(0);
    }
    if (isError) {
      toast.error(error?.data?.error);
    }
  }, [isError, error, isSuccess]);
  return (
    <div className=" flex flex-col  justify-center items-center gap-y-2 ">
      <div className="bg-purple-50 p-5 rounded">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl ">
            Withdraw <span className="text-purple-500">Income</span>{" "}
          </h2>
          <div>
            <h1
              size="lg"
              color="secondary"
              className="text-lg bg-purple-200 px-3 rounded-full pb-1 text-purple-500 font-semibold "
            >
              778855 <span className="text-3xl font-semibold">৳</span>
            </h1>
          </div>
        </div>
        <p className="mt-2">
          You can request an amount withdraw from your account Income to the
          admin. After approval by the admin, you can withdraw money from your
          Agent account income.
        </p>
        <p className="mt-5">Create a Withdraw request </p>
        <form onSubmit={handleUserWithdraw} className="flex gap-2 mt-2 mb-4">
          <Input
            size="sm"
            autoComplete="off"
            className="max-w-[200px]  "
            variant="bordered"
            placeholder="Enter Amount"
            color="secondary"
            type="number"
            name="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <button
            type="submit"
            className="text-purple-100  bg-purple-500 px-5 py-2 rounded-lg "
          >
            Send Request
          </button>
        </form>
      </div>
    </div>
  );
}
