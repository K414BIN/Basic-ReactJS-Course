
import {WEATHER_API_URL} from "./weatherSlice";
import {setLoading,setData,setError} from "./weatherSlice";
import weather from "./index";
const getWeatherData = () => async (dispatch, getState) => {
    const {weather: data, loading, error} = getState();
    if (!loading) {
        try {
            dispatch(setError(false));
            dispatch(setLoading(true));
            const response = await fetch(WEATHER_API_URL);
            if (!response.ok) {
                throw  new Error("Something went wrong!");
            }
            const result = await response.json();
            dispatch(setData(result));
        } catch (e) {
            dispatch(setError(true));
        } finally {
            dispatch(setLoading(false));
        }

    }
};
export default  getWeatherData() ;