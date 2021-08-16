const MessageList(props ) = > {
    return (
        <div className="messageList">
            {messageArray.map(( message,i) =>(
                <div> key ={i}> {message}   </div>
            ))};
        </div>
    );
}
export default  MessageList;