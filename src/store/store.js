import { configureStore } from "@reduxjs/toolkit";
import { guestSlice } from "./reducers/guestSlice";
import { notificationSlice } from "./reducers/notificationSlice";
import { roomsSlice } from "./reducers/roomSlice";

export const store = configureStore({
    reducer: {
        rooms : roomsSlice.reducer,
        guest: guestSlice.reducer,
        notification: notificationSlice.reducer
    },
})