import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItem, Cart } from "store/shared/types/cart";
import {
	fetchCart,
	addItem,
	updateItem,
	removeItem,
	resetCart,
} from "./asyncThunks";

const initialState: Cart = {
	list: [],
	isLoading: false,
	error: null,
	message: "",
	status: null,
};

const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		resetMessage: (state) => {
			state.message = "";
			state.status = null;
		},
	},
	extraReducers: (builder) => {
		// Fetch Cart
		builder.addCase(fetchCart.pending, (state) => {
			state.isLoading = true;
		});
		builder.addCase(fetchCart.fulfilled, (state, action) => {
			state.list = action.payload;
			state.isLoading = false;
		});
		builder.addCase(fetchCart.rejected, (state, action) => {
			state.error = action.error;
			state.isLoading = false;
		});

		// Add Item
		builder.addCase(addItem.pending, (state) => {
			state.isLoading = true;
		});
		builder.addCase(
			addItem.fulfilled,
			(state, action: PayloadAction<CartItem>) => {
				state.list.push(action.payload);
				state.message = `${action.payload.item.name} added to cart`;
				state.status = "success";
				state.isLoading = false;
			}
		);
		builder.addCase(addItem.rejected, (state, action) => {
			state.message = action.error.message;
			state.status = "failed";
			state.isLoading = false;
		});

		// Update Item
		builder.addCase(updateItem.pending, (state) => {
			state.isLoading = true;
		});
		builder.addCase(
			updateItem.fulfilled,
			(state, action: PayloadAction<CartItem>) => {
				const index = state.list.findIndex(
					(item) => item.id === action.payload.id
				);
				state.list[index] = action.payload;
				state.isLoading = false;
			}
		);
		builder.addCase(updateItem.rejected, (state, action) => {
			state.message = action.error.message;
			state.status = "failed";
			state.isLoading = false;
		});

		// Remove Item
		builder.addCase(removeItem.pending, (state) => {
			state.isLoading = true;
		});
		builder.addCase(
			removeItem.fulfilled,
			(
				state,
				action: PayloadAction<{ status: number; id: number; name: string }>
			) => {
				if (action.payload.status === 200) {
					state.list = state.list.filter(
						(item) => item.id !== action.payload.id
					);
					state.message = `${action.payload.name} removed from cart`;
					state.status = "success";
					state.isLoading = false;
				}
			}
		);
		builder.addCase(removeItem.rejected, (state, action) => {
			state.message = action.error.message;
			state.status = "failed";
			state.isLoading = false;
		});

		// Reset Cart
		builder.addCase(resetCart.fulfilled, (state) => {
			state.list = [];
		});
	},
});

export const { resetMessage } = cartSlice.actions;

export default cartSlice.reducer;
