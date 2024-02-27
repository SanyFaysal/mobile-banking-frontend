import baseApi from "../baseApi";

const adminApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    blockUser: builder.mutation({
      query: ({ userId, token }) => ({
        url: `/admin/user-block/${userId}`,
        method: "PATCH",
        headers: {
          authorization: `Bearer ${token}`,
        },
      }),
      invalidatesTags: ["User"],
    }),
    unblockUser: builder.mutation({
      query: ({ userId, token }) => ({
        url: `/admin/user-unblock/${userId}`,
        method: "PATCH",
        headers: {
          authorization: `Bearer ${token}`,
        },
      }),
      invalidatesTags: ["User"],
    }),
    getAgentRequests: builder.query({
      query: (token) => ({
        url: `/admin/agent-request`,
        method: "GET",
        headers: {
          authorization: `Bearer ${token}`,
        },
      }),
      providesTags: ["User"],
    }),
    approveAgent: builder.mutation({
      query: ({ agentId, token }) => ({
        url: `/admin/approve-agent/${agentId}`,
        method: "PATCH",
        headers: {
          authorization: `Bearer ${token}`,
        },
      }),
      invalidatesTags: ["User"],
    }),
    rejectAgent: builder.mutation({
      query: ({ agentId, token }) => ({
        url: `/admin/reject-agent/${agentId}`,
        method: "PATCH",
        headers: {
          authorization: `Bearer ${token}`,
        },
      }),
      invalidatesTags: ["User"],
    }),
    getAllCashRequest: builder.query({
      query: ({ token }) => ({
        url: `/cashRequest`,
        method: "GET",
        headers: {
          authorization: `Bearer ${token}`,
        },
      }),
      providesTags: ["CashRequest"],
    }),
    approveCashRequest: builder.mutation({
      query: ({ token, data }) => ({
        url: `/cashRequest/approve`,
        method: "PATCH",
        body: data,
        headers: {
          authorization: `Bearer ${token}`,
        },
      }),
      invalidatesTags: ["CashRequest", "Auth"],
    }),
    rejectCashRequest: builder.mutation({
      query: ({ token, data }) => ({
        url: `/cashRequest/reject`,
        method: "PATCH",
        body: data,
        headers: {
          authorization: `Bearer ${token}`,
        },
      }),
      invalidatesTags: ["CashRequest", "Auth"],
    }),
    getAllWithdrawRequest: builder.query({
      query: ({ token }) => ({
        url: `/withdraw`,
        method: "GET",
        headers: {
          authorization: `Bearer ${token}`,
        },
      }),
      providesTags: ["Withdraw"],
    }),
    approveWithdrawRequest: builder.mutation({
      query: ({ token, data }) => ({
        url: `/withdraw/approve`,
        method: "PATCH",
        body: data,
        headers: {
          authorization: `Bearer ${token}`,
        },
      }),
      invalidatesTags: ["Withdraw", "Auth"],
    }),
    rejectWithdrawRequest: builder.mutation({
      query: ({ token, data }) => ({
        url: `/withdraw/reject`,
        method: "PATCH",
        body: data,
        headers: {
          authorization: `Bearer ${token}`,
        },
      }),
      invalidatesTags: ["Withdraw", "Auth"],
    }),
  }),
});

export const {
  useBlockUserMutation,
  useUnblockUserMutation,
  useGetAgentRequestsQuery,
  useApproveAgentMutation,
  useRejectAgentMutation,
  useGetAllCashRequestQuery,

  useApproveCashRequestMutation,
  useRejectCashRequestMutation,

  useGetAllWithdrawRequestQuery,
  useApproveWithdrawRequestMutation,
  useRejectWithdrawRequestMutation,
} = adminApi;
