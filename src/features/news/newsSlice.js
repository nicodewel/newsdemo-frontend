import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Api } from '../../myApi';

const initialState = {
    news: [],
    status: "idle",
};
const api = new Api();

export const getAllNews = createAsyncThunk(
    "news/getAll",
    async () => {
        const response = await api.api.getAllNews();
        return await response.json();
    }
)

export const newsSlice = createSlice({
    name: "news",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(getAllNews.pending, (state) => { state.status = "loading" })
            .addCase(getAllNews.fulfilled, (state, action) => {
                state.status = "idle";
                state.news = action.payload;
            })
    }
})

export default newsSlice.reducer;