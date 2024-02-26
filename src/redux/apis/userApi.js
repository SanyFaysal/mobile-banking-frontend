import baseApi from "../baseApi";

const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    sendMoney: builder.mutation({
      query: ({ data, token }) => ({
        url: "/user/send-money",
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

export const { useSendMoneyMutation } = userApi;
