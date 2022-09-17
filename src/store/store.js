import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './cart/cartSlice';
import cartUiSlice from './cart/cartUiSlice';

const store = configureStore({
	reducer: {
		cart: cartSlice.reducer,
		cartUi: cartUiSlice.reducer,
	},
});

export default store;
