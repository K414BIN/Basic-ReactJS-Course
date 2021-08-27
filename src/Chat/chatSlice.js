import { createSlice } from "@reduxjs/toolkit";
export  const chatSlice = createSlice({
    name: "chat",
    initialState: {
        countOfMessages : 0,
        lastMessageText: "",
    },
    reducers: {
        incrementWithoutMessage: (state) => {
            state.countOfMessages += 1;
        },
        incrementWithMessage: (state, action) => {
            state.countOfMessages += 1;
            state.lastMessageText = action.payload;
        },
    },
});
export const { incrementWithMessage, incrementWithoutMessage } =
        chatSlice.actions;
export default chatSlice.reducer;