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
  }),
});

export const { useBlockUserMutation, useUnblockUserMutation } = adminApi;
