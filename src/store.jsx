import { configureStore } from "@reduxjs/toolkit";
import loadingReducer from './loding'
import { userSlice } from "./user";

const store = configureStore({
    reducer:{
       loading:loadingReducer,
       user:userSlice.reducer
    }
})

export default store;