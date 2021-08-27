
import React, { useState, useEffect } from 'react';
import MessageList from './MessageList';
import MessageInput from './MessageInput';
import {makeStyles} from '@material-ui/core/styles';


const BotName = "ROBOT";
const me="Alex";

const useStyles = makeStyles((theme) =>({
  appWrapper: {
    height: "100vh",
    width: "100vw",
    display: "flex",
    justifyContent: "center",
    alignItems:"center"
  },
  componentWrapper : {
    width: "600px",
    height: "800px",
    border: "1px solid black",
    display: "flex",
    flexDirection: "column"
  },
   button : {
      margin:"0px 10px"
    },
    input :{
      margin:"0px 10px",
      width: "70%",
  }
}));



function Chat() {
  const classes = useStyles();
  const [inputMessage, setInputMessage] = useState('');
  const [messagesArray, setMessagesArray] = useState([]);
  const [chatArray, setChatArray] = useState([]);

  const onSendMessage = () => {
    const trimmedMessageText = inputMessage.trim();

    if (trimmedMessageText !== '') {
      setMessagesArray(prev => [...prev,
      {
        trimmedMessageText,
        author: me,
        time: new Date().toLocaleTimeString(),
      },
      ]);
      setInputMessage('');

      setTimeout(() => {
        setMessagesArray(prev => [...prev,
          {
            trimmedMessageText :  'Сообщение отправлено!',
            author: BotName,
            time: new Date().toLocaleTimeString(),
          },
        ]);
      }, 1500);
      }
  };
  useEffect(() => {
    document.getElementsByClassName("messageList")[0].scrollTop = 9999;
  });
  useEffect(() => {
    if (messagesArray.length > 0) {
      setTimeout(() => {
           }, 1500);
    };
  }, [setMessagesArray, messagesArray]);

  return( <div className={classes.appWrapper}>
          <ChatList chatArray={ chatArray } />
                 <div className={classes.componentWrapper}>
                   <MessageList messagesArray={messagesArray}  />
                   <MessageInput inputMessage={inputMessage} setInputMessage={setInputMessage} onSendMessage={onSendMessage} />
                </div >
           </div >
    );
}
export default Chat;
