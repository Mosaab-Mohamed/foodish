import { useState } from "react";
import {
	Card,
	CardHeader,
	CardMedia,
	CardContent,
	CardActions,
	Typography,
} from "@mui/material";
import { OverlayLoader } from "store/components";
import { Item } from "store/shared/types/items";
import Animated from "./Animated";
import Price from "./Price";
import Attributes from "./Attributes";
import WishlistButton from "./WishlistButton";
import CartButton from "./CartButton";

export function ItemCard({ item }: { item: Item }) {
	const [isLoading, setIsLoading] = useState<boolean>(false);

	return (
		<Animated>
			<Card raised sx={{ position: "relative" }}>
				<OverlayLoader show={isLoading} />
				<CardHeader
					title={<Typography variant="h6">{item.name}</Typography>}
					subheader={
						<Typography variant="body2">{item.description}</Typography>
					}
					disableTypography
					action={
						<WishlistButton item={item} setIsLoading={setIsLoading} />
					}
				/>
				<CardMedia
					component="img"
					image={item.mainImage}
					alt={item.name}
					sx={{ height: 250, objectFit: "cover" }}
				/>
				<CardContent>
					<Price price={item.price.default} discount={item.discount} />
					<Attributes attributes={item.attributes} />
				</CardContent>
				<CardActions disableSpacing sx={{ padding: 0 }}>
					<CartButton item={item} setIsLoading={setIsLoading} />
				</CardActions>
			</Card>
		</Animated>
	);
}
