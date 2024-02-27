import React, { useState } from "react";

const CashRequest = () => {
  const [requestAmount, setRequestAmount] = useState("");
  const [isRequestSubmitted, setRequestSubmitted] = useState(false);

  const handleRequestAmountChange = (event) => {
    setRequestAmount(event.target.value);
  };

  const handleRequestSubmit = () => {
    // Assuming you have a function to send the cash request to the server
    // This is where you would typically make an API call to the server
    // to submit the cash request and wait for approval
    // For simplicity, I'm just setting a flag to simulate the request submission

    // Simulate API call
    // In a real application, replace this with your actual API call
    setTimeout(() => {
      setRequestSubmitted(true);
    }, 2000);
  };

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
      <button className="text-purple-100 mt-6 bg-purple-500 px-5 py-2 rounded-lg ">
        Request For Money
      </button>
    </div>
  );
};

export default CashRequest;
