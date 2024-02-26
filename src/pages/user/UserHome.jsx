import { useState } from "react";
import TotalBalanceCard from "../../components/cards/TotalBalanceCard";

export default function UserHome() {
  return (
    <div className="flex justify-center gap-4 mt-5">
      <TotalBalanceCard />
      <TotalBalanceCard />
      <TotalBalanceCard />
    </div>
  );
}
