import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { toDotNotation } from "shared/redux/helpers";
import { axiosInst } from "shared/system/http";
import {
	FilterOptions,
	PaginationOptions,
	ItemsList,
} from "store/shared/types/items";

const initialState: ItemsList = {
	list: [],
	filters: {
		name: null,
		category: null,
		size: null,
		attributes: null,
		price_lte: null,
	},
	pagination: { _page: 1, _limit: 8, total: undefined },
	isLoading: false,
	error: null,
};

export const fetchItems = createAsyncThunk(
	"items/fetchItems",

	async (params: FilterOptions & PaginationOptions) => {
		const response = await axiosInst.get(`items`, {
			params: toDotNotation(params),
		});

		return {
			data: response.data,
			total: response.headers["x-total-count"],
		};
	}
);

const itemsSlice = createSlice({
	name: "items",
	initialState,

	reducers: {
		updateFilters: (
			state,
			action: PayloadAction<{ name: string; value: any }>
		) => {
			const { name, value } = action.payload;
			state.filters[name as keyof FilterOptions] = value;
		},
		updatePagination: (state, action: PayloadAction<number>) => {
			state.pagination._page = action.payload;
		},
	},

	extraReducers: (builder) => {
		builder.addCase(fetchItems.pending, (state) => {
			state.isLoading = true;
		});
		builder.addCase(fetchItems.fulfilled, (state, action) => {
			state.list = action.payload.data;
			state.pagination.total = Number(action.payload.total);
			state.isLoading = false;
		});
		builder.addCase(fetchItems.rejected, (state, action) => {
			state.error = action.error;
			state.isLoading = false;
		});
	},
});

export const { updateFilters, updatePagination } = itemsSlice.actions;

export default itemsSlice.reducer;
