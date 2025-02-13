import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import authService from "./authService";


const getUserFromLocalStorage = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user"))
: null;

const initialState = {
    user: getUserFromLocalStorage,
    orders: [],
    isError: false,
    isLoading: false,
    isSuccess: false,
    message: "",
}

export const login = createAsyncThunk('auth/admin-login', async (user, thunkAPI) => {
    try{
        return await authService.login(user);

    }catch(error){
        return thunkAPI.rejectWithValue(error);
    }
  }
);
export const getAllOrders = createAsyncThunk(
  "order/get-orders",
  async (thunkAPI) => {
    try {
      return await authService.getOrders();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const getOrderByUserId = createAsyncThunk(
  "order/get-order",
  async (id, thunkAPI) => {
    try {
      return await authService.getUserOrderById(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const getMonthlyData = createAsyncThunk(
  "orders/monthlydata",
  async (thunkAPI) => {
    try {
      return await authService.getMonthlyOrders();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const authSlice = createSlice({
    name: "auth",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(login.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(login.fulfilled, (state, action) => {
          state.isLoading = false;
          state.isSuccess = true;
          state.user = action.payload;
        })
        .addCase(login.rejected, (state, action) => {
          state.isLoading = false;
          state.isSuccess = false;
          state.isError = true;
          state.user = null
        })
        .addCase(getAllOrders.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(getAllOrders.fulfilled, (state, action) => {
          state.isLoading = false;
          state.isError = false;
          state.isSuccess = true;
          state.usersOrders = action.payload;
        })
        .addCase(getAllOrders.rejected, (state, action) => {
          state.isLoading = false;
          state.isError = true;
          state.isSuccess = false;
          state.message = action.error;
        })
        .addCase(getOrderByUserId.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(getOrderByUserId.fulfilled, (state, action) => {
          state.isLoading = false;
          state.isError = false;
          state.isSuccess = true;
          state.userOrder = action.payload;
        })
        .addCase(getOrderByUserId.rejected, (state, action) => {
          state.isLoading = false;
          state.isError = true;
          state.isSuccess = false;
          state.message = action.error;
        })
        .addCase(getMonthlyData.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(getMonthlyData.fulfilled, (state, action) => {
          state.isLoading = false;
          state.isError = false;
          state.isSuccess = true;
          state.monthlyOrder = action.payload;
        })
        .addCase(getMonthlyData.rejected, (state, action) => {
          state.isLoading = false;
          state.isError = true;
          state.isSuccess = false;
          state.message = action.error;
        });
    },
}); 

export default authSlice.reducer;