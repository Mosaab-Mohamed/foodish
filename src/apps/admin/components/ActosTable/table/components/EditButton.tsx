import { useContext } from "react";
import { IconButton, Tooltip } from "@mui/material";
import { Edit } from "@mui/icons-material";
import { TableContext, TableContextInterface, X } from "../../index";

export function EditButton({ item }: { item: X }) {
	const { setFormModal } = useContext(TableContext) as TableContextInterface;

	const handleClick = () => {
		setFormModal({ isOpen: true, type: "edit", name: "Edit ", item });
	};
	return (
		<Tooltip title="Edit">
			<IconButton onClick={handleClick}>
				<Edit fontSize="small" />
			</IconButton>
		</Tooltip>
	);
}
