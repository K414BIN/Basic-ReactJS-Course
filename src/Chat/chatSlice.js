import { createSlice } from "@reduxjs/toolkit";
export  const chatSlice = createSlice({
    name: "chat",
    initialState: {
        countOfMessages : 0,
        lastMessageText: "",
    },
    reducers: {
        incrementWithMessage: (state) => {
            state.value +=1;
        },
        incrementWithoutMessage: (state, action) => {
            state.value +=1;
            state.lastMessageText = action.payload;
        },
    },
});
export const { incrementWithMessage, incrementWithoutMessage } =
        chatSlice.actions;
export default chatSlice.reducer;