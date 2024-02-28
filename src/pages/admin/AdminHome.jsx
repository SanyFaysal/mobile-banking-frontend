import { useState } from "react";
import TotalBalanceCard from "../../components/cards/TotalBalanceCard";
import { useSelector } from "react-redux";

export default function AdminHome() {
  const { user } = useSelector((state) => state.auth);

  const income = user[user?.accountType].income;
  return (
    <div className="flex justify-center gap-4 mt-5">
      <TotalBalanceCard balance={income} title={"Total Income"} />
    </div>
  );
}
