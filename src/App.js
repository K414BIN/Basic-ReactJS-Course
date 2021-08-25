import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Chat from './Chat';
const App = () =>{
    return (
    <Router>
        <Switch>
                <Route  path="chat"></Route>
                <Route  path="/"></Route>
        </Switch>        
        </Ruter>
                );
};