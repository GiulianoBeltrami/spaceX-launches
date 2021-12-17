import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const spacexNewsApiHeaders = {
    'x-bingapis-sdk': 'true',
    'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
    'x-rapidapi-key': '84cc95c7a0msh7489af14c60e5c6p176712jsn6d3bddd7ffe9'
};

const baseUrl = 'https://bing-news-search1.p.rapidapi.com';

const createRequest = (url) => ({ url: url, headers: spacexNewsApiHeaders })

export const spacexNewsAPI = createApi({
    reducerPath: 'spacexNewsAPI',
    baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
    endpoints: (builder) => ({
        getSpacexNews: builder.query({
            query: ({ newsCategory, count }) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),
        }),
    })
});

export const {
    useGetSpacexNewsQuery,
} = spacexNewsAPI;