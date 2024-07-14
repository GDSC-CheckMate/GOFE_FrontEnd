// src/Redux/communitySlice.js

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchGroups = createAsyncThunk(
  "community/fetchGroups",
  async () => {
    const response = await fetch("/community.json");
    const data = await response.json();
    return data;
  }
);

const communitySlice = createSlice({
  name: "community",
  initialState: {
    groups: [],
    status: "idle",
    error: null,
  },
  reducers: {
    addGroup: (state, action) => {
      state.groups.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchGroups.pending, (state) => {
        state.status = "세상에서 가장 지루한 중학교는? 로딩중...";
      })
      .addCase(fetchGroups.fulfilled, (state, action) => {
        state.status = "성공하면 혁명";
        state.groups = action.payload;
      })
      .addCase(fetchGroups.rejected, (state, action) => {
        state.status = "실패하면 반역";
        state.error = action.error.message;
      });
  },
});

export const { addGroup } = communitySlice.actions;

export default communitySlice.reducer;
