import { useContext, useState } from "react";
import { AxiosError } from "axios";
import { LoadingButton } from "@mui/lab";
import { Form as FormikForm, Formik, FormikValues } from "formik";
import { axiosInst } from "shared/system/http";
import { Alert } from "admin/components";
import {
	TableContext,
	TableContextInterface,
	ActionFormProps,
	closeForm,
} from "admin/components/ActosTable";

export default function ActionForm(props: ActionFormProps) {
	const { initialValues, validationSchema, children } = props;
	const [error, setError] = useState<string | null>(null);
	const {
		endpoint,
		formModal: { type, item },
		setFormModal,
	} = useContext(TableContext) as TableContextInterface;

	const handleSubmit = async (values: FormikValues) => {
		try {
			if (type === "edit") {
				await axiosInst.patch(`${endpoint}/${item?.id}`, values);
				closeForm(setFormModal);
				window.location.reload();
				return;
			}

			await axiosInst.post(endpoint, values);
			closeForm(setFormModal);
			window.location.reload();
		} catch (error) {
			if (error instanceof AxiosError) setError(error.message);
		}
	};

	return (
		<>
			<Formik
				initialValues={initialValues(item)}
				validationSchema={validationSchema}
				onSubmit={handleSubmit}
			>
				{({ isSubmitting }) => (
					<FormikForm>
						{children}
						<LoadingButton
							type="submit"
							loading={isSubmitting}
							variant="contained"
							sx={{ mt: 2 }}
						>
							Save
						</LoadingButton>
					</FormikForm>
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
