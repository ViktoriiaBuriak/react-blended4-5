export const selectCurrency = state => state.currency.baseCurrency;
export const selectExchange = state => state.currency.exchangeInfo;
export const selectError = state => state.currency.isError;
export const selectLoading = state => state.currency.isLoading;
