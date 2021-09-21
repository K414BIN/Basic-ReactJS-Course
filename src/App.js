import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Weather from "./Weather";
import Chat from "./Chat";

import AppBar from "./AppBar";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  mainWrapper: {
    width: "100vw",
    height: "100vh",
    display: "flex",
  },
}));

const App = () => {
  const classes = useStyles();

  return (
    <Router>
      <div className={classes.mainWrapper}>
        <AppBar />

        <Switch>

          <Route path="/weather">
            <Weather  />
          </Route>
          <Route path="/chat/:id">
            <Chat />
          </Route>

          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
