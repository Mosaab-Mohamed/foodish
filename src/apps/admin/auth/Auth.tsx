import { Box } from "@mui/material";
import { GridContainer, GridItem } from "admin/components";
import Login from "./login/Login";
import Illustration from "./Illustration";

export default function AuthPage() {
	return (
		<Box padding={5}>
			<GridContainer spacing={10} alignItems="center">
				<GridItem xs={5}>
					<Illustration />
				</GridItem>

				<GridItem xs={7}>
					<Login />
				</GridItem>
			</GridContainer>
		</Box>
	);
}
