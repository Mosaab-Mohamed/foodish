import { Link } from "react-router-dom";
import { IconButton, Badge } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";
import { useAppSelector } from "shared/redux/hook";
import urls from "shared/helpers/urls";

export default function CartButton() {
	const { list } = useAppSelector((state) => state.cart);

	const count: number = list.reduce(
		(prev, current) => (prev += current.count),
		0
	);
	return (
		<Link to={urls.store.cart}>
			<IconButton>
				<Badge
					badgeContent={count}
					color="primary"
					showZero
					overlap="circular"
				>
					<ShoppingCart />
				</Badge>
			</IconButton>
		</Link>
	);
}
