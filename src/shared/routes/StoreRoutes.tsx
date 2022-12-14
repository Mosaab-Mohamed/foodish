import PrivateRoute from "./PrivateRoute";
import ReversedRoute from "./ReversedRoute";
import Layout from "store/layout/Layout";
import Auth from "store/auth/Auth";
import Home from "store/home/Home";
import ErrorPage from "./ErrorPage";
import urls from "shared/helpers/urls";
import Wishlist from "store/wishlist/Wishlist";
import Cart from "store/cart/Cart";
import Checkout from "store/checkout/Checkout";
import Orders from "store/orders/Orders";
import ViewOrder from "store/orders/viewOrder/ViewOrder";
import Contact from "store/contact/Contact";

const storeRoutes = [
	{
		path: urls.store.home,
		element: (
			<PrivateRoute app="store">
				<Layout />
			</PrivateRoute>
		),
		errorElement: <ErrorPage />,
		children: [
			{ index: true, element: <Home /> },
			{ path: urls.store.contact, element: <Contact /> },
			{ path: urls.store.wishlist, element: <Wishlist /> },
			{ path: urls.store.cart, element: <Cart /> },
			{ path: urls.store.checkout, element: <Checkout /> },
			{ path: urls.store.orders, element: <Orders /> },
			{ path: urls.store.order, element: <ViewOrder /> },
		],
	},
	{
		path: urls.store.auth,
		element: (
			<ReversedRoute app="store">
				<Auth />
			</ReversedRoute>
		),
	},
];

export default storeRoutes;
