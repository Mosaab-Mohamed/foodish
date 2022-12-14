import PrivateRoute from "./PrivateRoute";
import ReversedRoute from "./ReversedRoute";
import urls from "shared/helpers/urls";
import Layout from "admin/layout/Layout";
import Auth from "admin/auth/Auth";
import Home from "admin/home/Home";
import Users from "admin/users/Users";
import Items from "admin/items/Items";
import ViewItem from "admin/items/ViewItem";
import Categories from "admin/categories/Categories";
import Orders from "admin/orders/Orders";
import ViewOrder from "admin/orders/viewOrder/ViewOrder";
import Messages from "admin/messages/Messages";
import ViewMessage from "admin/messages/ViewMessage";

const adminRoutes = [
	{
		path: urls.admin.home,
		element: (
			<PrivateRoute app="admin">
				<Layout />
			</PrivateRoute>
		),
		children: [
			{
				index: true,
				element: <Home />,
			},
			{
				path: urls.admin.users,
				element: <Users />,
			},

			{
				path: urls.admin.items,
				element: <Items />,
			},
			{
				path: urls.admin.item,
				element: <ViewItem />,
			},
			{
				path: urls.admin.categories,
				element: <Categories />,
			},
			{
				path: urls.admin.orders,
				element: <Orders />,
			},
			{
				path: urls.admin.order,
				element: <ViewOrder />,
			},
			{
				path: urls.admin.messages,
				element: <Messages />,
			},
			{
				path: urls.admin.message,
				element: <ViewMessage />,
			},
		],
	},
	{
		path: "admin/auth",
		element: (
			<ReversedRoute app="admin">
				<Auth />
			</ReversedRoute>
		),
	},
];

export default adminRoutes;
