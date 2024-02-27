import baseApi from "../baseApi";

const agentApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getUserTransactions: builder.query({
      query: ({ userId }) => ({
        url: `/transaction/user/${userId}`,
        method: "GET",
        // headers: {
        //   authorization: `Bearer ${token}`,
        // },
      }),
      providesTags: ["UserTransactions"],
    }),
    getAllUserTransactions: builder.query({
      query: () => ({
        url: `/transaction/users`,
        method: "GET",
        // headers: {
        //   authorization: `Bearer ${token}`,
        // },
      }),
      providesTags: ["UserTransactions"],
    }),
    getAllAgentTransactions: builder.query({
      query: () => ({
        url: `/transaction/agents`,
        method: "GET",
        // headers: {
        //   authorization: `Bearer ${token}`,
        // },
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
