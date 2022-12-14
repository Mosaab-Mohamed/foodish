import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { Order, Orders } from "store/shared/types/orders";
import { axiosInst } from "shared/system/http";

const initialState: Orders = {
	list: [],
	order: null,
	lastCreated: null,
	isLoading: false,
	error: null,
};

export const fetchOrders = createAsyncThunk(
	"orders/fetch",
	async (userId: number) => {
		const response = await axiosInst.get(`orders?userID=${userId}`);
		return response.data;
	}
);

export const createOrder = createAsyncThunk(
	"orders/create",
	async (params: Order) => {
		const response = await axiosInst.post("orders", params);
		return response.data;
	}
);

export const fetchOrder = createAsyncThunk(
	"orders/fetchOrder",
	async (id: number) => {
		const response = await axiosInst.get(`orders/${id}`);
		return response.data;
	}
);

const ordersSlice = createSlice({
	name: "orders",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		// Fetch Orders
		builder.addCase(fetchOrders.pending, (state) => {
			state.isLoading = true;
		});
		builder.addCase(
			fetchOrders.fulfilled,
			(state, action: PayloadAction<Order[]>) => {
				state.list = action.payload;
				state.isLoading = false;
			}
		);
		builder.addCase(fetchOrders.rejected, (state, action) => {
			state.error = action.error;
			state.isLoading = false;
		});

		// Create Order
		builder.addCase(createOrder.pending, (state) => {
			state.isLoading = true;
		});
		builder.addCase(
			createOrder.fulfilled,
			(state, action: PayloadAction<Order>) => {
				state.lastCreated = action.payload.id as number;
				state.isLoading = false;
			}
		);
		builder.addCase(createOrder.rejected, (state, action) => {
			state.error = action.error;
			state.isLoading = false;
		});

		// Fetch Order
		builder.addCase(fetchOrder.pending, (state) => {
			state.isLoading = true;
		});
		builder.addCase(
			fetchOrder.fulfilled,
			(state, action: PayloadAction<Order>) => {
				state.order = action.payload;
				state.isLoading = false;
			}
		);
		builder.addCase(fetchOrder.rejected, (state, action) => {
			state.error = action.error;
			state.isLoading = false;
		});
	},
});

export default ordersSlice.reducer;
