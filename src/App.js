import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Weather from "./Weather";
import Chat from "./Chat";

import { makeStyles } from "@material-ui/core/styles";
import {useEffect} from "react";
import {initializeApp} from "firebase/app";
import {firebaseConfig} from "./firebase";
import CustomRoute from "./util/CustomRoute";

const useStyles = makeStyles((theme) => ({
  mainWrapper: {
    width: "100vw",
    height: "100vh",
    display: "flex",
  },
}));


const App = () => {
  const classes = useStyles();

  useEffect(() => {
   initializeApp(firebaseConfig);
  },[]);


  return (
    <Router>
      <div className={classes.mainWrapper}>

        <Switch>

          <Route path="/weather" secured>
            <Weather  />
          </Route>
          <CustomRoute path="/chat/:id" secured withAppBar={true}>
            <Chat />
          </CustomRoute>
          <Route path="/login">
          <div> Login   </div>
          </Route>
          <Route path="/signup">
            <div> Signup   </div>
          </Route>
          <Route path="/" withAppBar = {false}>
            <Home />
          </Route>
        </Switch>
        </div>
    </Router>
  );
};

export default App;
