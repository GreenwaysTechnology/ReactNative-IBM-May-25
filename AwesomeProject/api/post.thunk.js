import { createAsyncThunk } from '@reduxjs/toolkit'

const getPosts = createAsyncThunk('posts/getPosts', async (thunkAPI) => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts = await res.json()
    return posts
})

export { getPosts }