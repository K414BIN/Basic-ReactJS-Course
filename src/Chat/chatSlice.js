import { createSlice } from "@reduxjs/toolkit";
import moment from "moment";

export const chatSlice = createSlice({
  name: "chat",
  initialState: {
    messagesArray: [],
    myId: 1,
    chats: [
      {
        id : 2,
        name: "Joe Doe",
        avatarUrl: "",
        messagesArray : [
          {
            timeStamp : moment("1999-12-16T09:20:00"),
            userId: 1,
            text: "Hello!",
            isRead: true,
          }
        ],
      }
    ],
  },
  reducers: {
    addMessage: (state, action) => {
      state.messagesArray.push(action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addMessage } =
  chatSlice.actions;

export default chatSlice.reducer;
