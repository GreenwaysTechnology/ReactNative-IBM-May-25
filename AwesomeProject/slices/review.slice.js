import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    like: 0,
}
const ReviewSlice = createSlice({
    initialState,
    name: 'review',
    reducers: {
        increment(state, action) {
            state.like++
        }
    }
})
//extract reducer from the slice
const ReviewReducer = ReviewSlice.reducer
//extract actions from the slice
const { increment } = ReviewSlice.actions

//export Reducer and actions
export { ReviewReducer, increment }