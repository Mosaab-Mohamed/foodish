import { useContext } from "react";
import { Close } from "@mui/icons-material";
import { Box, IconButton, Modal, Paper, Typography } from "@mui/material";
import { TableContext, TableContextInterface } from "../index";
import { closeForm } from "../helpers";
import classes from "../style.module.scss";

interface ActionModalProps {
	children: React.ReactNode;
}

export default function ActionModal({ children }: ActionModalProps) {
	const {
		formModal: { isOpen, name, type },
		setFormModal,
		form: { size },
	} = useContext(TableContext) as TableContextInterface;

	return (
		<Modal open={isOpen} onClose={() => closeForm(setFormModal)}>
			<Paper
				className={`${classes.modal_box} ${
					size === "large" && type !== "delete" ? classes.full_size : ""
				} `}
				elevation={5}
			>
				<Box className="modal_header">
					<Typography>{name}</Typography>
					<IconButton
						onClick={() => closeForm(setFormModal)}
						color="inherit"
					>
						<Close />
					</IconButton>
				</Box>

				<Box className="modal_content">{children}</Box>
			</Paper>
		</Modal>
	);
}
