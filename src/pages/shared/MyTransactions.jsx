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
import { useGetUserTransactionsQuery } from "../../redux/apis/transactionAPi";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const statusColorMap = {
  active: "success",
  blocked: "danger",
  inactive: "warning",
};

export default function MyTransactions() {
  const token = getToken();
  const { user } = useSelector((state) => state.auth);

  const { data } = useGetUserTransactionsQuery({
    userId: user?._id,
    token,
  });

  return (
    <div>
      <div className="flex justify-between items-center mt-5 mb-3 gap-1">
        <h1 className="w-full text-xl">
          All Transactions of <br />
          <span className="text-purple-500">
            {" "}
            {data?.data[0]?.auth?.fullName}
          </span>
        </h1>
      </div>
      <Table aria-label="Example table with custom cells">
        <TableHeader>
          <TableColumn align={"start"}>Name</TableColumn>
          <TableColumn align={"start"}>Account Number</TableColumn>
          <TableColumn align={"start"}>Transaction Details</TableColumn>
          <TableColumn align={"start"}>Transaction Type</TableColumn>
          <TableColumn align={"start"}>Created At</TableColumn>
        </TableHeader>
        <TableBody>
          {data?.data?.map((transaction) => (
            <TableRow key={transaction?._id}>
              <TableCell>
                {" "}
                <User
                  //   avatarProps={{ radius: "lg", src: auth.avatar }}
                  description={transaction?.auth.email}
                  name={transaction?.auth?.fullName}
                >
                  {transaction?.auth.email}
                </User>
              </TableCell>
              <TableCell>
                {" "}
                <div className="flex flex-col">
                  <p className="text-bold text-sm capitalize">
                    {transaction?.auth?.mobileNumber}
                  </p>
                </div>
              </TableCell>
              <TableCell>
                {" "}
                <p className="text-bold text-sm capitalize">
                  {transaction?.amount} Tk
                </p>
              </TableCell>
              <TableCell>
                {" "}
                <Chip className="capitalize" size="sm" variant="flat">
                  {transaction?.transactionType}
                </Chip>
              </TableCell>
              <TableCell>
                {" "}
                <p>{formatDateTime(transaction?.createdAt)}</p>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
