import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk(
  "users/fetchUsers",
  async function (_, { rejectWithValue }) {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      if (!response.ok) {
        throw new Error("Server Error!");
      }
      const data = await response.json();
      return data;
    } catch (error) {}
  }
);

const initialState = {
  users: [],
  status: null,
  error: null,
};

export const UserSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setValue: (state, action) => {
      state.users = action.payload;
    },
  },
  extraReducers: {
    [fetchUsers.pending]: (state) => {
      state.status = "loading";
      state.error = null;
      console.log("pending");
    },
    [fetchUsers.fulfilled]: (state, action) => {
      state.status = "resolved";
      state.users = action.payload;
      console.log("fulfilled");
    },
    [fetchUsers.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action.payload;
      console.log("rejected");
    },
  },
});

export const { setValue } = UserSlice.actions;
export default UserSlice.reducer;
