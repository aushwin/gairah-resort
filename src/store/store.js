import { configureStore } from "@reduxjs/toolkit";
import { roomsSlice } from "./reducers/roomSlice";

export const store = configureStore({
    reducer: {
        rooms : roomsSlice.reducer
    }
})