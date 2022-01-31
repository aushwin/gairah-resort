import { configureStore } from "@reduxjs/toolkit";
import { guestSlice } from "./reducers/guestSlice";
import { roomsSlice } from "./reducers/roomSlice";

export const store = configureStore({
    reducer: {
        rooms : roomsSlice.reducer,
        guest: guestSlice.reducer,
        
    },
})