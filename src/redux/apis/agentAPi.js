import baseApi from "../baseApi";

const agentApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    userCashIn: builder.mutation({
      query: ({ data, token }) => ({
        url: "/agent/user-cash-in",
        method: "POST",
        headers: {
          authorization: `Bearer ${token}`,
        },
        body: data,
      }),
      invalidatesTags: ["Auth"],
    }),
  }),
});

export const { useUserCashInMutation } = agentApi;
