import * as Yup from "yup";

export interface ContactInfo {
	name: string;
	phoneNumber: string;
	email: string;
	city: string;
	address: string;
	notes: string;
}

export const initialValues: ContactInfo = {
	name: "",
	phoneNumber: "",
	email: "",
	city: "",
	address: "",
	notes: "",
};

export const validationSchema = Yup.object({
	name: Yup.string().required("Name is required"),
	phoneNumber: Yup.string()
		.matches(/[0-9]/, "Invalid phone number")
		.min(10)
		.required("Phone number is required"),
	email: Yup.string().email(),
	city: Yup.string().required("Required"),
	address: Yup.string().required("Address is required"),
});
