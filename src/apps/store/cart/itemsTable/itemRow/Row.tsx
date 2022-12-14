import { TableRow, TableCell } from "@mui/material";
import { CartItem } from "store/shared/types/cart";
import ItemImage from "./Image";
import ItemQuantity from "./Quantity";
import ItemSize from "./Size";
import Type from "./Type";
import Price from "./Price";
import Actions from "./Actions";

export default function ItemRow({ item }: { item: CartItem }) {
	return (
		<TableRow>
			<TableCell>
				<ItemImage image={item.item.mainImage} name={item.item.name} />
			</TableCell>
			<TableCell>
				<ItemQuantity
					cartItemId={item.id as number}
					count={item.count}
					name={item.item.name}
				/>
			</TableCell>
			<TableCell>
				<ItemSize cartItemId={item.id as number} size={item.size} />
			</TableCell>
			<TableCell>
				<Type cartItemId={item.id as number} type={item.type} />
			</TableCell>
			<TableCell>
				<Price cartItem={item} />
			</TableCell>
			<TableCell>
				<Actions cartItem={item} />
			</TableCell>
		</TableRow>
	);
}
