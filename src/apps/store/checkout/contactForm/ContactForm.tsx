import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { Button } from "@mui/material";
import { ChevronRight } from "@mui/icons-material";
import { Formik, Form } from "formik";
import urls from "shared/helpers/urls";
import { GridContainer, GridItem, FormikInput } from "store/components";
import { validationSchema } from "./helpers";
import { CheckoutContext, CheckoutContextType } from "../Context";
import { useAppSelector } from "shared/redux/hook";

export default function ContactForm() {
	const { contactInfo, setContactInfo, setActiveStep } = useContext(
		CheckoutContext
	) as CheckoutContextType;
	const { list } = useAppSelector((state) => state.cart);

	if (list.length < 1) return <Navigate to={urls.store.cart} replace />;

	return (
		<Formik
			initialValues={contactInfo}
			validationSchema={validationSchema}
			onSubmit={(values, { resetForm }) => {
				setContactInfo(values);
				setActiveStep((prev) => prev + 1);
				resetForm();
			}}
		>
			{() => (
				<Form>
					<GridContainer spacing={2} justifyContent="center">
						<GridItem md={5}>
							<FormikInput
								name="name"
								label="Name"
								type="text"
								variant="filled"
								fullWidth
							/>
						</GridItem>
						<GridItem md={5}>
							<FormikInput
								name="phoneNumber"
								label="Phone Number"
								type="text"
								fullWidth
								variant="filled"
							/>
						</GridItem>

						<GridItem md={5}>
							<FormikInput
								name="email"
								label="Email"
								type="text"
								fullWidth
								variant="filled"
							/>
						</GridItem>
						<GridItem md={5}>
							<FormikInput
								name="city"
								label="City"
								type="text"
								fullWidth
								variant="filled"
							/>
						</GridItem>

						<GridItem md={5}>
							<FormikInput
								name="address"
								label="Address"
								type="text"
								fullWidth
								variant="filled"
							/>
						</GridItem>
						<GridItem md={5}>
							<FormikInput
								name="notes"
								label="Notes"
								type="text"
								fullWidth
								multiline
								variant="filled"
							/>
						</GridItem>
						<GridItem md={10} sx={{ textAlign: "end" }}>
							<Button
								variant="contained"
								type="submit"
								endIcon={<ChevronRight />}
							>
								Continue
							</Button>
						</GridItem>
					</GridContainer>
				</Form>
			)}
		</Formik>
	);
}
