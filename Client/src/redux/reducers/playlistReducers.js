import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
    PlaylistData: '',
    MovieListData: ''
}

export const PlaylistAsync = createAsyncThunk(
    'PlaylistData',
    async () => {
        try {
            const res = await fetch('http://192.168.0.106:3000/api/Top_playlist/getTopPlaylist')
            const result = await res.json();
            console.log('result', result)
            return result;
        } catch (error) {
            console.log
        }
    }
)

const HomeScreenSlice = createSlice({
    name: 'HomeScreen',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(PlaylistAsync.fulfilled, (state, action) => {
            state.PlaylistData = action.payload
            // state.MovieListData = action.payload.movies
        })
    }
})

export default HomeScreenSlice.reducer