import { useState } from "react";
import TotalBalanceCard from "../../components/cards/TotalBalanceCard";
import { useSelector } from "react-redux";

export default function UserHome() {
  const { user } = useSelector((state) => state.auth);
  const balance = user[user?.accountType].balance;
  return (
    <div className="flex justify-center gap-4 mt-5">
      <TotalBalanceCard balance={balance} title={"Total Balance"} />
    </div>
  );
}
