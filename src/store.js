import { configureStore, combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import chatReducer from "./Chat/chatSlice";
import thunkMiddleware from "redux-thunk";
import { persistReducer } from "redux-persist";
import weatherReducer from "./Weather/weatherSlice";
const persistConfig = {
  key: "root",
  storage,
//  blacklist: [ "weather"]
};

const reducers = combineReducers({ chat: chatReducer, weather: weatherReducer });

const persistedReducer = persistReducer(persistConfig, reducers)

export default configureStore({
  reducer: persistedReducer,
  middleware: [thunkMiddleware],
});
