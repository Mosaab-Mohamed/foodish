import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import user from "shared/helpers/user";
import { useAppDispatch } from "shared/redux/hook";
import { fetchWishlist } from "shared/redux/features/wishlist/wishlistSlice";
import { fetchCart } from "shared/redux/features/cart/asyncThunks";

export default function Root() {
	const dispatch = useAppDispatch();
	const userInfo = user.info();

	useEffect(() => {
		dispatch(fetchWishlist(userInfo.id));
		dispatch(fetchCart(userInfo.id));

		// eslint-disable-next-line
	}, []);
	return (
		<>
			<Navbar />
			<Outlet />
		</>
	);
}
