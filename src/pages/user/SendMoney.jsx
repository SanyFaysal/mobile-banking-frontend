import { Input } from "@nextui-org/react";
import { useState } from "react";

export default function SendMoney() {
  const [amount, setAmount] = useState(0);
  return (
    <div>
      <div className=" flex flex-col  justify-center items-center gap-y-2">
        <div className="w-1/2">
          <h1 className="text-2xl my-2 text-purple-500">Send Money </h1>
          <Input color="secondary" type="text" label="Sender Phone Number" />
          <Input
            color="secondary"
            type="number"
            label="Enter Amount (Min amount 50 TK)"
            className="my-2"
          />
          <button className="px-5 py-3 bg-purple-500 text-white rounded-lg ml-auto block mt-4">
            Send{" "}
          </button>
        </div>
      </div>
    </div>
  );
}
