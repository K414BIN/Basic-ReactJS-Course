import React, {useState} from "react";
import './App.css';
import MessageComponent from './MessageComponent';
function App() {

    const [inputText, setInputText ] = useState('');

    return (
    <div>
        <input type="text" required value={inputText}  onChange={(e) => setInputText(e.target.value)} />
        <MessageComponent textToShow = {inputText}  />
    </div>
  );
}

export default App;
