import {
	MenuItem,
	FormControl,
	Select,
	SelectChangeEvent,
	Typography,
} from "@mui/material";
import { useAppDispatch } from "shared/redux/hook";
import { updateItem } from "shared/redux/features/cart/asyncThunks";

interface ItemSizeProps {
	cartItemId: number;
	size: "small" | "medium" | "large";
}

export default function ItemSize({ cartItemId, size }: ItemSizeProps) {
	const dispatch = useAppDispatch();

	const handleChange = (e: SelectChangeEvent) => {
		dispatch(updateItem({ id: cartItemId, size: e.target.value }));
	};

	return (
		<FormControl
			variant="standard"
			sx={{ minWidth: 100, textAlign: "start" }}
		>
			<Select
				labelId="demo-simple-select-standard-label"
				id="demo-simple-select-standard"
				value={size}
				onChange={handleChange}
				label="Age"
			>
				<MenuItem value="small">
					<Typography variant="body2">Small</Typography>
				</MenuItem>
				<MenuItem value="medium">
					<Typography variant="body2">Medium</Typography>
				</MenuItem>
				<MenuItem value="large">
					<Typography variant="body2">Large</Typography>
				</MenuItem>
			</Select>
		</FormControl>
	);
}
