import {useRef, useState} from "react";
import PropTypes from "prop-types";
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
const MessageInput = ({ inputMessage, setInputMessage, onSendMessage }) => {
    const classes = useStyles();
    const [inputRef, setInputFocus] = useFocus();

    return (
        <div className={classes.inputWrapper}>
            <TextField
                label='Введите сообщение...'
                value={inputMessage}
                onChange={e => setInputMessage(e.target.value)}
                onKeyDown={({ key }) => {
                    if (key === 'Enter') {
                        onSendMessage();
                    }
                }}
                classes={{
                    root: classes.input,
            }}
            />
            <Button
                color="primary"
                variant="contained"
                onClick={onSendMessage }
                ref={inputRef}
                classes={{
                    root: classes.button,
                }}
            >Send
            </Button>
        </div>
    );
};

export default MessageInput;