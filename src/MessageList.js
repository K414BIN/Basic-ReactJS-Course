import PropTypes from "prop-types";

const MessageList = ({messagesArray} ) =>  {

    return <div className="messageList">
        {messagesArray.map((message,i) =><div> key ={i}> {message}  </div>)};
    </div>;
};

MessageList.propTypes = {
 array : PropTypes.array.isRequired
}
export default  MessageList;
