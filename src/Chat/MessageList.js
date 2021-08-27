import PropTypes from "prop-types";

const BotName = "ROBOT";

const MessageList = ({ messagesArray }) => {
    return (
        <div className="messageList">
            {
                messagesArray.map((message, i) => {
                    const isMessageFromBot = message.author ===BotName;
                    return (
                    <>
                        <div className={isMessageFromBot ? 'botMessageBlock':'myMessageBlock'}
                             key = {i}
                             style={{overflowY: "auto",scrollBehavior : "smooth"}}
                        >
                            <div className={isMessageFromBot ? 'botMessageTag' :'myMessageTag'}>{message.author},{message.time}</div>
                            <div key={i} className={isMessageFromBot ? 'botMessage': 'myMessage'}>{message.trimmedMessageText}</div>
                        </div>
                    </>
                )})
           }
        </div>
    );
};
MessageList.protoTypes = {
    messagesArray : PropTypes.array.isRequired
}
export default MessageList;