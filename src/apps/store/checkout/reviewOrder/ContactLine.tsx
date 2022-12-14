import { Box, SvgIconTypeMap, Typography } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

interface ContactLineProps {
	name: string;
	value: string | undefined;
	Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
		muiName: string;
	};
}

export default function ContactLine({ name, value, Icon }: ContactLineProps) {
	return (
		<Box p={1} display="flex">
			<Icon color="action" sx={{ mr: "5px" }} fontSize="small" />
			<Box>
				<Typography variant="subtitle2">{name}</Typography>
				<Typography variant="body2">{value}</Typography>
			</Box>
		</Box>
	);
}
