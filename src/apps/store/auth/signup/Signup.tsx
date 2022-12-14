import { useNavigate } from "react-router-dom";
import { Typography } from "@mui/material";
import { Formik, Form } from "formik";
import { FormikInput } from "store/components";
import { initialValues, validationSchema, handleSubmit } from "./helpers";
import { Animated, SubmitButton } from "../components";
import classes from "./style.module.scss";

export default function Signup() {
	const navigate = useNavigate();
	return (
		<Animated className={classes.signup__form}>
			<Typography variant="h4" color="primary" className="font__Marck">
				Sign up
			</Typography>
			<Formik
				initialValues={initialValues}
				validationSchema={validationSchema}
				onSubmit={(values, formikHelpers) =>
					handleSubmit(values, formikHelpers, navigate)
				}
			>
				{({ isSubmitting }) => (
					<Form>
						<FormikInput
							name="name"
							label="User Name"
							type="text"
							variant="standard"
							fullWidth
							margin="dense"
						/>
						<FormikInput
							name="email"
							label="Email Address"
							type="email"
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

						<SubmitButton text="Submit" loading={isSubmitting} />
					</Form>
				)}
			</Formik>
		</Animated>
	);
}
