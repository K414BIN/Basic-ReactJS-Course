import { useState } from "react";
import {  useHistory } from "react-router-dom";
import {  useSelector } from "react-redux";
import InputAdornment from "@material-ui/core/InputAdornment";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";
import ChatPreview from "./ChatPreview";
import { addChatToFirebase } from "./actions";
import Button from "@material-ui/core/Button";
import {Link} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  link: {
    marginRight: "15px",
    color: theme.palette.background.default,
    textDecoration: "none",
  },
  dropLinks: {
    textDecoration: 'none',
    color: theme.palette.text.primary,
  },
  activeLink: {
    color: "red",
  },

  appBar: {
    marginBottom: "15px",
  },

  root: {
    marginRight: "350px",
  },

  mainWrapper: {
    width: "350px",
    height: "100%",
    padding: "10px 10px 0px 10px",
  },

  topComponent: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },

  input: {
    "& div": {
      borderRadius: "40px",
      "& input": {
        padding: "10px 10px",
      },
    },
  },

  chatWrapper: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

const routes = [
  {
    pathTitle: "Home",
    path: "/home",
  },
  { pathTitle: "Chat", path: "/chat" },
  { pathTitle: "Playground", path: "/playground" },
  { pathTitle: "Cats", path: "/cats" },
];

const AppBar = () => {
  const classes = useStyles();
  const history = useHistory();
  const { chats, myUid } = useSelector((state) => state.chat);

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const [uId, setupId] = useState("");

  const onAddChat = () => {
    // console.log('button click')
    addChatToFirebase(myUid, uId);
  };

  return (
      <Drawer
          variant="permanent"
          open
          classes={{ paper: classes.mainWrapper, root: classes.root }}
      >
        <Box className={classes.topComponent}>
          <IconButton onClick={handleClick}>
            <MenuIcon />
          </IconButton>

          <Menu
              id="menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              anchorOrigin={{ horizontal: "left", vertical: "bottom" }}
              anchorPosition={{ top: 50, left: 25 }}
              anchorReference={"anchorPosition"}
          >
            <MenuItem key={1} onClick={handleClose}>
              <Link  onClick={() => history.push("/")} className={classes.dropLinks}>
                Главная
              </Link>
            </MenuItem>
            <MenuItem key={2} onClick={handleClose}>
              <Link  onClick={() => history.push("/cats")} className={classes.dropLinks}>
                Коты
              </Link>
            </MenuItem>
            <MenuItem key={3} onClick={handleClose}>
              <Link onClick={() => history.push("/profile")} className={classes.dropLinks}>
                Профиль
              </Link>
            </MenuItem>
            <MenuItem key={3}>Настройки</MenuItem>
          </Menu>

          <TextField
              variant="outlined"
              className={classes.input}
              placeholder="Поиск"
              InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                ),
              }}
          />
        </Box>

        <Box className={classes.chatWrapper}>
          {Object.keys(chats).map((uid) => (
              <ChatPreview
                  // profile={profile}
                  uid={uid}
                  // messages={messages[profile.id] || []}
              />
          ))}
        </Box>

        <Box>
          <TextField value={uId} onChange={(e) => setupId(e.target.value)} />
          <Button onClick={onAddChat}>Добавить</Button>
        </Box>
      </Drawer>
  );
};

export default AppBar;