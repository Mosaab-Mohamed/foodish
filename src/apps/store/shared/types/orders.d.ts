import { SerializedError } from "@reduxjs/toolkit";
import { Item } from "./items";

export interface Order {
	id?: number;
	userID: number;
	list: {
		item: Item;
		count: number;
		size: "small" | "medium" | "large";
		type: "regular" | "combo";
	}[];
	contactInfo: {
		name: string;
		phoneNumber: string;
		email?: string;
		city: string;
		address: string;
		notes?: string;
	};
	date: string;
	status:
		| "received"
		| "under_preparing"
		| "on_way"
		| "delivered"
		| "cancelled";
}

export interface Orders {
	list: Order[];
	order: Order | null;
	lastCreated: number | null;
	isLoading: boolean;
	error: SerializedError | null;
}
