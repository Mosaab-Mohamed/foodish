import { useState, useEffect } from "react";
import FilterOption from "./FilterOption";
import {
	RadioGroup,
	FormControl,
	FormControlLabel,
	Radio,
} from "@mui/material";
import { useAppDispatch } from "shared/redux/hook";
import { updateFilters } from "shared/redux/features/items/itemsSlice";

export default function FilterBySize() {
	const dispatch = useAppDispatch();
	const [value, setValue] = useState<string | null>(null);

	useEffect(() => {
		dispatch(updateFilters({ name: "defaultSize", value }));

		// eslint-disable-next-line
	}, [value]);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value ? e.target.value : null);
	};
	return (
		<FilterOption name="Size">
			<FormControl>
				<RadioGroup defaultValue="">
					<FormControlLabel
						value=""
						control={<Radio onChange={handleChange} />}
						label="All"
						componentsProps={{
							typography: {
								variant: "subtitle2",
							},
						}}
					/>
					<FormControlLabel
						value="small"
						control={<Radio onChange={handleChange} />}
						label="Small"
						componentsProps={{
							typography: {
								variant: "subtitle2",
							},
						}}
					/>
					<FormControlLabel
						value="medium"
						control={<Radio onChange={handleChange} />}
						label="Medium"
						componentsProps={{
							typography: {
								variant: "subtitle2",
							},
						}}
					/>
					<FormControlLabel
						value="large"
						control={<Radio onChange={handleChange} />}
						label="Large"
						componentsProps={{
							typography: {
								variant: "subtitle2",
							},
						}}
					/>
				</RadioGroup>
			</FormControl>
		</FilterOption>
	);
}
