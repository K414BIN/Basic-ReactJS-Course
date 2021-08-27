import {useEffect, useRef, useState} from "react";
import Button from '@material-ui/core/Button';
import {makeStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';


const useFocus = () => {
    const htmlElRef = useRef(null)
    const setFocus = () => {htmlElRef.current &&  htmlElRef.current.focus()}

    return [ htmlElRef, setFocus ]
}
const useStyles = makeStyles((theme) =>({
    input: {
        margin:"0px 10px",
        width: "70%"
    },
    button: {
        margin: "0px 10px"
    },
    inputWrapper: {
        flex: 1,
        width: "100%",
        display : "flex",
        alignItems: "center",
        justifyContent: "space-between"
    }
}));



    const MessageInput = ({ onSendMessage }) => {
        const classes = useStyles();
        const [inputMessage, setInputMessage] = useState("");

    const sendAndRemoveInput = () => {
        const trimmedMessageText = inputMessage.trim();
        if (trimmedMessageText !== "") {
            onSendMessage(trimmedMessageText);
            setInputMessage("");
        }

    };

    return (
        <div className={classes.inputWrapper}>
            <TextField
                label='Введите сообщение...'
                value={inputMessage}
                autoFocus={true}
                multiline
                maxRows={3}
                onChange={e => setInputMessage(e.target.value)}
                onKeyDown={({ key }) => {
                    if (key === 'Enter') {
                        sendAndRemoveInput();
                    }
                }}
                classes={{
                    root: classes.input,
            }}
            />
            <Button
                color="primary"
                variant="contained"
                onClick={  sendAndRemoveInput}
                classes={{
                    root: classes.button,
                }}
            >Send
            </Button>
        </div>
    );
};

export default MessageInput;