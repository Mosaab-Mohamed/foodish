import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import {
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { LayoutContext } from "../../Context";
import { SidebarItemType } from "../listItems";
import classes from "./style.module.scss";

export default function SidebarItem(props: SidebarItemType) {
	const theme = useTheme();
	const { pathname } = useLocation();
	const { drawerOpen } = useContext(LayoutContext);
	const { route, isChild, Icon, text } = props;
	return (
		<ListItem className={classes.MuiListItem__custom}>
			<Link to={route}>
				<ListItemButton
					sx={{
						justifyContent: drawerOpen ? "initial" : "center",
						pl: isChild && drawerOpen ? 4 : 2,
						"&.Mui-selected .MuiListItemIcon-root": {
							color: theme.palette.primary.light,
						},
					}}
					selected={route === pathname}
				>
					<ListItemIcon sx={{ mr: drawerOpen ? 3 : "auto" }}>
						<Icon />
					</ListItemIcon>
					<ListItemText
						primary={text}
						sx={{
							opacity: drawerOpen ? 1 : 0,
						}}
						primaryTypographyProps={{
							variant: "body2",
						}}
					/>
				</ListItemButton>
			</Link>
		</ListItem>
	);
}
