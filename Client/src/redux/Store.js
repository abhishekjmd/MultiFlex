import { configureStore } from "@reduxjs/toolkit";
import HomeScreenSlice from './reducers/playlistReducers'

const store = configureStore({
    reducer:{
        HomeReducer: HomeScreenSlice
    }
})
export default store