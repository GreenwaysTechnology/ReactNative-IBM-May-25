import { getPosts } from "../api/post.thunk"
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    entities: [],
    loading: false,
}

const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(getPosts.pending, (state, action) => {
            state.loading = true
        }).addCase(getPosts.fulfilled, (state, { payload }) => {
            state.loading = false
            state.entities = payload
        }).addCase(getPosts.rejected, (state, action) => {
            state.loading = false
        })
    }

})
export const postReducer = postSlice.reducer
// export { postReducer }