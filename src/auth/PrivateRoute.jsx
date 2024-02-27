import React from "react";

import { Navigate } from "react-router-dom";

import { getToken } from "../utils/localstorage";
import { useSelector } from "react-redux";
import { Spinner } from "@nextui-org/react";

const PrivateRoute = ({ children }) => {
  const token = getToken();
  const { user, isLoading, isSuccess } = useSelector((state) => state.auth);

  console.log(user);
  if (!token) {
    return <Navigate to="/login" replace={true} />;
  }

  if (token && isLoading) {
    return (
      <div className="h-[70vh] w-full flex justify-center items-center">
        {" "}
        <Spinner color="secondary" />
      </div>
    );
  }

  if (token && user?.email && !isLoading && isSuccess) {
    return children;
  }
};

export default PrivateRoute;
