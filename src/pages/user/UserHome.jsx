import { useState } from "react";
import TotalBalanceCard from "../../components/cards/TotalBalanceCard";
import { useSelector } from "react-redux";

export default function UserHome() {
  const { user } = useSelector((state) => state.auth);
  return (
    <div className="flex justify-center gap-4 mt-5">
      <TotalBalanceCard user={user} />
    </div>
  );
}
