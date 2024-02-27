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
      query: () => ({
        url: `/admin/agent-request`,
        method: "GET",
      }),
      providesTags: ["User"],
    }),
    approveAgent: builder.mutation({
      query: ({ agentId }) => ({
        url: `/admin/approve-agent/${agentId}`,
        method: "PATCH",
      }),
      invalidatesTags: ["User"],
    }),
    rejectAgent: builder.mutation({
      query: ({ agentId }) => ({
        url: `/admin/reject-agent/${agentId}`,
        method: "PATCH",
      }),
      invalidatesTags: ["User"],
    }),
  }),
});

export const {
  useBlockUserMutation,
  useUnblockUserMutation,
  useGetAgentRequestsQuery,
  useApproveAgentMutation,
  useRejectAgentMutation,
} = adminApi;
