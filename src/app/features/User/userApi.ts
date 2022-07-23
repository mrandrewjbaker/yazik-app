import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setUser } from "./user.slice";

const BASE_URL = process.env.REACT_APP_SERVER_ENDPOINT as string;

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}/api/auth/`,
  }),
  tagTypes: ["User"],
  endpoints: (builder) => ({
    getMe: builder.query<any, null>({
      query() {
        return {
          url: "me",
          credentials: "include",
        };
      },
      transformResponse: (result: { data: { user: any } }) => result.data.user,
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setUser(data));
        } catch (error) {}
      },
    }),
  }),
});
