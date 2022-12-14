import {
	Typography,
	Accordion,
	AccordionSummary,
	AccordionDetails,
	AccordionProps,
} from "@mui/material";
import { ExpandMore } from "@mui/icons-material";

interface FilterOptionProps {
	name: string;
	children?: React.ReactNode;
	accordionProps?: Omit<AccordionProps, "children">;
}

export default function FilterOption(props: FilterOptionProps) {
	const { name, children, accordionProps } = props;
	return (
		<Accordion disableGutters {...accordionProps}>
			<AccordionSummary expandIcon={<ExpandMore />}>
				<Typography variant="subtitle2">{name}</Typography>
			</AccordionSummary>
			<AccordionDetails>{children}</AccordionDetails>
		</Accordion>
	);
}
