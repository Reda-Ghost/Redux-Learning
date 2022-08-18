import { configureStore } from '@reduxjs/toolkit';
import counterSliceReducer from './createCounterSlice';


const store = configureStore({
	reducer: {
		counter: counterSliceReducer,
	},
});

export default store;
