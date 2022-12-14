interface Urls {
	admin: {
		[key: string]: string;
	};
	store: {
		[key: string]: string;
	};
}

const urls: Urls = {
	admin: {
		home: "/admin",
		auth: "/admin/auth",
		users: "/admin/users",
		items: "/admin/items",
		item: "/admin/items/:id",
		categories: "/admin/categories",
		orders: "/admin/orders",
		order: "/admin/orders/:id",
		messages: "/admin/messages",
		message: "/admin/messages/:id",
	},
	store: {
		home: "/",
		auth: "/auth",
		contact: "/contact",
		wishlist: "/wishlist",
		cart: "/cart",
		checkout: "/cart/checkout",
		orders: "/orders",
		order: "/orders/:id",
	},
};

export default urls;
