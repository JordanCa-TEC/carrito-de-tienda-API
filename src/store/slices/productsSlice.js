import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// createAsyncThunk para obtener productos de la API
export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
  const response = await axios.get('https://fakestoreapi.com/products');
  return response.data; // Retorna los datos de la API
});

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    items: [],
    status: 'idle', // idle, loading, succeeded, failed
    error: null,
  },
  reducers: {}, //manejaremos todo con asyncThunks
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload; // Almacena los productos en el estado
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default productsSlice.reducer;
