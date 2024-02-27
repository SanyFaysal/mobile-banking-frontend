import React, { useCallback, useEffect, useState } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  User,
  Chip,
  Tooltip,
  getKeyValue,
  Input,
  Button,
  Select,
  SelectItem,
} from "@nextui-org/react";
import { IoEye, IoPencil } from "react-icons/io5";
import { MdBlock } from "react-icons/md";
import { useGetAllUserQuery } from "../../redux/apis/authApi";
import { getToken } from "../../utils/localstorage";
import { formatDateTime } from "../../utils/dateTimeFormate";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import {
  useBlockUserMutation,
  useUnblockUserMutation,
} from "../../redux/apis/adminApi";
import toast from "react-hot-toast";

const statusColorMap = {
  active: "success",
  blocked: "danger",
  inactive: "warning",
};

export default function AllUsers() {
  const token = getToken();
  const [searchTerm, setSearchTerm] = useState("");
  const [value, setValue] = useState("");
  const { data } = useGetAllUserQuery({ userType: "user", token, searchTerm });
  const [blockUser] = useBlockUserMutation();
  const [unblockUser] = useUnblockUserMutation();

  const handleSearchUser = (event) => {
    event.preventDefault();
    const search = event.target.searchTerm.value;
    setSearchTerm(search);
    console.log({ search });
  };

  useEffect(() => {
    if (value?.length === 0) {
      setSearchTerm("");
    }
  }, [value]);
  return (
    <div>
      <div className="flex justify-between items-center mt-5 mb-2 gap-1">
        <h1 className="w-full text-xl">Total User : {data?.data?.length}</h1>
        <form
          onSubmit={handleSearchUser}
          className="flex w-full gap-1 justify-end"
        >
          <Input
            radius="sm"
            type="text"
            autoComplete="off"
            name="searchTerm"
            placeholder="Search User "
            labelPlacement="outside"
            className="w-2/4"
            onChange={(e) => setValue(e.target.value)}
          />
          <button
            type="submit"
            className="px-3 py-3 bg-purple-100 text-purple-500 rounded-lg"
          >
            <FaSearch />
          </button>
        </form>
      </div>
      <Table aria-label="Example table with custom cells">
        <TableHeader>
          <TableColumn align={"start"}>Name</TableColumn>
          <TableColumn align={"start"}>Account Number</TableColumn>
          <TableColumn align={"start"}>Current Balance</TableColumn>
          <TableColumn align={"start"}>Status</TableColumn>
          <TableColumn align={"start"}>Created At</TableColumn>
          <TableColumn align={"center"}>Actions</TableColumn>
        </TableHeader>
        <TableBody>
          {data?.data?.map((auth) => (
            <TableRow key={auth?._id}>
              <TableCell>
                {" "}
                <User
                  avatarProps={{ radius: "lg", src: auth.avatar }}
                  description={auth.email}
                  name={auth?.fullName}
                >
                  {auth.email}
                </User>
              </TableCell>
              <TableCell>
                {" "}
                <div className="flex flex-col">
                  <p className="text-bold text-sm capitalize">
                    {auth?.mobileNumber}
                  </p>
                </div>
              </TableCell>
              <TableCell>
                {" "}
                <p className="text-bold text-sm capitalize">
                  {auth?.user?.balance}
                </p>
              </TableCell>
              <TableCell>
                {" "}
                <Chip
                  className="capitalize"
                  color={statusColorMap[auth.status]}
                  size="sm"
                  variant="flat"
                >
                  {auth?.status}
                </Chip>
              </TableCell>
              <TableCell>
                {" "}
                <p>{formatDateTime(auth?.createdAt)}</p>
              </TableCell>
              <TableCell>
                <div className="relative flex items-center gap-4">
                  <Tooltip content="Transactions">
                    <Link
                      to={`/layout/admin/transactions/${auth?._id}`}
                      className="text-xl text-purple-500  cursor-pointer opacity-100"
                    >
                      <IoEye className="text-xl" />
                    </Link>
                  </Tooltip>

                  {auth?.status === "active" ? (
                    <Tooltip content="Block user">
                      <button
                        onClick={() => blockUser({ token, userId: auth?._id })}
                        className="text-lg text-red-500  cursor-pointer opacity-100"
                      >
                        <MdBlock />
                      </button>
                    </Tooltip>
                  ) : (
                    <Chip
                      size="sm"
                      onClick={() => unblockUser({ token, userId: auth?._id })}
                      className="text-sm   cursor-pointer opacity-100"
                    >
                      Unblock
                    </Chip>
                  )}
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
