import { NavigateFunction } from "react-router-dom";
import { FormikHelpers } from "formik";
import * as Yup from "yup";
import { axiosInst } from "shared/system/http";
import user from "shared/helpers/user";
import { UserInterface } from "store/shared/types/users";
import urls from "shared/helpers/urls";

interface Values {
	[key: string]: string;
}

type SubmitFunction = (
	values: Values,
	{ resetForm }: FormikHelpers<Values>,
	navigate: NavigateFunction,
	setIsError: React.Dispatch<React.SetStateAction<boolean>>
) => void | Promise<any>;

export const initialValues: Values = {
	email: "",
	password: "",
};

export const validationSchema = Yup.object({
	email: Yup.string()
		.email("Invalid email address")
		.required("Email address is required"),
	password: Yup.string().required("Password is required"),
});

export const handleSubmit: SubmitFunction = async (
	values,
	{ resetForm },
	navigate,
	setIsError
) => {
	// TODO: Modify when integrating with the backend
	const { data: users } = await axiosInst.get("admins");
	resetForm();
	const userObj = users.find(
		(user: UserInterface) =>
			user.email === values.email && user.password === values.password
	);
	if (userObj) {
		user.login(userObj);
		navigate(urls.admin.home, { replace: true });
	}

	if (!userObj) {
		setIsError(true);
	}

	// TODO: Handle if user not found
};
