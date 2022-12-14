import { Item } from "./items";

export interface WishlistItem {
	id?: number;
	userID: number;
	item: Item;
}

export interface Wishlist {
	list: wishlistItem[];
	isLoading: boolean;
	error: SerializedError | null;
	message: string | undefined;
	status: "success" | "failed" | null;
}
