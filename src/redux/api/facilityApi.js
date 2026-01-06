import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";

export const facilityApi = createApi({
  reducerPath: "facility",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_BASE_URL,
  }),
  endpoints: (builder) => ({
    getFacilityById: builder.query({
      query: (id) => ({ url: `/facility/${id}` }),
    }),
    getFacilityByDeptId: builder.query({
      query: () => ({
        url: `/facility/department/${import.meta.env.VITE_DEPT_ID}`,
        params: { display: true },
      }),
    }),
  }),
});
export const { useGetFacilityByIdQuery, useGetFacilityByDeptIdQuery } =
  facilityApi;
