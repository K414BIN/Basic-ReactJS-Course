
const BotName = "ROBOT";

const MessageList = ({ messagesArray }) => {
    return (
        <div className="messageList">
            {
                messagesArray.map((message, i) => {
                    const isMessageFromBot = message.author ===BotName;
                    return (
                    <>
                        <div className={isMessageFromBot ? 'botMessageBlock':'myMessageBlock'}>
                            <div className={isMessageFromBot ? 'botMessageTag' :'myMessageTag'}>{message.author}</div>
                            <div key={i} className={isMessageFromBot ? 'botMessage': 'myMessage'}>{message.trimmedMessageText}</div>
                        </div>
                    </>
                )})
           }
        </div>
    );
};

export default MessageList;