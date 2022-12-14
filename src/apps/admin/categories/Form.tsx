import { GridContainer, GridItem, FormikInput } from "admin/components";
import * as Yup from "yup";
import { X } from "admin/components/ActosTable";

export const initialValues = (item: X | null) => {
	return {
		name: item?.name || "",
		value: item?.value || null,
		image: item?.image || "",
	};
};
export const validationSchema = Yup.object({
	name: Yup.string().required("Name is required"),
	value: Yup.string().nullable(),
	image: Yup.string().required("Image is required"),
});

export default function Form() {
	return (
		<GridContainer>
			<GridItem xs={12}>
				<FormikInput name="name" label="Name" type="text" fullWidth />
			</GridItem>
			<GridItem xs={12}>
				<FormikInput name="value" label="Value" type="text" fullWidth />
			</GridItem>
			<GridItem xs={12}>
				<FormikInput
					name="image"
					label="Image Link"
					type="text"
					fullWidth
				/>
			</GridItem>
		</GridContainer>
	);
}
