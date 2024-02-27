import React from "react";
import { Link, useLocation, useParams, useRoutes } from "react-router-dom";

export default function ActiveSideOption({ item }) {
  const location = useLocation();
  console.log({ location });
  return (
    <Link
      to={item?.link}
      className={`hover:text-white rounded-lg px-2 py-2 hover:bg-purple-900
        ${
          location?.pathname === item?.link
            ? "bg-purple-500 text-white"
            : "bg-none"
        }
        `}
    >
      {item?.title}
    </Link>
  );
}
