import baseApi from "../baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (data) => ({
        url: "/auth/register",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Auth"],
    }),
    login: builder.mutation({
      query: (data) => ({
        url: "/auth/login",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Auth"],
    }),
    getAllUser: builder.query({
      query: ({ userType, token }) => ({
        url: `/auth/all/${userType}`,
        method: "GET",
        headers: {
          authorization: `Bearer ${token}`,
        },
      }),
      providesTags: ["USER"],
    }),
  }),
});

export const { useRegisterMutation, useLoginMutation, useGetAllUserQuery } =
  authApi;
