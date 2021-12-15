import { configureStore } from "@reduxjs/toolkit";
import { spacexAPI } from '../services/spacexAPI';
import { spacexNewsAPI } from '../services/spacexNewsAPI';

export default configureStore({
    reducer: {
        [spacexAPI.reducerPath]: spacexAPI.reducer,
        [spacexNewsAPI.reducerPath]: spacexNewsAPI.reducer
    },
});