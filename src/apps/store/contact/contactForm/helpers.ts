import { AxiosError } from "axios";
import * as Yup from "yup";
import { FormikHelpers } from "formik";
import { axiosInst } from "shared/system/http";
import { Message } from "store/shared/types/messages";

export const initialValues: Message = {
	name: "",
	email: "",
	phoneNumber: "",
	subject: "",
	content: "",
	replied: false,
};

export type NoteState = {
	status: "success" | "error";
	text: string;
} | null;

type SubmitFunction = (
	values: Message,
	formikHelpers: FormikHelpers<Message>,
	setNote: React.Dispatch<React.SetStateAction<NoteState>>
) => Promise<any> | void;

export const validationSchema = Yup.object({
	name: Yup.string().required("Name is required"),
	email: Yup.string().email().required("Email is required"),
	phoneNumber: Yup.string().matches(/[0-9]/, "Invalid phone number").min(10),
	subject: Yup.string().required("Subject is required"),
	content: Yup.string().required("Message is required"),
});

export const handleSubmit: SubmitFunction = async (
	values,
	formikHelpers,
	setNote
) => {
	try {
		await axiosInst.post("messages", values);
		setNote({ status: "success", text: "Message was sent successfuly" });
		formikHelpers.resetForm();
	} catch (error) {
		if (error instanceof AxiosError)
			setNote({ status: "error", text: error.message });
		formikHelpers.resetForm();
	}
};
