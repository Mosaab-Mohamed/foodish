import { Typography } from "@mui/material";
import { calcItemPrice } from "../../helpers";
import { CartItem } from "store/shared/types/cart";

export default function Price({ cartItem }: { cartItem: CartItem }) {
	return <Typography>{calcItemPrice(cartItem)}$</Typography>;
}
