import React, {useState, useCallback, useEffect} from "react";
import './App.css';
import  InputComponent from  './InputComponent';

function App() {

    const [ inputMessage, setInputMessage ] = useState("");
    const [messageArray, setMessageArray] = useState([]);
    const onSendMessage = () =>{
        setMessageArray((prev) => [...prev,inputMessage]);
        setInputMessage("");
    };

    return (
            <div className="mainWrapper">
                        <div className="messageList">
                        {messageArray.map(( message,i) =>(
                            <div> key ={i}> {message}   </div>
                        ))};
                        </div>
                        <div className="inputWrapper">
                        <input type="text" required value={inputMessage}  onChange={(e) => setInputMessage(e.target.value)}
                               onKeyDown={({key}) => {
                                   if (key === 'Enter') {
                                       console.log('Enter');
                                       onSendMessage();
                                   }
                               }}
                            />
                            <button onClick={onSendMessage}>Отправить</button>
                        </div>
            </div>
  );
}

export default App;
