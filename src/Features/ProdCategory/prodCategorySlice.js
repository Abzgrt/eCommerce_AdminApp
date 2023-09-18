import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
import prodCategoryService from "./prodCategoryService";

export const getProdCategories = createAsyncThunk(
  "productCategory/get-categories",
  async (thunkAPI) => {
    try {
      return await prodCategoryService.getProdCategories();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const createProdCategory = createAsyncThunk(
  "productCategory/create-category",
  async (categoryData, thunkAPI) => {
    try {
      return await prodCategoryService.createProdCategory(categoryData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const updateProdCategory = createAsyncThunk(
  "productCategory/update-category",
  async (category, thunkAPI) => {
    try {
      return await prodCategoryService.updateProdCategory(category);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const deleteProdCategory = createAsyncThunk(
  "productCategory/delete-category",
  async (id, thunkAPI) => {
    try {
      return await prodCategoryService.deleteProdCategory(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const getProdCategory = createAsyncThunk(
  "productCategory/get-product-category",
  async (id, thunkAPI) => {
    try {
      return await prodCategoryService.getProdCategory(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const resetState = createAction("RevertAll");

const initialState = {
  prodCategories: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};
export const prodCategorySlice = createSlice({
  name: "prodCategories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProdCategories.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProdCategories.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.prodCategories = action.payload;
      })
      .addCase(getProdCategories.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(createProdCategory.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createProdCategory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.createdCategory = action.payload;
      })
      .addCase(createProdCategory.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(updateProdCategory.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateProdCategory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.updatedCategory = action.payload;
      })
      .addCase(updateProdCategory.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(deleteProdCategory.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteProdCategory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.deletedCategory = action.payload;
      })
      .addCase(deleteProdCategory.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(getProdCategory.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProdCategory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.categoryName = action.payload.title;
      })
      .addCase(getProdCategory.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(resetState, () => initialState);
  },
});
export default prodCategorySlice.reducer;