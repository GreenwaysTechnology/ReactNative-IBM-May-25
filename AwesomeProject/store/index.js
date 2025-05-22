import { postReducer } from "../slices/posts.slice"
import { ReviewReducer } from "../slices/review.slice"
import { configureStore} from '@reduxjs/toolkit'

const store = configureStore({
    reducer: {
        reviewReducer: ReviewReducer,
        posts:postReducer
    }
})
export { store }