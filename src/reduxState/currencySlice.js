import { createSlice } from '@reduxjs/toolkit';
import {
  fetchBaseCurrency,
  fetchExchangeCurrency,
  fetchLastSumbols,
} from './operations';

export const currencySlice = createSlice({
  name: 'currency',
  initialState: {
    baseCurrency: '',
    exchangeInfo: null,
    isLoading: false,
    isError: null,
    rates: [],
  },
  reducers: {
    setBaseCurrency: (state, action) => {
      state.baseCurrency = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchBaseCurrency.fulfilled, (state, action) => {
        state.baseCurrency = action.payload;
      })
      .addCase(fetchExchangeCurrency.pending, state => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchExchangeCurrency.fulfilled, (state, action) => {
        state.exchangeInfo = action.payload;
        state.isLoading = false;
        state.isError = false;
      })
      .addCase(fetchExchangeCurrency.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.payload;
        state.exchangeInfo = null;
      })
      .addCase(fetchLastSumbols.fulfilled, (state, action) => {
        state.isLoading = false;
        state.rates = action.payload;
      })
      .addCase(fetchLastSumbols.pending, state => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchLastSumbols.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.payload;
      });
  },
});

export const currencyReducer = currencySlice.reducer;
export const { setBaseCurrency } = currencySlice.actions;
