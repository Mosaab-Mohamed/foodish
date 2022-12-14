import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import {
	IconButton,
	Toolbar,
	Typography,
	Box,
	Tooltip,
	AppBar as MuiAppBar,
	AppBarProps as MuiAppBarProps,
} from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import { Menu, Brightness4, Brightness7, Logout } from "@mui/icons-material";
import urls from "shared/helpers/urls";
import user from "shared/helpers/user";
import { ModeContext } from "shared/system/theme/Theme";
import { LayoutContext } from "../Context";

interface AppBarProps extends MuiAppBarProps {
	open?: boolean;
}

const AppBar = styled(MuiAppBar, {
	shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
	zIndex: theme.zIndex.drawer + 1,
	transition: theme.transitions.create(["width", "margin"], {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	...(open && {
		marginLeft: 240,
		width: `calc(100% - 240px)`,
		transition: theme.transitions.create(["width", "margin"], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen,
		}),
	}),
}));

export default function Header() {
	const theme = useTheme();
	const navigate = useNavigate();
	const { setMode } = useContext(ModeContext);
	const { drawerOpen, setDrawerOpen } = useContext(LayoutContext);

	const handleLogout = () => {
		user.logout();
		navigate(urls.admin.auth);
	};

	return (
		<AppBar position="fixed" open={drawerOpen}>
			<Toolbar>
				<IconButton
					color="inherit"
					aria-label="open drawer"
					onClick={() => setDrawerOpen(true)}
					edge="start"
					sx={{
						marginRight: 5,
						...(drawerOpen && { display: "none" }),
					}}
				>
					<Menu />
				</IconButton>
				<Typography variant="h6" noWrap component="div">
					{process.env.REACT_APP_NAME}
				</Typography>

				<Box sx={{ flex: 1, textAlign: "right" }}>
					<Tooltip
						title={
							theme.palette.mode === "dark" ? "Light mode" : "Dark mode"
						}
					>
						<IconButton
							color="inherit"
							onClick={() =>
								setMode((preValue) =>
									preValue === "light" ? "dark" : "light"
								)
							}
						>
							{theme.palette.mode === "dark" ? (
								<Brightness7 />
							) : (
								<Brightness4 />
							)}
						</IconButton>
					</Tooltip>

					<Tooltip title="logout">
						<IconButton color="inherit" onClick={handleLogout}>
							<Logout />
						</IconButton>
					</Tooltip>
				</Box>
			</Toolbar>
		</AppBar>
	);
}
