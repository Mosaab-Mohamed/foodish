import { Field } from "formik";
import { MenuItem, FormControl } from "@mui/material";
import { Select } from "formik-mui";

export default function SizeInput() {
	return (
		<FormControl fullWidth>
			<Field component={Select} name="defaultSize" label="Default Size">
				<MenuItem value="small">Small</MenuItem>
				<MenuItem value="medium">Medium</MenuItem>
				<MenuItem value="large">Large</MenuItem>
			</Field>
		</FormControl>
	);
}
