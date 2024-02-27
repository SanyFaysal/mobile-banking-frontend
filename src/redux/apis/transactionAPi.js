import baseApi from "../baseApi";

const agentApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getUserTransactions: builder.query({
      query: ({ userId }) => ({
        url: `/transaction/${userId}`,
        method: "GET",
        // headers: {
        //   authorization: `Bearer ${token}`,
        // },
      }),
      providesTags: ["UserTransactions"],
    }),
  }),
});

export const { useGetUserTransactionsQuery } = agentApi;
