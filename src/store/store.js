import { configureStore } from "@reduxjs/toolkit";
import { customerSlice } from "./reducers/customerSlice";
import { roomsSlice } from "./reducers/roomSlice";
import devToolsEnhancer from 'remote-redux-devtools';

export const store = configureStore({
    reducer: {
        rooms : roomsSlice.reducer,
        customers: customerSlice.reducer,
        
    },
})