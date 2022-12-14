import { useContext } from "react";
import { Button } from "@mui/material";
import { AddCircle } from "@mui/icons-material";
import { TableContext, TableContextInterface } from "../index";

export default function AddButton() {
	const { setFormModal } = useContext(TableContext) as TableContextInterface;

	const handleClick = () => {
		setFormModal({ isOpen: true, type: "create", name: "Add" });
	};

	return (
		<Button
			variant="contained"
			startIcon={<AddCircle />}
			onClick={handleClick}
		>
			Add
		</Button>
	);
}
