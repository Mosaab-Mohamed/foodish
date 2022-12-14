import { Box, Chip } from "@mui/material";
import { Attributes as AttributesInterface } from "store/shared/types/items";

export default function Attributes({
	attributes,
}: {
	attributes: AttributesInterface;
}) {
	return (
		<Box>
			{Object.keys(attributes).map(
				(attr, index) =>
					attributes[attr] && (
						<Chip key={index} label={attr} sx={{ margin: "0 3px" }} />
					)
			)}
		</Box>
	);
}
