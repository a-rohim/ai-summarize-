import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

const options = {
    method: 'GET',
    url: 'https://article-extractor-and-summarizer.p.rapidapi.com/summarize',
    params: {
        url: 'https://article-extractor-and-summarizer.p.rapidapi.com/',
        length: '3'
    },
    headers: {
        'X-RapidAPI-Key': 'ee276dc78dmsh22521d3fbfb0535p1fbc88jsnfac0b2b1bad7',
        'X-RapidAPI-Host': 'article-extractor-and-summarizer.p.rapidapi.com'
    }
};

const rapidapiKey = import.meta.env.VITE_RAPID_API_ARTICLE_KEY
export const articleApi = createApi({
    reducerPath: "articleApi",
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://article-extractor-and-summarizer.p.rapidapi.com/',

        prepareHeaders: (headers) => {
            //header.set("access-control-allow-credentials", "true")
            // headers.set("method", "GET")
            headers.set('X-RapidAPI-Key', rapidapiKey);
            headers.set('X-RapidAPI-Host', 'article-extractor-and-summarizer.p.rapidapi.com');

            return headers;
        }

    }),
    endpoints: (builder) => ({
        getSummary: builder.query({
            // encodeURIComponent() function encodes special characters that may be present in the parameter values
            // If we do not properly encode these characters, they can be misinterpreted by the server and cause errors or unexpected behavior. Thus that RTK bug
            query: (params) => `summarize?url=${encodeURIComponent(params.articleUrl)}&length=3`,
        }),
    }),
})

export const { useLazyGetSummaryQuery } = articleApi