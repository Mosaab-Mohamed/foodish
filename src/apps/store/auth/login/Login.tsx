import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Typography } from "@mui/material";
import { Formik, Form } from "formik";
import { FormikInput } from "store/components";
import { initialValues, validationSchema, handleSubmit } from "./helpers";
import {
	Animated,
	FacebookLogin,
	SubmitButton,
	GoogleLogin,
} from "../components";
import classes from "./style.module.scss";
import { Alert } from "store/components";

export default function Login() {
	const navigate = useNavigate();
	const [isError, setIsError] = useState<boolean>(false);

	return (
		<Animated className={classes.login__form}>
			<Typography variant="h4" color="primary" className="font__Marck">
				login
			</Typography>
			<Formik
				initialValues={initialValues}
				validationSchema={validationSchema}
				onSubmit={(values, formikHelpers) =>
					handleSubmit(values, formikHelpers, navigate, setIsError)
				}
			>
				{({ isSubmitting }) => (
					<Form>
						<FormikInput
							name="email"
							label="Email Address"
							type="text"
							variant="standard"
							fullWidth
							margin="dense"
						/>
						<FormikInput
							name="password"
							label="Password"
							type="password"
							variant="standard"
							fullWidth
							margin="dense"
						/>
						<SubmitButton text="login" loading={isSubmitting} />
					</Form>
				)}
			</Formik>

			<GoogleLogin navigate={navigate} />
			<FacebookLogin navigate={navigate} />

			<Alert
				show={isError}
				severity="error"
				text="Incorrect email or password"
				close={() => setIsError(false)}
			/>
		</Animated>
	);
}
