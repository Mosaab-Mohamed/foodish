import * as Yup from "yup";
import { FormikInput, GridContainer, GridItem } from "admin/components";
import { X } from "admin/components/ActosTable";

export const validationSchema = Yup.object({
	name: Yup.string().required("User name is required"),
	email: Yup.string()
		.email("Invalid email address")
		.required("Email address is required"),
	password: Yup.string().required("Password is required"),
});

export const initialValues = (item?: X | null) => {
	return {
		name: item?.name || "",
		email: item?.email || "",
		password: item?.password || "",
	};
};

export default function Form() {
	return (
		<GridContainer spacing={3}>
			<GridItem md={12}>
				<FormikInput name="name" label="Name" type="text" fullWidth />
			</GridItem>
			<GridItem md={12}>
				<FormikInput name="email" label="Email" type="email" fullWidth />
			</GridItem>
			<GridItem md={12}>
				<FormikInput
					name="password"
					label="Password"
					type="Password"
					fullWidth
				/>
			</GridItem>
		</GridContainer>
	);
}
