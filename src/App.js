import React, {useState, useCallback, useEffect, useRef} from "react";
import './App.css';
import InputComponent from './InputComponent';
import MessageList from "./MessageList";

function App() {

    const [messageArray, setMessageArray] = useState([]);
    const onSendMessage = (messageText) =>{
        setMessageArray((prev) => [...prev,[messageText]
        /* не заработало!
            {
            messageText,
            author: 'me'
            }
            */
        ]);
     };
    useEffect(() =>{
        if ( messageArray.length > 0 && messageArray.author !=="ROBOT" ) {
                setTimeout(() => {
                    let messageText = "Hello, human!";
                    console.log(messageText)}  , 1000);
            }}, [messageArray]);

    return (
        <div className="mainWrapper">
            <MessageList messagesArray={messageArray}/>
            <InputComponent onSendMessage={onSendMessage}/>
        </div>
    );}

export default App;
