import { SerializedError } from "@reduxjs/toolkit";

export interface Item {
	id: number;
	name: string;
	description: string;
	price: SizePrice;
	discount: number | null;
	category: string;
	defaultSize: "small" | "medium" | "large";
	mainImage: string;
	images: string[];
	attributes: Attributes;
	[key: string]: any;
}

interface SizePrice {
	default: number;
	small: number;
	medium: number;
	large: number;
}

interface Attributes {
	[key: string]: boolean;
}

export interface ItemsList {
	list: Item[];
	filters: FilterOptions;
	pagination: {
		_page: number;
		_limit: number;
		total: number | undefined;
	};
	isLoading: boolean;
	error: SerializedError | null;
}

export interface FilterOptions {
	name: string | null;
	category: string | null;
	size: string | null;
	attributes: Attributes | null;
	price_lte: number | null;
}

export interface PaginationOptions {
	_page: number;
	_limit: number;
}
