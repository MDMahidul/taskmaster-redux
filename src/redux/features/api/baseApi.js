import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import { data } from 'autoprefixer';

const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
  endpoints:(builder)=>({
    getTasks: builder.query({
        query:()=>'/tasks',
    }),
    updateTask:(builder).mutation({
        query: ({id,data})=>({
            url: `/tasks/${id}`,
            method:'PATCH',
            body:data,
        })
    })
  })
});

export const {useGetTasksQuery,useUpdateTaskMutation}=baseApi;
export default baseApi;
