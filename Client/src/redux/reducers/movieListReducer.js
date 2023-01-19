import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState = {
    MovieListData: ''
}

export const MovieListAsync = createAsyncThunk(
    'MovieListData',
    async () => {
        try {
            const res = await fetch('http://192.168.0.106:4000/multiflex/api/movies')
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