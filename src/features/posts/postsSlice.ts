import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { fetchData } from "./postsApi"
import { IPostsState, EStatus, TPicturesData } from "./types"

const initialState: IPostsState = {
    status: EStatus.IDLE,
    error: null,
    data: [],
}
export const getPosts = createAsyncThunk("posts/getPosts", async () => {
    const data = await fetchData()
    return data
})

export const getCurrentPosts = createAsyncThunk("posts/getPosts", async () => {
    const data = await fetchData()
    return data
})

const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getPosts.pending, (state) => {
                state.status = EStatus.PENDING
            })
            .addCase(getPosts.fulfilled, (state, action) => {
                state.status = EStatus.FULLFILED
                state.data = action.payload.data as TPicturesData[]
                state.error = null
            })
            .addCase(getPosts.rejected, (state, action) => {
                state.status = EStatus.REJECTED
                state.error = action.error.message || "Something went wrong."
            })
    },
})
export default postsSlice.reducer
