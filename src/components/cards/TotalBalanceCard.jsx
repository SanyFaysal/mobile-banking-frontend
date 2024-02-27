import React, { useState } from "react";

export default function TotalBalanceCard({ user }) {
  const [click, setClick] = useState();
  return (
    <div
      className={`flex flex-col justify-center items-center gap-1 rounded-lg p-2 text-center cursor-pointer px-10 py-8  ${
        click ? "bg-purple-500 text-white" : "bg-purple-50"
      }`}
      onClick={() => setClick(!click)}
    >
      <p className="text-xl font-medium ">Total Balance</p>
      <p className={`  font-bold text-2xl text-wrap ${click ? "" : "blur-sm"}`}>
        {user[user?.accountType].balance}
      </p>
    </div>
  );
}
