import { useState, useEffect } from "react";
import { Slider } from "@mui/material";
import FilterOption from "./FilterOption";
import { useAppDispatch } from "shared/redux/hook";
import { updateFilters } from "shared/redux/features/items/itemsSlice";

export default function FilterByPrice() {
	const dispatch = useAppDispatch();
	const [value, setValue] = useState<number | null>(null);

	useEffect(() => {
		const timeout = setTimeout(() => {
			dispatch(updateFilters({ name: "price.default_lte", value }));
		}, 1000);

		return () => {
			clearTimeout(timeout);
		};
		// eslint-disable-next-line
	}, [value]);

	const handleChange = (e: Event, newValue: any) => {
		setValue(newValue ? newValue : null);
	};

	return (
		<FilterOption name="Max Price">
			<Slider valueLabelDisplay="auto" onChange={handleChange} />
		</FilterOption>
	);
}
