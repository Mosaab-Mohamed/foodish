import { Box, Typography } from "@mui/material";

interface CategoryProps {
	image: string;
	name: string;
	active: boolean;
}

export default function CategoryCard(props: CategoryProps) {
	const { image, name, active } = props;

	return (
		<Box className={`category_card ${active ? "active_category" : ""}`}>
			<img src={image} alt={name} className="category_img" />
			<Typography variant="h5" className="category_name">
				{name}
			</Typography>
		</Box>
	);
}
