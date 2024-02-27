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
} from "@nextui-org/react";

import { getToken } from "../../utils/localstorage";
import { formatDateTime } from "../../utils/dateTimeFormate";

import {
  useApproveCashRequestMutation,
  useGetAllCashRequestQuery,
  useRejectCashRequestMutation,
} from "../../redux/apis/adminApi";
import { RxCross2 } from "react-icons/rx";
import { TiTick } from "react-icons/ti";
import toast from "react-hot-toast";

export default function AllCashRequest() {
  const token = getToken();
  const { data } = useGetAllCashRequestQuery({ token });
  const [approveCashRequest, { isSuccess, isLoading, isError }] =
    useApproveCashRequestMutation();
  const [
    rejectCashRequest,
    { isSuccess: isSucc, isLoading: isLoad, isError: isErr },
  ] = useRejectCashRequestMutation();

  useEffect(() => {
    if (isLoad || isLoading) {
      toast.loading("Loading...", { id: "i" });
    }
    if (isSucc || isSuccess) {
      toast.success("Success", { id: "i" });
    }
    if (isErr || isError) {
      toast.error("Error", { id: "i" });
    }
  }, [isSucc, isSuccess, isErr, isError, isLoad, isLoading]);
  return (
    <div>
      <div className="flex justify-between items-center mt-5 mb-3 gap-1">
        <h1 className="w-full text-xl">All Cash Request</h1>
      </div>
      <Table aria-label="Example table with custom cells">
        <TableHeader>
          <TableColumn align={"start"}>Name</TableColumn>
          <TableColumn align={"start"}>Account Number</TableColumn>
          <TableColumn align={"start"}>Current Amount</TableColumn>
          <TableColumn align={"start"}>Created At</TableColumn>
          <TableColumn align={"start"}>Status</TableColumn>
          <TableColumn align={"start"}>Actions</TableColumn>
        </TableHeader>
        <TableBody>
          {data?.data?.map((item) => (
            <TableRow key={item?._id}>
              <TableCell>
                {" "}
                <User
                  //   avatarProps={{ radius: "lg", src: auth.avatar }}
                  description={item?.agent?.email}
                  name={item?.agent?.fullName}
                >
                  {item?.agent?.email}
                </User>
              </TableCell>
              <TableCell>
                {" "}
                <div className="flex flex-col">
                  <p className="text-bold text-sm capitalize">
                    {item?.agent?.mobileNumber}
                  </p>
                </div>
              </TableCell>
              <TableCell>
                {" "}
                <p className="text-bold text-sm capitalize">
                  {item?.agent?.agent?.balance} Tk
                </p>
              </TableCell>
              <TableCell>
                <p>{formatDateTime(item?.createdAt)}</p>
              </TableCell>
              <TableCell>
                <Chip className="capitalize" size="sm" variant="flat">
                  {" "}
                  {item?.status}{" "}
                </Chip>
              </TableCell>

              <TableCell className="flex gap-3 items-end mt-3">
                <Tooltip content="Reject Request">
                  <button
                    onClick={() =>
                      rejectCashRequest({
                        data: {
                          agentId: item?.agent?._id,
                          requestId: item?._id,
                        },
                        token,
                      })
                    }
                    className="bg-red-100 text-red-500 rounded "
                  >
                    <RxCross2 className="text-2xl" />{" "}
                  </button>
                </Tooltip>
                <Tooltip content="Accept Request">
                  <button
                    onClick={() =>
                      approveCashRequest({
                        data: {
                          agentId: item?.agent?._id,
                          requestId: item?._id,
                        },
                        token,
                      })
                    }
                    className="bg-green-100 text-green-500 rounded "
                  >
                    <TiTick className="text-2xl" />{" "}
                  </button>
                </Tooltip>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
