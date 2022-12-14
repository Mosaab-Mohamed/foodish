import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Typography, Box } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { Formik, Form } from "formik";
import { Alert, GridContainer, GridItem, FormikInput } from "admin/components";
import { initialValues, validationSchema, handleSubmit } from "./helpers";
import classes from "./style.module.scss";

export default function Login() {
	const navigate = useNavigate();
	const [isError, setIsError] = useState<boolean>(false);

	return (
		<Box className={classes.login__form}>
			<Typography
				variant="h4"
				color="primary"
				className="font__Marck"
				gutterBottom
			>
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
						<GridContainer spacing={2}>
							<GridItem md={12}>
								<FormikInput
									name="email"
									label="Email Address"
									type="text"
									variant="outlined"
									fullWidth
									margin="dense"
								/>
							</GridItem>
							<GridItem md={12}>
								<FormikInput
									name="password"
									label="Password"
									type="password"
									variant="outlined"
									fullWidth
									margin="dense"
								/>
							</GridItem>
							<GridItem md={12}>
								<LoadingButton
									type="submit"
									loading={isSubmitting}
									variant="contained"
									fullWidth
								>
									Login
								</LoadingButton>
							</GridItem>
						</GridContainer>
					</Form>
				)}
			</Formik>

			<Alert
				show={isError}
				severity="error"
				text="Incorrect email or password"
				close={() => setIsError(false)}
			/>
		</Box>
	);
}
