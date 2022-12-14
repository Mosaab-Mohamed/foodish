import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { axiosInst } from "shared/system/http";
import { Wishlist, WishlistItem } from "store/shared/types/wishlist";

const initialState: Wishlist = {
	list: [],
	isLoading: false,
	error: null,
	message: "",
	status: null,
};

export const fetchWishlist = createAsyncThunk(
	"wishlist/fetch",
	async (userId: number) => {
		const response = await axiosInst.get(`wishlist?userID=${userId}`);
		return response.data;
	}
);

export const addToWishlist = createAsyncThunk(
	"wishlist/add",
	async (params: WishlistItem) => {
		const response = await axiosInst.post("/wishlist", params);
		return response.data;
	}
);

export const removeFromWishlist = createAsyncThunk(
	"wishlist/remove",
	async (params: { id: number; name: string }) => {
		const response = await axiosInst.delete(`/wishlist/${params.id}`);
		return { status: response.status, id: params.id, name: params.name };
	}
);

const wishlistSlice = createSlice({
	name: "wishlist",
	initialState,
	reducers: {
		resetMessage: (state) => {
			state.message = "";
			state.status = null;
		},
	},
	extraReducers: (builder) => {
		// Fetch wishlist
		builder.addCase(fetchWishlist.pending, (state) => {
			state.isLoading = true;
		});
		builder.addCase(fetchWishlist.fulfilled, (state, action) => {
			state.list = action.payload;
			state.isLoading = false;
		});
		builder.addCase(fetchWishlist.rejected, (state, action) => {
			state.error = action.error;
			state.isLoading = false;
		});

		// Add to wishlist
		builder.addCase(
			addToWishlist.fulfilled,
			(state, action: PayloadAction<WishlistItem>) => {
				state.list.push(action.payload);
				state.message = `${action.payload.item.name} added to wishlist`;
				state.status = "success";
			}
		);
		builder.addCase(addToWishlist.rejected, (state, action) => {
			state.message = action.error.message;
			state.status = "failed";
		});

		// Remove from wishlist
		builder.addCase(
			removeFromWishlist.fulfilled,
			(
				state,
				action: PayloadAction<{ status: number; id: number; name: string }>
			) => {
				if (action.payload.status === 200) {
					state.list = state.list.filter(
						(item) => item.id !== action.payload.id
					);
					state.message = `${action.payload.name} removed from wishlist`;
					state.status = "success";
				}
			}
		);
		builder.addCase(removeFromWishlist.rejected, (state, action) => {
			state.message = action.error.message;
			state.status = "failed";
		});
	},
});

export const { resetMessage } = wishlistSlice.actions;

export default wishlistSlice.reducer;
