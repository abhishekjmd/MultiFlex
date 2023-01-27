import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import mongoose from 'mongoose'
const initialState = {
    PostLibrary: '',
    UpdateLibrary: '',
    DeleteLibrary: '',
    GetLibrary: ''
}

export const GetLibraryAsync = createAsyncThunk(
    'GetLibrary',
    async () => {
        try {
            const res = await fetch('https://multiflex.netlify.app/library/getLibrary')
            const result = await res.json();
            console.log("LibraryPlaylist", result);
            return result;
        } catch (error) {
            console.log(error)
        }
    }
)

export const PostLibraryAsync = createAsyncThunk(
    'PostLibrary',
    async (value) => {
        try {
            const res = await fetch('https://multiflex.netlify.app/library/addLibrary', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: value,
                    movies: []
                }),
            })
            const result = await res.json();
            console.log('PostLibrary', result);
            return result;
        } catch (error) {
            console.log(error);
        }
    }
)

export const UpdateLibraryAsync = createAsyncThunk(
    'UpdateLibrary',
    async ({ playlistId, MovieId }) => {
        const Playlist_id = mongoose.Types.ObjectId(playlistId)
        const Movie_id = mongoose.Types.ObjectId(MovieId);
        try {
            const res = await fetch(`https://multiflex.netlify.app/library/updateLibrary/${Playlist_id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(
                    { movieId: MovieId }
                ),
            })
            if (res.ok) {
                const result = await res.json();
                return result;
            }
            throw new Error("Error updating library playlist")
        } catch (error) {
            console.log(error);
        }

    }
)

export const DeleteLibraryAsync = createAsyncThunk(
    'DeleteLibrary',
    async (id) => {
        try {
            const res = await fetch(`https://multiflex.netlify.app/library/deleteLibrary/${id}`, {
                method: 'DELETE'
            })
            const result = await res.json();
            console.log('DeleteLibrary', result)
            return result;
        } catch (error) {
            console.log(error)
        }
    }
)

const LibraryScreenSlice = createSlice({
    name: 'LibraryScreen',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(GetLibraryAsync.fulfilled, (state, action) => {
            state.GetLibrary = action.payload
        })
        builder.addCase(PostLibraryAsync.fulfilled, (state, action) => {
            state.PostLibrary = action.payload
        })
        builder.addCase(DeleteLibraryAsync.fulfilled, (state, action) => {
            // state.status = 'succeeded'
            state.DeleteLibrary = action.payload
        })
        builder.addCase(UpdateLibraryAsync.fulfilled, (state, action) => {
            state.UpdateLibrary = action.payload
        })
    }
})



export default LibraryScreenSlice.reducer