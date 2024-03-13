import { contactApi } from "../service/Api.service";

const contactEndpoint = contactApi.injectEndpoints({
  endpoints: (builder) => ({
    getContacts: builder.query({
      query: () => ({
        method: "GET",
        url: "/contact",
        headers: {
          Authorization: `Bearer ${JSON.parse(localStorage.getItem("auth"))}`,
        },
      }),
    }),
    createContact: builder.mutation({
      query: (formData) => ({
        url: "/contact",
        method: "POST",
        body: formData,
        headers: {
          Authorization:
            localStorage.getItem("auth") &&
            `Bearer ${JSON.parse(localStorage.getItem("auth"))}`,
        },
      }),
    }),

    editContact: builder.mutation({
      query: (id, formData) => ({
        url: `/contact/${id}`,
        method: "PUT",
        body: formData,
        headers: {
          Authorization:
            localStorage.getItem("auth") &&
            `Bearer ${JSON.parse(localStorage.getItem("auth"))}`,
        },
      }),
    }),
    login: builder.mutation({
      query: (formData) => ({
        url: `/login`,
        method: "POST",
        body: formData,
        headers: {
          Authorization:
            localStorage.getItem("auth") &&
            `Bearer ${JSON.parse(localStorage.setItem("auth"))}`,
        },
      }),
    }),
  }),
});

export const {
  useGetContactsQuery,
  useCreateContactMutation,
  useEditContactMutation,
  useLoginMutation,
} = contactEndpoint;
