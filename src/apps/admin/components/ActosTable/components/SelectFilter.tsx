import { useContext, useState, useEffect } from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { TableContext } from "../Context";
import { SelectItem, TableContextInterface, FILTER } from "../index";
import { axiosInst } from "shared/system/http";

interface SelectFilterProps {
	name: string;
	label: string;
	list?: SelectItem[];
	endpoint?: string;
}

export default function SelectFilter({
	name,
	label,
	list,
	endpoint,
}: SelectFilterProps) {
	const { filterValues, dispatch } = useContext(
		TableContext
	) as TableContextInterface;

	const [selectList, setSelectList] = useState(list || []);
	const [value, setValue] = useState(filterValues[name] || "");

	useEffect(() => {
		if (endpoint) {
			const fetchData = async () => {
				const response = await axiosInst(endpoint);
				setSelectList(response.data);
			};

			fetchData();
		}
	}, []);

	useEffect(() => {
		if (value === filterValues[name] || value === "") return;
		dispatch({ type: FILTER, payload: { ...filterValues, [name]: value } });
	}, [value]);

	return (
		<FormControl fullWidth>
			<InputLabel>{label}</InputLabel>
			<Select
				label={label}
				value={value}
				onChange={(e) => setValue(e.target.value)}
			>
				{selectList.map((item, index) => (
					<MenuItem key={index} value={item.value}>
						{item.name}
					</MenuItem>
				))}
			</Select>
		</FormControl>
	);
}
