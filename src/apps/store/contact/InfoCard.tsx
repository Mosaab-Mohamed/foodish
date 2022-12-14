import { Phone, Email, Place } from "@mui/icons-material";
import { Box, Paper, Typography } from "@mui/material";

export default function InfoCard() {
	return (
		<Paper elevation={3} className="info_card">
			<Box display="flex" alignItems="center" mb={2}>
				<Box className="icon_box">
					<Phone color="inherit" />
				</Box>
				<Typography>
					<a href="tel:0102365487">0102365487</a>
				</Typography>
			</Box>
			<Box display="flex" alignItems="center" mb={2}>
				<Box className="icon_box">
					<Email color="inherit" />
				</Box>
				<Typography>
					<a href="mailto:contact@foodish.com">contact@foodish.com</a>
				</Typography>
			</Box>
			<Box display="flex" alignItems="center">
				<Box className="icon_box">
					<Place color="inherit" />
				</Box>
				<Typography>Alex, Gleem</Typography>
			</Box>
		</Paper>
	);
}
