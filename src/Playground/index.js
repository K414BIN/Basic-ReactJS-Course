import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector, useDispatch } from "react-redux";


const useStyles = makeStyles(() => ({
  noUnderline: {
    "&>div": {
      "&::before": {
        border: "none !important",
      },
      "&::after": {
        border: "none !important",
      },
    },
  },
}));

const Playground = (props) => {
  const classes = useStyles();
  const { messagesArray } = useSelector((state) => state.chat);

  return (
    <>
      <div>
        Array of messages:
        {messagesArray.map((o, i) => (
          <div key={i}>{o.messageText}</div>
        ))}
      </div>
      <TextField className={classes.noUnderline}>Playground</TextField>
    </>
  );
};

const withAuthorizationHOC = function (Component) {
  return (props) => {
    // console.log("HOC PROPS", props);
    return <Component userInfo={{ userId: 1, userName: "Alex" }} {...props} />;
  };
};

export default withAuthorizationHOC(Playground);
