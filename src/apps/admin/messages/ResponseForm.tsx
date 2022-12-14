import { useState } from "react";
import { AxiosError } from "axios";
import { useParams } from "react-router-dom";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { LoadingButton } from "@mui/lab";
import { FormikInput, Alert } from "admin/components";
import { axiosInst } from "shared/system/http";

export default function ResponseForm({
	response,
}: {
	response: string | undefined;
}) {
	const { id } = useParams();
	const [error, setError] = useState<string | null>(null);
	return (
		<>
			<Formik
				initialValues={{ response, replied: true }}
				validationSchema={Yup.object({
					response: Yup.string().required("Required"),
				})}
				onSubmit={async (values, { resetForm }) => {
					try {
						await axiosInst.patch(`messages/${id}`, values);
						window.location.reload();
					} catch (error) {
						if (error instanceof AxiosError) setError(error.message);
					}
				}}
			>
				{({ isSubmitting }) => (
					<Form>
						<FormikInput
							name="response"
							label="Response"
							type="text"
							disabled={Boolean(response)}
							multiline
							minRows={5}
							fullWidth
							sx={{ mb: 2 }}
						/>
						<LoadingButton
							loading={isSubmitting}
							type="submit"
							variant="contained"
							disabled={Boolean(response)}
						>
							Reply
						</LoadingButton>
					</Form>
				)}
			</Formik>
			<Alert
				show={Boolean(error)}
				text={error as string}
				close={() => setError(null)}
				severity="error"
			/>
		</>
	);
}
