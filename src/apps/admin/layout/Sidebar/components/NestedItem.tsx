import { useState, useContext } from "react";
import {
	Collapse,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
} from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { ArrayList } from "store/components";
import { LayoutContext } from "../../Context";
import SidebarItem from "./SidebarItem";
import { NestedItemType } from "../listItems";
import classes from "./style.module.scss";

export default function NestedItem(props: NestedItemType) {
	const { drawerOpen } = useContext(LayoutContext);
	const [isCollapseOpen, setIsCollapseOpen] = useState<boolean>(false);
	const { Icon, text, items } = props;

	return (
		<>
			<ListItem className={classes.MuiListItem__custom}>
				<ListItemButton
					sx={{
						minHeight: 48,
						justifyContent: drawerOpen ? "initial" : "center",
						px: 2,
					}}
					onClick={() => setIsCollapseOpen(!isCollapseOpen)}
				>
					<ListItemIcon sx={{ mr: drawerOpen ? 3 : "auto" }}>
						<Icon />
					</ListItemIcon>
					<ListItemText
						primary={text}
						sx={{
							opacity: drawerOpen ? 1 : 0,
						}}
						primaryTypographyProps={{ variant: "body2" }}
					/>
					{drawerOpen && isCollapseOpen && <ExpandLess />}
					{drawerOpen && !isCollapseOpen && <ExpandMore />}
				</ListItemButton>
			</ListItem>

			<Collapse in={isCollapseOpen} timeout="auto" unmountOnExit>
				<List component="div" disablePadding>
					<ArrayList list={items} Child={SidebarItem} />
				</List>
			</Collapse>
		</>
	);
}
