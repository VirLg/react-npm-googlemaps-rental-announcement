import { configureStore, combineReducers } from '@reduxjs/toolkit';
// import { bikeApi } from './rtkQuery/bikes';
import { voiceReducer } from './slice';

export const store = configureStore({
  reducer: combineReducers({
    // [bikeApi.reducerPath]: bikeApi.reducer,
    voiceState: voiceReducer,
  }),
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    // bikeApi.middleware,
  ],
});
