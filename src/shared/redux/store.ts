import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "./features/categories/categoriesSlice";
import itemsReducer from "./features/items/itemsSlice";
import wishlistReducer from "./features/wishlist/wishlistSlice";
import cartReducer from "./features/cart/cartSlice";
import ordersReducer from "./features/orders/ordersSlice";

export const store = configureStore({
	reducer: {
		categories: categoriesReducer,
		items: itemsReducer,
		wishlist: wishlistReducer,
		cart: cartReducer,
		orders: ordersReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
