import React, { useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import MessageList from "./MessageList";
import MessageInput from "./MessageInput";
import { makeStyles } from "@material-ui/core/styles";
import { addMessage } from "./chatSlice";


const useStyles = makeStyles((theme) =>({
    chatWrapper: {
        height: "100%",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    componentWrapper: {
        width: "600px",
        height: "800px",
        border: "1px solid black",
        display: "flex",
        flexDirection: "column",
    },
}));
function Chat() {
const {messagesArray} = useSelector((state) => state.chat);
const dispatch = useDispatch();
const classes = useStyles();
const onSendMessage = (messageText) => {
    dispatch(addMessage ({ author: "Alex", messageText}));
};
useEffect(() => {
    if (messagesArray.length >0 ){
        setTimeout(() => {
            console.log("Message was sent");
        }, 1500);
      }
    }, [messagesArray]);

    return (
        <div className={classes.chatWrapper}>
            <div className={classes.componentWrapper}>
            <MessageList messagesArray={messagesArray} />
            <MessageInput onSendMessage={onSendMessage} />
            </div>
        </div>
    );
}
export default Chat;