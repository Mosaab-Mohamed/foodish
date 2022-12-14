import { useState, useContext } from "react";
import { LoadingButton } from "@mui/lab";
import { Box, Button, Typography } from "@mui/material";
import { axiosInst } from "shared/system/http";
import { TableContext, TableContextInterface, closeForm } from "../index";

export default function DeleteForm() {
	const {
		formModal: { item },
		setFormModal,
		endpoint,
	} = useContext(TableContext) as TableContextInterface;
	const [isLoading, setIsLoading] = useState<boolean>(false);

	const handleDelete = async () => {
		setIsLoading(true);
		await axiosInst.delete(`${endpoint}/${item?.id}`);
		setIsLoading(false);
		closeForm(setFormModal);
		window.location.reload();
	};

	return (
		<>
			<Typography mb={3}>
				Are you sure you want to delete {item?.name || "this item"}?
			</Typography>
			<Box display="flex" justifyContent="flex-end">
				<LoadingButton
					variant="contained"
					sx={{ mx: 1 }}
					loading={isLoading}
					onClick={handleDelete}
				>
					Yes
				</LoadingButton>
				<Button variant="outlined" onClick={() => closeForm(setFormModal)}>
					Cancel
				</Button>
			</Box>
		</>
	);
}
