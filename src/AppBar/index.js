import { useLocation } from "react-router-dom";
import { Toolbar, Typography } from "@material-ui/core";
import { AppBar as MaterialUiAppBar }  from "@material-ui/core";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles= makeStyles((theme) => ({
    link : {
              marginRight:  "15px",
              color: theme.palette.background.default,
    },
}));

const routes = [
    {
        pathTitle: "Home",
        path: "/home",
    },
    { pathTitle: "Chat", path: "/chat" },
    { pathTitle: "Playground", path: "/playground" },
];

const AppBar = () => {
const location = useLocation();
const classes = useStyles();

return (
    <MaterialUiAppBar className={classes.appBar} position = "static">
        <Toolbar>
            {routes.map((route) => (
                <Link
                    key = {route.path}
                    to = {route.path}
                    className = {`${classes.link} ${route.path === location.pathname ? classes.activeLink: ""}`}
                >
                    <Typography variant="h6">{route.pathTitle}</Typography>
                </Link>
            ))}
        </Toolbar>
    </MaterialUiAppBar>
    );
};


export default AppBar;