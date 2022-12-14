import React, { useState, useEffect } from "react";
import { IconButton, TextField } from "@mui/material";
import FilterOption from "./FilterOption";
import { useAppDispatch } from "shared/redux/hook";
import { updateFilters } from "shared/redux/features/items/itemsSlice";
import { Clear } from "@mui/icons-material";

export default function FilterByName() {
	const dispatch = useAppDispatch();
	const [value, setValue] = useState<string | null>(null);

	useEffect(() => {
		const timeout = setTimeout(
			() => dispatch(updateFilters({ name: "name", value })),
			1000
		);
		return () => {
			clearTimeout(timeout);
		};

		// eslint-disable-next-line
	}, [value]);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value ? e.target.value : null);
	};

	return (
		<FilterOption name="Name" accordionProps={{ defaultExpanded: true }}>
			<TextField
				size="small"
				placeholder="Search"
				fullWidth
				value={value ? value : ""}
				onChange={handleChange}
				InputProps={
					value
						? {
								endAdornment: (
									<IconButton
										size="small"
										onClick={() => setValue(null)}
									>
										<Clear fontSize="small" />
									</IconButton>
								),
						  }
						: {}
				}
			/>
		</FilterOption>
	);
}
