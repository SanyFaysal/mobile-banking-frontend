import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8080/api/v1",
  }),
  tagTypes: ["Auth", "User", "Agent", "Admin"],
  endpoints: (builder) => ({}),
});

export default baseApi;
