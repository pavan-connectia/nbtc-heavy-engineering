import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";

export const serviceApi = createApi({
  reducerPath: "service",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_BASE_URL,
  }),
  endpoints: (builder) => ({
    getServiceById: builder.query({
      query: (id) => ({ url: `/service/${id}` }),
    }),
    getServiceByDeptId: builder.query({
      query: () => ({
        url: `/service/department/${import.meta.env.VITE_DEPT_ID}`,
        params: { display: true },
      }),
    }),
  }),
});
export const { useGetServiceByIdQuery, useGetServiceByDeptIdQuery } =
  serviceApi;
