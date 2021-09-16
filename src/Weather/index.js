import {makeStyles} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import {getWeatherData} from "./actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState, useCallback } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles((theme) => ({

  wrapper: {
    width: "100%",
    height: "100%",
    justifyContent: "space-around",
    alignItems: "center",
    padding: "10px 10px 0px 10px",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "blueviolet",
  },
  imageWrapper: {
    backgroundColor: "gray",
    width: "100%",
    height: "100%",
  },
}));



const weather = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const classes = useStyles();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const dispatch = useDispatch();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data, loading, error } = useSelector((state) => state.weather);
 // eslint-disable-next-line react-hooks/rules-of-hooks
useEffect (() => {
  dispatch(getWeatherData());
  },[dispatch]);

  return <div className ={ classes.wrapper}>
    <div className={classes.imageWrapper}>
   {loading && <CircularProgress />}
    {error && <div> Возникла ошибка! </div>}
     {!loading && !error && data  }

  </div>
    <Button variant="outlined" color="primary"
            disabled = {loading}
            onClick= {() =>getWeatherData()}
    >
        Weather today
    </Button>
     </div>   
}
export  default weather;