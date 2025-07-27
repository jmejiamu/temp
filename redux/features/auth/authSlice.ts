import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface DataState {
  name?: string;
  email: string;
  isLoggedIn: boolean;
}

const initialState: DataState = {
  name: "",
  email: "",
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    setAuth: (state, action: PayloadAction<DataState>) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.isLoggedIn = action.payload.isLoggedIn;
    },
    logout: () => initialState,
  },
});

export const { setAuth, logout } = authSlice.actions;
export default authSlice.reducer;
