import { TextFieldProps } from "@mui/material";
import { Field } from "formik";
import { TextField } from "formik-mui";

interface TextInputProps {
	name: string;
	label: string;
	type: string;
}

export function FormikInput({
	name,
	label,
	type,
	...props
}: TextInputProps & TextFieldProps) {
	return (
		<Field
			name={name}
			label={label}
			type={type}
			component={TextField}
			{...props}
		/>
	);
}
