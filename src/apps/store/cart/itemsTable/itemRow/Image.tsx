import { Box, Typography } from "@mui/material";

interface ItemImageProps {
	image: string;
	name: string;
}

export default function ItemImage({ image, name }: ItemImageProps) {
	return (
		<Box>
			<img
				src={image}
				alt={name}
				style={{
					width: "80px",
					height: "80px",
					objectFit: "cover",
					borderRadius: "50%",
				}}
			/>
			<Typography variant="subtitle2">{name}</Typography>
		</Box>
	);
}
