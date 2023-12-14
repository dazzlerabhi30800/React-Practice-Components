import { PayloadAction, configureStore, createSlice } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

interface counterState {
  count: number;
}

const initialState = {
  count: 0,
} as counterState;

export const stateSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count = state.count + 1;
    },
    decrement: (state) => {
      state.count = state.count <= 0 ? 0 : state.count - 1;
    },
    reset: (state, action: PayloadAction<number>) => {
      state.count = action.payload;
    },
  },
});

export const store = configureStore({
  reducer: stateSlice.reducer,
});

type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const { increment, decrement, reset } = stateSlice.actions;
