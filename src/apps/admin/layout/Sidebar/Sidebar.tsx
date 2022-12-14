import { useContext } from "react";
import {
	Box,
	List,
	Divider,
	IconButton,
	Drawer as MuiDrawer,
} from "@mui/material";
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import {
	KeyboardDoubleArrowLeft,
	KeyboardDoubleArrowRight,
} from "@mui/icons-material";
import { LayoutContext } from "../Context";
import { DrawerHeader } from "../Layout";
import SidebarItem from "./components/SidebarItem";
import { listItems } from "./listItems";
import { logo } from "shared/assets/images";
import NestedItem from "./components/NestedItem";

const openedMixin = (theme: Theme): CSSObject => ({
	width: 240,
	transition: theme.transitions.create("width", {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.enteringScreen,
	}),
	overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
	transition: theme.transitions.create("width", {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	overflowX: "hidden",
	width: `calc(${theme.spacing(7)} + 1px)`,
	[theme.breakpoints.up("sm")]: {
		width: `calc(${theme.spacing(8)} + 1px)`,
	},
});

const Drawer = styled(MuiDrawer, {
	shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
	width: 240,
	flexShrink: 0,
	whiteSpace: "nowrap",
	boxSizing: "border-box",
	...(open && {
		...openedMixin(theme),
		"& .MuiDrawer-paper": openedMixin(theme),
	}),
	...(!open && {
		...closedMixin(theme),
		"& .MuiDrawer-paper": closedMixin(theme),
	}),
}));

export default function Sidebar() {
	const theme = useTheme();
	const { drawerOpen, setDrawerOpen } = useContext(LayoutContext);

	return (
		<Drawer variant="permanent" open={drawerOpen}>
			<DrawerHeader>
				<Box sx={{ flex: 1, textAlign: "center" }}>
					<img src={logo} alt="logo" style={{ width: "50px" }} />
				</Box>
				<IconButton color="inherit" onClick={() => setDrawerOpen(false)}>
					{theme.direction === "rtl" ? (
						<KeyboardDoubleArrowRight />
					) : (
						<KeyboardDoubleArrowLeft />
					)}
				</IconButton>
			</DrawerHeader>
			<Divider />

			<List>
				{listItems.map((item, index) =>
					item.kind === "single" ? (
						<SidebarItem key={index} {...item} />
					) : (
						<NestedItem key={index} {...item} />
					)
				)}
			</List>
		</Drawer>
	);
}
