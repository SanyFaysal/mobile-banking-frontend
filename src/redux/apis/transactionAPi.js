import baseApi from "../baseApi";

const agentApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getUserTransactions: builder.query({
      query: ({ userId, token }) => ({
        url: `/transaction/user/${userId}`,
        method: "GET",
        headers: {
          authorization: `Bearer ${token}`,
        },
      }),
      providesTags: ["UserTransactions"],
    }),
    getAllUserTransactions: builder.query({
      query: (token) => ({
        url: `/transaction/users`,
        method: "GET",
        headers: {
          authorization: `Bearer ${token}`,
        },
      }),
      providesTags: ["UserTransactions"],
    }),
    getAllAgentTransactions: builder.query({
      query: (token) => ({
        url: `/transaction/agents`,
        method: "GET",
        headers: {
          authorization: `Bearer ${token}`,
        },
      }),
      providesTags: ["UserTransactions"],
    }),
  }),
});

export const {
  useGetUserTransactionsQuery,
  useGetAllUserTransactionsQuery,
  useGetAllAgentTransactionsQuery,
} = agentApi;
