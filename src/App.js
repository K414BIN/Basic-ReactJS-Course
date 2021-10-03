import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CustomRoute from "./util/CustomRoute";
import Chat from "./Chat";
import Cats from "./Cats";
import Home from "./Home";
import Signup from "./Auth/Signup";
import Login from "./Auth/Login";
import { makeStyles } from "@material-ui/core/styles";
import firebase from "firebase/compat";
import { useAuthState } from "react-firebase-hooks/auth";
import {useContext} from "react";
import {MyDataContext} from "./index";
import Profile from "./Profile";

const useStyles = makeStyles((theme) => ({
  mainWrapper: {
    width: "100vw",
    height: "100vh",
    display: "flex",
  },
}));
const firebaseConfig = {
  apiKey: "AIzaSyAeI-rWuYNYAmru-Q5rDwYnqur5hptH_UE",
  authDomain: "gb-react-project-e5529.firebaseapp.com",
  databaseURL: "https://gb-react-project-e5529-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "gb-react-project-e5529",
  storageBucket: "gb-react-project-e5529.appspot.com",
  messagingSenderId: "486781428280",
  appId: "1:486781428280:web:50feee19727b6844ce7ccd"
};

firebase.initializeApp(firebaseConfig);
export const db = firebase.database();

const App = () => {
  const classes = useStyles();
  const appVer = useContext(MyDataContext);

  return (
      <Router>
        <div className={classes.mainWrapper}>

          <Switch>
            <CustomRoute secured path="/chat/:id">
              <Chat />
            </CustomRoute>

            <CustomRoute secured withAppBar={true} path="/profile">
              <Profile />
            </CustomRoute>

            <Route path="/cats" secured withAppBar={true}>
              <Cats />
            </Route>

            <Route path="/login">
              <Login />
            </Route>

            <Route path="/signup">
              <Signup />
            </Route>
            <CustomRoute secured withAppBar={true}  path="/" >
              <Home />
            </CustomRoute>
          </Switch>
        </div>
      </Router>
  );
};

export default App;