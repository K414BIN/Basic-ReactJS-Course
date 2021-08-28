import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

const useStyles = makeStyles(() => ({
  messageList: {
    width: "100%",
    height: "90%",
    borderBottom: "1px solid black",
    overflow: "auto",
    flexDirection: "column",
    display: "flex",
  },
    userMessage : {
      alignSelf: "flex-end",
    },
    senderMessage: {
      alignSelf: "flex-start",
    },
}));

const MessageList = ({ messagesArray }) => {
  const classes = useStyles();
 const {myId} = useSelector((state) =>   state.chat);
  return (
    <div className={classes.messageList}>
      {messagesArray.map((message, i) => (
        <div key={i} className={message.userId === myId ? classes.userMessage : classes.senderMessage}>{message.text}</div>
      ))}
    </div>
  );
};

MessageList.propTypes = {
  messagesArray: PropTypes.array.isRequired,
};

export default MessageList;
