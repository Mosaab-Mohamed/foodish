import { useEffect, useState, useContext } from "react";
import { IconButton, TextField } from "@mui/material";
import { TableContext } from "../Context";
import { TableContextInterface, FILTER } from "../index";
import { Clear } from "@mui/icons-material";

interface TextFilterProps {
	name: string;
	label: string;
}

export default function TextFilter({ name, label }: TextFilterProps) {
	const { dispatch, filterValues } = useContext(
		TableContext
	) as TableContextInterface;
	const [value, setValue] = useState<string | null>(filterValues[name] || "");

	useEffect(() => {
		if (value === filterValues[name] || value === "") return;
		const timeout = setTimeout(() => {
			dispatch({
				type: FILTER,
				payload: { ...filterValues, [name]: value },
			});
		}, 1000);

		return () => {
			clearTimeout(timeout);
		};
	}, [value]);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value ? e.target.value : null);
	};

	const handleRemove = () => {
		const { [name]: x, ...restFilters } = filterValues;
		dispatch({ type: "FILTER", payload: restFilters });
		setValue(null);
	};

	return (
		<TextField
			label={label}
			value={value || ""}
			onChange={handleChange}
			InputProps={
				value
					? {
							endAdornment: (
								<IconButton size="small" onClick={handleRemove}>
									<Clear fontSize="small" />
								</IconButton>
							),
					  }
					: {}
			}
			fullWidth
		/>
	);
}
