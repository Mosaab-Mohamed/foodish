import { CartItem } from "store/shared/types/cart";

export const calcItemPrice = (cartItem: CartItem) => {
	const { item, count, size, type } = cartItem;

	const unitPrice = item.price[size];
	const isDiscounted = Boolean(item.discount);
	const unitPriceAfterDiscount =
		unitPrice - (unitPrice * (item.discount as number)) / 100;
	const finalPrice =
		((isDiscounted ? unitPriceAfterDiscount : unitPrice) +
			(type === "combo" ? 30 : 0)) *
		count;

	return Number(finalPrice.toFixed(2));
};

export const calcTotalPrice = (list: CartItem[]) => {
	const itemsPrice = list.reduce(
		(prev, current) => prev + calcItemPrice(current),
		0
	);
	const taxs = Number(((itemsPrice * 14) / 100).toFixed(2));
	const deleivery = 10;
	const total = Number((itemsPrice + taxs + deleivery).toFixed(2));

	return total;
};
