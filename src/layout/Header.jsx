import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  User,
} from "@nextui-org/react";

import { useDispatch, useSelector } from "react-redux";

import { logOut } from "../redux/slices/authSlice";
import { IoCall, IoLogOut } from "react-icons/io5";
import { MdCall, MdEmail } from "react-icons/md";
import { IoMdLogOut } from "react-icons/io";

export default function Header() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  console.log({ user });
  const handleLogOut = () => {
    dispatch(logOut());
    localStorage.removeItem("accessToken");
  };
  return (
    <div className="bg-purple-50 px-3 py-3 rounded flex justify-between items-center sticky top-0 z-10">
      <h3 className="text-xl">Dashboard</h3>
      <Dropdown placement="bottom-start">
        <DropdownTrigger>
          <User
            as="button"
            avatarProps={{
              isBordered: true,
            }}
            className="transition-transform"
            description={user?.accountType}
            name={user?.fullName}
          />
        </DropdownTrigger>
        <DropdownMenu aria-label="User Actions" variant="flat">
          <DropdownItem key="profile" className=" gap-2">
            <p className="">Signed in as</p>
            <p className="font-bold text-lg">{user?.fullName}</p>
            <p className="">
              <MdEmail className="inline text-gray-600 mr-1 mb-1" />
              {user?.email}
            </p>
            <p className="mt-1">
              <MdCall className="inline text-gray-600 mr-1 mb-1" />
              {user?.mobileNumber}
            </p>
          </DropdownItem>

          <DropdownItem onClick={handleLogOut} key="logout" color="danger">
            <p className="font-medium ">
              <IoMdLogOut className="inline  mr-1 mb-1 text-lg " />
              Log Out
            </p>
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}
