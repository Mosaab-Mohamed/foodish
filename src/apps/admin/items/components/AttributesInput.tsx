import { useState } from "react";
import { List, ListItem, Button, Collapse } from "@mui/material";
import { Field } from "formik";
import { CheckboxWithLabel } from "formik-mui";
import { ExpandLess, ExpandMore } from "@mui/icons-material";

export default function AtrributesInputs() {
	const [open, setOpen] = useState(true);

	const handleClick = () => {
		setOpen(!open);
	};

	return (
		<>
			<Button
				variant="outlined"
				fullWidth
				sx={{
					justifyContent: "space-between",
					textTransform: "capitalize",
				}}
				onClick={handleClick}
				endIcon={open ? <ExpandLess /> : <ExpandMore />}
			>
				Attributes
			</Button>
			<Collapse in={open} timeout="auto" unmountOnExit>
				<List>
					<ListItem>
						<Field
							component={CheckboxWithLabel}
							type="checkbox"
							name="attributes.spicy"
							Label={{ label: "Spicy" }}
						/>
					</ListItem>
					<ListItem>
						<Field
							component={CheckboxWithLabel}
							type="checkbox"
							name="attributes.salty"
							Label={{ label: "Salty" }}
						/>
					</ListItem>
					<ListItem>
						<Field
							component={CheckboxWithLabel}
							type="checkbox"
							name="attributes.sweety"
							Label={{ label: "Sweety" }}
						/>
					</ListItem>
					<ListItem>
						<Field
							component={CheckboxWithLabel}
							type="checkbox"
							name="attributes.fried"
							Label={{ label: "Fried" }}
						/>
					</ListItem>
					<ListItem>
						<Field
							component={CheckboxWithLabel}
							type="checkbox"
							name="attributes.grilled"
							Label={{ label: "Grilled" }}
						/>
					</ListItem>
				</List>
			</Collapse>
		</>
	);
}
