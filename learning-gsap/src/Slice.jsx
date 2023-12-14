import { combineReducers, configureStore, createSlice } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
// import storageSession from "reduxjs-toolkit-persist/lib/storage/session";
import { persistReducer, persistStore } from "redux-persist";

const stateSlice = createSlice({
  name: "stateReducers",
  initialState: {
    counter: 0,
    isLogged: false,
  },
  reducers: {
    setCounter: (state, action) => {
      return {
        ...state,
        counter: action.payload,
      };
    },
    setLogging: (state, action) => {
      return {
        ...state,
        isLogged: action.payload,
      };
    },
  },
});

const newSlice = createSlice({
  name: "NightSlice",
  initialState: {
    isNight: false,
  },
  reducers: {
    setNight: (state, action) => {
      state.isNight = action.payload;
    },
  },
});

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["isLogged"],
};

const combineStateReducers = combineReducers({
  stateReducers: persistReducer(persistConfig, stateSlice.reducer),
  nightReducer: newSlice.reducer,
});

// const persistedReducer = persistReducer(persistConfig, combineStateReducers);

const store = configureStore({
  reducer: combineStateReducers,
  middleware: [thunk],
});

export const { setCounter, setLogging } = stateSlice.actions;

export const persistor = persistStore(store);
export default store;
