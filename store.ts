// store.js
import {configureStore} from '@reduxjs/toolkit';
import navReducer from './src/slices/navSlices';

const store = configureStore({
  reducer: {
    nav: navReducer,
    // Add other reducers here if you have them
  },
});

export default store;
