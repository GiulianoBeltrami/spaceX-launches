import { configureStore } from "@reduxjs/toolkit";
import { spacexAPI } from '../services/spacexAPI';

export default configureStore({
    reducer:{
        [spacexAPI.reducerPath]: spacexAPI.reducer,
    },
});