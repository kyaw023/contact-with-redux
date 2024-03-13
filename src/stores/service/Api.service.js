import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_URL } from "../../lib/constant";

export const contactApi = createApi({
  reducerPath: "contactApi",
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
  }),
  prepareHeaders: (headers) => {
    if (localStorage.getItem("auth")) {
      headers.set(
        "authorization",
        `Bearer ${JSON.parse(localStorage.getItem("auth"))}`
      );
    } else {
      headers.delete("authorization");
    }
    return headers;
  },
  endpoints: (builder) => ({}),
});
