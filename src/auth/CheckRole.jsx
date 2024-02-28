import { Link, Navigate } from "react-router-dom";

import { getToken } from "../utils/localstorage";
import { useSelector } from "react-redux";
import { Spinner } from "@nextui-org/react";

const CheckRole = ({ role, children }) => {
  const token = getToken();
  const { user, isLoading, isSuccess } = useSelector((state) => state.auth);

  if (user?.accountType !== role) {
    return (
      <div className="h-[70vh] w-full flex flex-col justify-center items-center">
        {" "}
        <p>You are not authorized </p>
        <Link
          to={`/${user?.accountType}`}
          className="bg-purple-500 text-white px-3 py-2 rounded mt-3"
        >
          Go Back
        </Link>
      </div>
    );
  }

  if (token && isLoading) {
    return (
      <div className="h-[70vh] w-full flex justify-center items-center">
        {" "}
        <Spinner color="secondary" />
      </div>
    );
  }

  if (
    token &&
    user?.email &&
    !isLoading &&
    isSuccess &&
    user?.accountType === role
  ) {
    return children;
  }
};

export default CheckRole;
