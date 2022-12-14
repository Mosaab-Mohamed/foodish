import { SerializedError } from "@reduxjs/toolkit";
import { Item } from "./items";

export interface CartItem {
	id?: number;
	userID?: number;
	item: Item;
	count: number;
	size: "small" | "medium" | "large";
	type: "regular" | "combo";
}

export interface Cart {
	list: CartItem[];
	isLoading: boolean;
	error: SerializedError | null;
	message: string | undefined;
	status: "success" | "failed" | null;
}
