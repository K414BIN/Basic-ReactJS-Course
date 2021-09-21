import AppBar from "../AppBar";
import { useSelector,useDispatch } from "react-redux";
import { Redirect, Route } from "react-router-dom";
import { initMessageTracking } from "../Chat/actions";
import {useEffect } from "react";

const CustomRoute = ( { secured ,withAppBar = true, children, ...rest } ) => {
    const { isAuthenticated } = useSelector((state) =>   state.chat);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(initMessageTracking());
    },[dispatch]);

    if (( secured && isAuthenticated) || !secured) {
        return(
            <Route {...rest}>
                {withAppBar && <AppBar />}
        {children};
        </Route>
    );
    }

return <Redirect to={{pathname :"/login"} }/>;
};
export default CustomRoute;