import { GridContainer, GridItem, FormikInput } from "admin/components";
import * as Yup from "yup";
import { Typography } from "@mui/material";
import { X } from "admin/components/ActosTable";
import CategoryInput from "./components/CategoryInput";
import SizeInput from "./components/SizeInput";
import AttributeInputs from "./components/AttributesInput";

export const initialValues = (item: X | null) => {
	return {
		name: item?.name || "",
		description: item?.description || "",
		category: item?.category || "",
		price: {
			default: item?.price.default || "",
			small: item?.price.small || "",
			medium: item?.price.medium || "",
			large: item?.price.large || "",
		},
		defaultSize: item?.defaultSize || "",
		discount: item?.discount || "",
		mainImage: item?.mainImage || "",
		attributes: {
			spicy: item?.attributes.spicy || false,
			salty: item?.attributes.salty || false,
			sweety: item?.attributes.sweety || false,
			grilled: item?.attributes.grilled || false,
			fried: item?.attributes.fried || false,
		},
	};
};

export const validationSchema = Yup.object({
	name: Yup.string().required("Required"),
	description: Yup.string().required("Required"),
	category: Yup.string().required("Required"),
	price: Yup.object().shape({
		default: Yup.number().required("Required"),
		small: Yup.number().required("Required"),
		medium: Yup.number().min(1).required("Required"),
		large: Yup.number().min(1).required("Required"),
	}),
	defaultSize: Yup.string().required("Required"),
	discount: Yup.number().min(1),
	mainImage: Yup.string().required("Required"),
});

export default function Form() {
	return (
		<GridContainer spacing={2}>
			<GridItem xs={12}>
				<FormikInput name="name" label="Name" type="text" fullWidth />
			</GridItem>
			<GridItem xs={12}>
				<FormikInput
					name="description"
					label="Description"
					type="text"
					fullWidth
				/>
			</GridItem>
			<GridItem xs={12}>
				<CategoryInput />
			</GridItem>
			<GridItem xs={12}>
				<Typography>Prices</Typography>
			</GridItem>
			<GridItem xs={6}>
				<FormikInput
					name="price.default"
					label="Default Price"
					type="number"
					fullWidth
				/>
			</GridItem>
			<GridItem xs={6}>
				<FormikInput
					name="price.small"
					label="Small Price"
					type="number"
					fullWidth
				/>
			</GridItem>
			<GridItem xs={6}>
				<FormikInput
					name="price.medium"
					label="Meduim Price"
					type="number"
					fullWidth
				/>
			</GridItem>
			<GridItem xs={6}>
				<FormikInput
					name="price.large"
					label="Large Price"
					type="number"
					fullWidth
				/>
			</GridItem>

			<GridItem xs={12}>
				<FormikInput
					name="discount"
					label="Discount"
					type="number"
					fullWidth
				/>
			</GridItem>
			<GridItem xs={12}>
				<SizeInput />
			</GridItem>

			<GridItem xs={12}>
				<FormikInput
					name="mainImage"
					label="Image Link"
					type="text"
					fullWidth
				/>
			</GridItem>
			<GridItem xs={12}>
				<AttributeInputs />
			</GridItem>
		</GridContainer>
	);
}
