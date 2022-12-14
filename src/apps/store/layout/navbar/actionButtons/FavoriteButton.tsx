import { Link } from "react-router-dom";
import { IconButton, Badge } from "@mui/material";
import { Favorite as FavoriteIcon } from "@mui/icons-material";
import { useAppSelector } from "shared/redux/hook";
import urls from "shared/helpers/urls";

export default function FavoriteButton() {
	const { list } = useAppSelector((state) => state.wishlist);

	return (
		<Link to={urls.store.wishlist}>
			<IconButton>
				<Badge
					badgeContent={list.length}
					color="primary"
					showZero
					overlap="circular"
				>
					<FavoriteIcon />
				</Badge>
			</IconButton>
		</Link>
	);
}
