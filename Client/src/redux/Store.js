import { configureStore,getDefaultMiddleware } from "@reduxjs/toolkit";
import AuthReducers from "./reducers/AuthReducers";
import LibraryScreenReducers from "./reducers/LibraryScreenReducers";
import movieListReducer from "./reducers/movieListReducer";
import HomeScreenSlice from './reducers/playlistReducers'



const store = configureStore({
    reducer: {
        HomeReducer: HomeScreenSlice,
        SearchReducer: movieListReducer,
        LibraryReducer: LibraryScreenReducers,
        AuthReducer: AuthReducers
    },
    middleware: getDefaultMiddleware({
        serializableCheck: false, // Disable serializable state invariant middleware
    }),

})
export default store