import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState = {
    MovieListData: ''
}

export const MovieListAsync = createAsyncThunk(
    'MovieListData',
    async () => {
        try {
            const res = await fetch('https://multiflex.netlify.app/multiflex/api/movies')
            const result = await res.json();
            console.log('MuslicListResult', result)
            return result;
        } catch (error) {
            console.log(error);
        }
    }
)

const MovieListSlice = createSlice({
    name: 'MovieList',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(MovieListAsync.fulfilled, (state, action) => {
            state.MovieListData = action.payload;
        })
    }
})

export default MovieListSlice.reducer;