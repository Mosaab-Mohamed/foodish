import { useState, useEffect } from "react";
import FilterOption from "./FilterOption";
import { FormGroup, FormControlLabel, Checkbox } from "@mui/material";
import { useAppDispatch } from "shared/redux/hook";
import { updateFilters } from "shared/redux/features/items/itemsSlice";

const attributesArray = [
	{
		name: "spicy",
		label: "Spicy",
	},
	{
		name: "sweety",
		label: "Sweety",
	},
	{
		name: "salty",
		label: "Salty",
	},
	{
		name: "grilled",
		label: "Grilled",
	},
	{
		name: "fried",
		label: "Fried",
	},
];

export default function FilterByAttribute() {
	const dispatch = useAppDispatch();
	const [value, setValue] = useState<{ [key: string]: boolean } | null>(null);

	useEffect(() => {
		if (!value) return;
		dispatch(updateFilters({ name: "attributes", value }));

		// eslint-disable-next-line
	}, [value]);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (value?.[e.target.name] && !e.target.checked) {
			setValue((prev) => {
				const valueCopy = { ...prev };
				delete valueCopy[e.target.name];
				return valueCopy;
			});
			return;
		}
		setValue((prev) => {
			return { ...prev, [e.target.name]: e.target.checked };
		});
	};

	return (
		<FilterOption name="Attribute">
			<FormGroup>
				{attributesArray.map((attribute, index) => (
					<FormControlLabel
						key={index}
						control={
							<Checkbox name={attribute.name} onChange={handleChange} />
						}
						label={attribute.label}
						componentsProps={{
							typography: { variant: "subtitle2" },
						}}
					/>
				))}
			</FormGroup>
		</FilterOption>
	);
}
