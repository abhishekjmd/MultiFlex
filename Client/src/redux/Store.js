import { configureStore } from "@reduxjs/toolkit";
import movieListReducer from "./reducers/movieListReducer";
import HomeScreenSlice from './reducers/playlistReducers'

const store = configureStore({
    reducer: {
        HomeReducer: HomeScreenSlice,
        SearchReducer: movieListReducer
    },
     middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})
export default store