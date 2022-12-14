import { useState } from "react";
import { LoadingButton } from "@mui/lab";
import { Formik, Form } from "formik";
import { GridContainer, GridItem, FormikInput, Alert } from "store/components";
import {
	initialValues,
	validationSchema,
	handleSubmit,
	NoteState,
} from "./helpers";

export default function ContactForm() {
	const [note, setNote] = useState<NoteState>(null);
	return (
		<>
			<Formik
				initialValues={initialValues}
				validationSchema={validationSchema}
				onSubmit={(values, formikHelpers) => {
					handleSubmit(values, formikHelpers, setNote);
				}}
			>
				{({ isSubmitting }) => (
					<Form>
						<GridContainer spacing={3}>
							<GridItem md={6}>
								<FormikInput
									name="name"
									label="Name"
									type="text"
									variant="filled"
									fullWidth
								/>
							</GridItem>
							<GridItem md={6}>
								<FormikInput
									name="email"
									label="Email"
									type="email"
									variant="filled"
									fullWidth
								/>
							</GridItem>

							<GridItem md={6}>
								<FormikInput
									name="phoneNumber"
									label="Phone Number"
									type="text"
									variant="filled"
									fullWidth
								/>
							</GridItem>
							<GridItem md={6}>
								<FormikInput
									name="subject"
									label="Subject"
									type="text"
									variant="filled"
									fullWidth
								/>
							</GridItem>

							<GridItem md={12}>
								<FormikInput
									name="content"
									label="Message"
									type="text"
									variant="filled"
									fullWidth
									multiline
									rows={5}
								/>
							</GridItem>
							<GridItem md={4}>
								<LoadingButton
									type="submit"
									variant="contained"
									fullWidth
									loading={isSubmitting}
								>
									Send
								</LoadingButton>
							</GridItem>
						</GridContainer>
					</Form>
				)}
			</Formik>
			<Alert
				show={Boolean(note)}
				severity={note?.status}
				text={note?.text as string}
				close={() => setNote(null)}
			/>
		</>
	);
}
