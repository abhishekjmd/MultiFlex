import { configureStore } from "@reduxjs/toolkit";
import LibraryScreenReducers from "./reducers/LibraryScreenReducers";
import movieListReducer from "./reducers/movieListReducer";
import HomeScreenSlice from './reducers/playlistReducers'

const store = configureStore({
    reducer: {
        HomeReducer: HomeScreenSlice,
        SearchReducer: movieListReducer,
        LibraryReducer: LibraryScreenReducers
    },
})
export default store