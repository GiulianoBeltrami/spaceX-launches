import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = 'https://api.spacexdata.com';

const createRequest = (url) => ({ url: url })

export const spacexAPI = createApi({
    reducerPath: 'spacexAPI',
    baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
    endpoints: (builder) => ({
        getSpacexInfos: builder.query({
            query: () => createRequest(`/v4/company`),
        }),
    })
});

export const {
    useGetSpacexInfosQuery
} = spacexAPI;