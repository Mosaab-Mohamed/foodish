import { NavigateFunction } from "react-router-dom";
import { FormikHelpers } from "formik";
import * as Yup from "yup";
import { axiosInst } from "shared/system/http";
import user from "shared/helpers/user";
import urls from "shared/helpers/urls";

interface Values {
	[key: string]: string;
}

type SubmitFunction = (
	values: Values,
	{ resetForm }: FormikHelpers<Values>,
	navigate: NavigateFunction
) => void | Promise<any>;

export const initialValues: Values = {
	name: "",
	email: "",
	password: "",
};

export const validationSchema = Yup.object({
	name: Yup.string().required("User name is required"),
	email: Yup.string()
		.email("Invalid email address")
		.required("Email address is required"),
	password: Yup.string().required("Password is required"),
});

export const handleSubmit: SubmitFunction = async (
	values,
	{ resetForm },
	navigate
) => {
	const { data: userObj } = await axiosInst.post("/users", user.init(values));
	resetForm();
	// TODO: Modify correctly when integrating with the backend
	if (userObj) {
		user.login(userObj);
		navigate(urls.store.home, { replace: true });
	}
};
