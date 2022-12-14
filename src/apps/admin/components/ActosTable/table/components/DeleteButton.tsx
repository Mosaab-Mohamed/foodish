import { useContext } from "react";
import { IconButton, Tooltip } from "@mui/material";
import { Delete } from "@mui/icons-material";
import { X, TableContext, TableContextInterface } from "../../index";

export function DeleteButton({ item }: { item: X }) {
	const { setFormModal } = useContext(TableContext) as TableContextInterface;

	const handleClick = () => {
		setFormModal({ isOpen: true, type: "delete", name: "Delete", item });
	};

	return (
		<>
			<Tooltip title="Delete">
				<IconButton onClick={handleClick}>
					<Delete fontSize="small" />
				</IconButton>
			</Tooltip>
		</>
	);
}
