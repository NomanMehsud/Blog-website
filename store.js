import { configureStore} from "@reduxjs/toolkit";
import cartReducer from './src/features/cartSlice'
import logger from "redux-logger"
import { apiSlice } from "./src/features/apiSlice";


export const store = configureStore({
    reducer : {
        [apiSlice.reducerPath] : apiSlice.reducer,
        cart : cartReducer
    },
       middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware,logger),

})