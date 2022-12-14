import {
	MenuItem,
	FormControl,
	Select,
	SelectChangeEvent,
	Typography,
} from "@mui/material";
import { useAppDispatch } from "shared/redux/hook";
import { updateItem } from "shared/redux/features/cart/asyncThunks";

interface TypeProps {
	cartItemId: number;
	type: "regular" | "combo";
}

export default function Type({ cartItemId, type }: TypeProps) {
	const dispatch = useAppDispatch();

	const handleChange = (e: SelectChangeEvent) => {
		dispatch(updateItem({ id: cartItemId, type: e.target.value }));
	};

	return (
		<FormControl
			variant="standard"
			sx={{ minWidth: 100, textAlign: "start" }}
		>
			<Select
				labelId="demo-simple-select-standard-label"
				id="demo-simple-select-standard"
				value={type}
				onChange={handleChange}
				label="Age"
			>
				<MenuItem value="regular">
					<Typography variant="body2">Regular</Typography>
				</MenuItem>
				<MenuItem value="combo">
					<Typography variant="body2">Combo</Typography>
				</MenuItem>
			</Select>
		</FormControl>
	);
}
