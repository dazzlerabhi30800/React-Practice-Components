import {
  PayloadAction,
  configureStore,
  createSlice,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

interface counterState {
  loading: boolean;
  contents: Array<any>;
  count: number;
}

export const fetchContent = createAsyncThunk(
  "content/fetchContent",
  async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/photos");
    const data = await res.json();
    return data.slice(0, 10);
  },
);

const initialState = {
  loading: false,
  contents: [],
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
  extraReducers: (builder) => {
    builder.addCase(fetchContent.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchContent.fulfilled, (state, action) => {
      state.contents.push(action.payload);
    });
    builder.addCase(fetchContent.rejected, (state) => {
      state.loading = false;
    });
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
