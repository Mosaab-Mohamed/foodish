import { Link } from "react-router-dom";
import { IconButton, Tooltip } from "@mui/material";
import { Visibility } from "@mui/icons-material";

export function ViewButton({ url }: { url: string }) {
	return (
		<Tooltip title="View">
			<Link to={url}>
				<IconButton>
					<Visibility fontSize="small" />
				</IconButton>
			</Link>
		</Tooltip>
	);
}
