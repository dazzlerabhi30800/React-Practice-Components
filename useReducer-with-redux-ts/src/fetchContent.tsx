import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchContent = createAsyncThunk(
  "content/fetchContent",
  async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/photos");
    const data = await res.json();
    return data;
  },
);
