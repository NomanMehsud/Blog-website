import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  tagTypes: ["Posts"],
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => "posts?_limit=20", 
      providesTags: ["Posts"],
    }),
    createPosts: builder.mutation({
      query: (newPost) => ({
        url: "posts",
        method: "POST",
        body: newPost,
      }),
      invalidatesTags: ["Posts"],
    }),
    deletePost: builder.mutation({
      query: (id) => ({
        url: `posts/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Posts"],
    }),
    updatePost: builder.mutation({
      query: ({ id, ...rest }) => ({
        url: `posts/${id}`,
        method: "PUT",
        body: rest,
      }),
      invalidatesTags: ["Posts"],
    }),
  }),
});

export const {useGetPostsQuery,useCreatePostsMutation,useDeletePostMutation,useUpdatePostMutation} = apiSlice;
