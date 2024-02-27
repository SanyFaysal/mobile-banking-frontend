import React, { useCallback } from "react";
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
} from "@nextui-org/react";
import { IoEye, IoPencil } from "react-icons/io5";
import { MdBlock } from "react-icons/md";
import { useGetAllUserQuery } from "../../redux/apis/authApi";
import { getToken } from "../../utils/localstorage";
import { formatDateTime } from "../../utils/dateTimeFormate";

const columns = [
  { name: "NAME", uid: "name" },
  { name: "Account Number", uid: "account_number" },
  { name: "Current Balance", uid: "current_balance" },
  { name: "STATUS", uid: "status" },
  { name: "ACTIONS", uid: "actions" },
];

const statusColorMap = {
  active: "success",
  blocked: "danger",
  vacation: "warning",
};

export default function AllUsers() {
  const token = getToken();
  const { data } = useGetAllUserQuery({ userType: "user", token });

  return (
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
          <TableRow key="1">
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
              <div className="relative flex items-center gap-2">
                <Tooltip content="Details">
                  <span className="text-lg text-purple-500  cursor-pointer opacity-100">
                    <IoEye />
                  </span>
                </Tooltip>

                <Tooltip content="Block user">
                  <span className="text-lg text-red-500  cursor-pointer opacity-100">
                    <MdBlock />
                  </span>
                </Tooltip>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
