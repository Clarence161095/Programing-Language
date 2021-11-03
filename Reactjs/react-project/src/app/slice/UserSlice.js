import UserApi from "api/UserAPI";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export const login = createAsyncThunk('user/login',
  async (params) => {
    const currentUser = await UserApi.login(params);
    return currentUser;
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState: {
    current: {},
    loading: false,
    error: ''
  },
  reducers: {},
  extraReducers: {
    [login.pending]: (state) => {
      state.loading = true;
    },
    [login.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
      state.current = {};
    },
    [login.fulfilled]: (state, action) => {
      state.loading = false;
      state.current = action.payload;
      localStorage.setItem('user', JSON.stringify(state.current));
    }
  }
});

export default userSlice.reducer