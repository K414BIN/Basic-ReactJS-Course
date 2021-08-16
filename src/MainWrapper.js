import InputComponent from "./InputComponent";
import MessageList from "./MessageList";
const MainWrapper(){
    return (
        <div className="mainWrapper">
            <MessageList />
            <InputComponent />

        </div>
    );
};
export  default  MainWrapper;