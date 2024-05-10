import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  donations: [],
};

const donationSlice = createSlice({
  name: "donation",
  initialState,
  reducers: {},
});

export default donationSlice.reducer;
