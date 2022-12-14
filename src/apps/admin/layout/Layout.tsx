import { Outlet } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
import LayoutProvider from "./Context";
import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";

export const DrawerHeader = styled("div")(({ theme }) => ({
	display: "flex",
	alignItems: "center",
	justifyContent: "flex-end",
	padding: theme.spacing(0, 1),
	// necessary for content to be below app bar
	...theme.mixins.toolbar,
}));

export default function Layout() {
	return (
		<LayoutProvider>
			<Box sx={{ display: "flex" }}>
				<Header />

				<Sidebar />

				<Box component="main" sx={{ flexGrow: 1, p: 3 }}>
					<DrawerHeader />
					<Outlet />
				</Box>
			</Box>
		</LayoutProvider>
	);
}
