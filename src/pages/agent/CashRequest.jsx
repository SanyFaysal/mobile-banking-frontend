import React, { useState } from "react";
import { useCashRequestMutation } from "../../redux/apis/agentAPi";
import { getToken } from "../../utils/localstorage";

const CashRequest = () => {
  const token = getToken();
  const [cashRequest, { isSuccess, isError, error }] = useCashRequestMutation();

  return (
    <div className="bg-purple-50 p-5 rounded">
      <h2 className="text-2xl ">
        Agent Cash <span className="text-purple-500">Request</span>
      </h2>
      <p className="mt-2">
        You can request a balance recharge from the admin when needed. After
        approval by the admin, amount (100,000) Tk will be added to your Agent
        account.
      </p>
      <p className="mt-2">Need funds now? Submit a cash request below:</p>
      {!isSuccess ? (
        <button
          onClick={() => cashRequest({ token })}
          className="text-purple-100 mt-6 bg-purple-500 px-5 py-2 rounded-lg "
        >
          Request For Money
        </button>
      ) : (
        <button className="text-slate-500 cursor-default mt-6 bg-purple-100 px-5 py-2 rounded-lg ">
          Request Already Sent
        </button>
      )}
    </div>
  );
};

export default CashRequest;
