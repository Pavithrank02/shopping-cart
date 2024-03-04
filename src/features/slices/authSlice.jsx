import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: JSON.parse(localStorage.getItem("authUser")) || {
      name: "",
      password: "",
      image: "",
      authUser: false,
    },
  },
  reducers: {
    login(state, action) {
      const userId = action.payload;
      const userValidation = /^[a-zA-Z]+(?:\s[a-zA-Z]+)?$/i.test(userId.name);
      const passwordValidation =
        /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/i.test(
          userId.password
        );
      state.user = userId;

      if (!userValidation || !passwordValidation) {
        alert("Enter Name with atleast 1 capital letter and password with minimum 8 characters with One capital letter, one small letter and one speacial character'")
        state.user.authUser = false;

      } else {
        state.user.authUser = true;
        const saveState = JSON.stringify(userId);
        localStorage.setItem("authUser", saveState);
      }
    },
    logout(state) {
      state.user = {
        name: "",
        password: "",
        image: "",
        authUser: false,
      };
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
