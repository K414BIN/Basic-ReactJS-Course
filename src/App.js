import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./home";
import AppBar from "./appbar";
import Chat from "./Chat/Chat";
const App = () =>{
    return (
    <Router>
        <AppBar />
        <Switch>
                <Route  path="/chat"><Chat /></Route>
                <Route  path="/"> <Home /></Route>
        </Switch>        
    </Router>
                );
};
export default App;