import { Listbox, ListboxItem } from "@nextui-org/react";
import { IoAdd } from "react-icons/io5";

export default function SidebarOptions() {
  return (
    <div>
      <div>
        <p className="hover:text-white rounded-lg px-2 py-2 hover:bg-purple-500  duration-300">
          Balance
        </p>
        <p className="hover:text-white rounded-lg px-2 py-2 hover:bg-purple-500  duration-300">
          Send Money
        </p>
        <p className="hover:text-white rounded-lg px-2 py-2 hover:bg-purple-500  duration-300">
          Cash Out
        </p>
        <p className="hover:text-white rounded-lg px-2 py-2 hover:bg-purple-500  duration-300">
          Transactions
        </p>
      </div>
    </div>
  );
}
