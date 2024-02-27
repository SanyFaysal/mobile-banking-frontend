import React from "react";
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
  useApproveAgentMutation,
  useGetAgentRequestsQuery,
  useRejectAgentMutation,
} from "../../redux/apis/adminApi";
import { TiTick } from "react-icons/ti";
import { RxCross2 } from "react-icons/rx";

export default function AllAgentRequest() {
  const { data } = useGetAgentRequestsQuery();
  const [rejectAgent] = useRejectAgentMutation();
  const [approveAgent] = useApproveAgentMutation();
  return (
    <div>
      <div className="flex justify-between items-center mt-5 mb-3 gap-1">
        <h1 className="w-full text-xl ">
          All <span className="text-purple-500">Agent</span> Requests
        </h1>
      </div>
      <Table aria-label="Example table with custom cells">
        <TableHeader>
          <TableColumn align={"start"}>Name</TableColumn>
          <TableColumn align={"start"}>Account Number</TableColumn>
          <TableColumn align={"start"}>NID</TableColumn>
          <TableColumn align={"start"}>Account Type</TableColumn>
          <TableColumn align={"start"}>Created At</TableColumn>
          <TableColumn align={"start"}>Status</TableColumn>
          <TableColumn align={"start"}>Actions</TableColumn>
        </TableHeader>
        <TableBody>
          {data?.data?.map((auth) => (
            <TableRow key={auth?._id}>
              <TableCell>
                {" "}
                <User
                  //   avatarProps={{ radius: "lg", src: auth.avatar }}
                  description={auth?.email}
                  name={auth?.fullName}
                >
                  {auth?.email}
                </User>
              </TableCell>
              <TableCell>
                <p className=" text-sm capitalize"> {auth?.mobileNumber}</p>
              </TableCell>
              <TableCell>
                <p className="text-xs capitalize"> {auth?.nid}</p>
              </TableCell>

              <TableCell>
                <p className="capitalize">{auth?.accountType}</p>
              </TableCell>
              <TableCell>
                {" "}
                <p>{formatDateTime(auth?.createdAt)}</p>
              </TableCell>
              <TableCell>
                {" "}
                <Chip className="capitalize" size="sm" variant="flat">
                  {auth?.status}
                </Chip>
              </TableCell>
              <TableCell className="flex gap-3 items-end mt-3">
                <Tooltip content="Reject Agent">
                  <button
                    onClick={() => rejectAgent({ agentId: auth?._id })}
                    className="bg-red-100 text-red-500 rounded "
                  >
                    <RxCross2 className="text-2xl" />{" "}
                  </button>
                </Tooltip>
                <Tooltip content="Accept Agent">
                  <button
                    onClick={() => approveAgent({ agentId: auth?._id })}
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
