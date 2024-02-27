import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getBaseUrl } from "../../config/getBaseUrl";
const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: getBaseUrl(),
  }),
  tagTypes: [
    "Auth",
    "User",
    "Agent",
    "Admin",
    "UserTransactions",
    "CashRequest",
    "Withdraw",
  ],
  endpoints: (builder) => ({}),
});

export default baseApi;
