import { createSelector } from '@reduxjs/toolkit';

export const selectCurrency = state => state.currency.baseCurrency;
export const selectExchange = state => state.currency.exchangeInfo;
export const selectError = state => state.currency.isError;
export const selectLoading = state => state.currency.isLoading;
export const selectRates = state => state.currency.rates;
export const selectFilter = state => state.filter;

export const selectFilterRates = createSelector(
  [selectCurrency, selectRates, selectFilter],
  (baseCurrency, rates, filter) => {
    return rates
      .filter(
        ([key]) =>
          key !== baseCurrency &&
          key.toLowerCase().includes(filter.toLowerCase()),
      )
      .map(([key, value]) => ({ key, value: (1 / value).toFixed(2) }));
  },
);
