import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState = { count: 0 };

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    changeCountAction(state, { payload }: PayloadAction<number>) {
      state.count += payload;
    },
  },
});

export const { changeCountAction } = counterSlice.actions;
export default counterSlice.reducer;
