import { useContext } from "react";
import {
	Table as MuiTable,
	TableContainer,
	Paper,
	Typography,
} from "@mui/material";
import { TableContext, TableContextInterface } from "../index";
import AddButton from "../components/AddButton";
import { TableHead, TableBody, TablePagination } from "./components";
import ActionModal from "../components/ActionModal";
import ActionForm from "../components/ActionForm";
import DeleteForm from "../components/DeleteForm";
import Filters from "../components/Filters";
import classes from "../style.module.scss";

export default function Table() {
	const {
		pageName,
		form: { FormElement, initialValues, validationSchema },
		formModal: { type },
		actions: { add = true },
	} = useContext(TableContext) as TableContextInterface;

	return (
		<>
			<Paper elevation={2} className={classes.table_helmet}>
				<Typography>{pageName}</Typography>
				{add && <AddButton />}
			</Paper>
			<Filters />
			<TableContainer component={Paper} elevation={1}>
				<MuiTable className={classes.table}>
					<TableHead />
					<TableBody />
				</MuiTable>
				<TablePagination />
			</TableContainer>

			<ActionModal>
				{type === "delete" ? (
					<DeleteForm />
				) : (
					<ActionForm
						initialValues={initialValues}
						validationSchema={validationSchema}
					>
						<FormElement />
					</ActionForm>
				)}
			</ActionModal>
		</>
	);
}
