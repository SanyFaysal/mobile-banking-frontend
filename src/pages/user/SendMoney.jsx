import { Input } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { useSendMoneyMutation } from "../../redux/apis/userApi";
import { getToken } from "../../utils/localstorage";
import toast from "react-hot-toast";

export default function SendMoney() {
  const token = getToken();
  const [sendMoney, { isSuccess, isError, error }] = useSendMoneyMutation();

  const handleSendMoney = (e) => {
    e.preventDefault();

    const mobileNumber = e.target.mobileNumber.value;
    const amount = e.target.amount.value;
    const data = {
      mobileNumber,
      amount,
    };
    sendMoney({ data, token });
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
    <div>
      <div className=" flex flex-col  justify-center items-center gap-y-2 mt-5">
        <form onSubmit={handleSendMoney} className="w-1/2">
          <h1 className="text-2xl my-2 text-purple-500">Send Money </h1>
          <Input
            color="secondary"
            type="text"
            name="mobileNumber"
            autoComplete="off"
            isRequired
            label="Recipient's Mobile Number"
          />
          <Input
            color="secondary"
            type="number"
            name="amount"
            isRequired
            autoComplete="off"
            label="Enter Amount (Min amount 50 TK)"
            className="my-2"
          />
          <button className="px-5 py-3 bg-purple-500 text-white rounded-lg ml-auto block mt-4">
            Send{" "}
          </button>
        </form>
      </div>
    </div>
  );
}
