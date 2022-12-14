import { useState, useEffect } from "react";
import { Field } from "formik";
import { MenuItem, FormControl } from "@mui/material";
import { Select } from "formik-mui";
import { Category } from "store/shared/types/categories";
import { axiosInst } from "shared/system/http";

export default function CategoryInput() {
	const [list, setList] = useState<Category[]>([]);

	const fetchData = async () => {
		const response = await axiosInst.get("categories");
		setList(response.data);
	};

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<FormControl fullWidth>
			<Field component={Select} name="category" label="Category">
				{list.map((item) => (
					<MenuItem key={item.id} value={item.value}>
						{item.name}
					</MenuItem>
				))}
			</Field>
		</FormControl>
	);
}
