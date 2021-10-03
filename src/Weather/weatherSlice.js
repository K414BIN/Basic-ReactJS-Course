import { createSlice } from "@reduxjs/toolkit";

export const WEATHER_API_URL ="https://api.open-meteo.com/v1/forecast?latitude=55.7558&longitude=37.6176&hourly=temperature_2m&timezone=Europe%2FMoscow";
export const weatherSlice = createSlice({
    name: "weather",
    initialState: {
        loading: false,
        error: false,
        data: null,
    },
    reducers: {
        setLoading: (state , action) => {
            state.loading = action.payload;
        },
        setData: (state , action) => {
            state.data = action.payload;
        },
        setError: (state , action) => {
            state.error = action.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const {  setLoading ,setData,setError } = weatherSlice.actions;

export default weatherSlice.reducer;
