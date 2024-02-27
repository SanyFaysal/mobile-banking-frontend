import React, { useEffect } from "react";
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
  useApproveWithdrawRequestMutation,
  useGetAllWithdrawRequestQuery,
  useRejectWithdrawRequestMutation,
} from "../../redux/apis/adminApi";
import { RxCross2 } from "react-icons/rx";
import { TiTick } from "react-icons/ti";
import toast from "react-hot-toast";

export default function AllWithdrawRequest() {
  const token = getToken();
  const { data } = useGetAllWithdrawRequestQuery({ token });
  const [approveWithdrawRequest, { isSuccess, isLoading, isError, error }] =
    useApproveWithdrawRequestMutation();
  const [
    rejectWithdrawRequest,
    { isSuccess: isSucc, isLoading: isLoad, isError: isErr, error: err },
  ] = useRejectWithdrawRequestMutation();

  useEffect(() => {
    if (isLoad || isLoading) {
      toast.loading("Loading...", { id: "i" });
    }
    if (isSucc || isSuccess) {
      toast.success("Success", { id: "i" });
    }
    if (isErr) {
      toast.error(err?.data?.error, { id: "i" });
    }
    if (isError) {
      toast.error(error?.data?.error, { id: "i" });
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
          <TableColumn align={"start"}>Current Income</TableColumn>
          <TableColumn align={"start"}>Withdraw Amount</TableColumn>
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
                  {item?.agent?.agent?.income} Tk
                </p>
              </TableCell>
              <TableCell>
                {" "}
                <p className="text-bold text-sm capitalize">
                  {item?.amount} Tk
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
                      rejectWithdrawRequest({
                        data: {
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
                      approveWithdrawRequest({
                        data: {
                          agentId: item?.agent?._id,
                          requestId: item?._id,
                          amount: item?.amount,
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
