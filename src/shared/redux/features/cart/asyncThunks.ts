import { createAsyncThunk } from "@reduxjs/toolkit";
import { CartItem } from "store/shared/types/cart";
import { axiosInst } from "shared/system/http";

export const fetchCart = createAsyncThunk(
	"cart/fetch",
	async (userId: number) => {
		const response = await axiosInst.get(`cart?userID=${userId}`);
		return response.data;
	}
);

export const addItem = createAsyncThunk(
	"cart/add",
	async (params: CartItem) => {
		const response = await axiosInst.post("cart", params);
		return response.data;
	}
);

export const updateItem = createAsyncThunk(
	"cart/update",
	async (params: { id: number; [key: string]: any }) => {
		const { id, ...restParams } = params;
		const response = await axiosInst.patch(`cart/${id}`, restParams);
		return response.data;
	}
);

export const removeItem = createAsyncThunk(
	"cart/remove",
	async (params: { id: number; name: string }) => {
		const response = await axiosInst.delete(`cart/${params.id}`);
		return { status: response.status, id: params.id, name: params.name };
	}
);

export const resetCart = createAsyncThunk("cart/reset", (list: number[]) => {
	Promise.all(
		list.map(async (id) => {
			await axiosInst.delete(`cart/${id}`);
		})
	);
});
