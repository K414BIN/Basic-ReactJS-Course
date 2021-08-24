import React, { useState, useEffect } from 'react';
import MessageList from './MessageList';
import MessageInput from './MessageInput';

const BotName = "ROBOT";
const me="Alex";

function App() {

  const [inputMessage, setInputMessage] = useState('');
  const [messagesArray, setMessagesArray] = useState([]);
  const [botMessagesArray, setBotMessagesArray] = useState([]);

  const onSendMessage = () => {
    const trimmedMessageText = inputMessage.trim();

    if (trimmedMessageText !== '') {
      setMessagesArray(prev => [...prev,
      {
        trimmedMessageText,
        author: me
      },
      ]);
      setInputMessage('');

      setTimeout(() => {
        setMessagesArray(prev => [...prev,
          {
            trimmedMessageText :  'Сообщение отправлено!😊👌',
            author: BotName
          },
        ]);
      }, 1500);
      }
  };

  useEffect(() => {
    if (messagesArray.length > 0) {
      setTimeout(() => {
           }, 1500);
    };
  }, [setBotMessagesArray, messagesArray]);

  return <div className='mainWrapper'>

    <MessageList messagesArray={messagesArray} botMessagesArray={botMessagesArray} />

    <MessageInput inputMessage={inputMessage} setInputMessage={setInputMessage} onSendMessage={onSendMessage} />

  </div >
};
export default App;
