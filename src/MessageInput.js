
const MessageInput = ({ inputMessage, setInputMessage, onSendMessage }) => {

    return (
        <div className="inputWrapper">
            <input
                className='input'
                placeholder='Введите сообщение...'
                value={inputMessage}
                onChange={e => setInputMessage(e.target.value)}
                onKeyDown={({ key }) => {
                    if (key === 'Enter') {
                        onSendMessage();
                    }
                }}
            />
            <button className='sendButton' onClick={onSendMessage}>Send</button>

        </div>
    );
};

export default MessageInput;