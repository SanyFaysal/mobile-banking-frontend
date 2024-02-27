import { Listbox, ListboxItem } from "@nextui-org/react";
import { IoAdd } from "react-icons/io5";
import { useSelector } from "react-redux";
import { adminLinks, agentLinks, userLinks } from "../constant/navData";
import ActiveSideOption from "../components/reuseable/ActiveSideOption";

export default function SidebarOptions() {
  const { user } = useSelector((state) => state.auth);
  console.log({ user });
  return (
    <div className="flex flex-col gap-y-1">
      {user?.accountType === "user" &&
        userLinks?.map((item, index) => (
          <ActiveSideOption key={index} item={item} />
        ))}
      {user?.accountType === "agent" &&
        agentLinks?.map((item, index) => (
          <ActiveSideOption key={index} item={item} />
        ))}
      {user?.accountType === "admin" &&
        adminLinks?.map((item, index) => (
          <ActiveSideOption key={index} item={item} />
        ))}
    </div>
  );
}
