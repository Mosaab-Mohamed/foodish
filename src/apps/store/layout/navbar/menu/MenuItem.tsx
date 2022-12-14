import {
	MenuItem as MuiMenuItem,
	ListItemIcon,
	ListItemText,
	MenuItemProps as MuiMenuItemProps,
} from "@mui/material";
import { useTranslation } from "react-i18next";

interface MenuItemProps {
	icon: React.ReactNode;
	text: string;
	onClick?: () => void;
}

export default function MenuItem(props: MuiMenuItemProps & MenuItemProps) {
	const { t } = useTranslation();
	const { icon, text, ...restProps } = props;
	return (
		<MuiMenuItem dense {...restProps}>
			<ListItemIcon>{props.icon}</ListItemIcon>
			<ListItemText>{t(props.text)}</ListItemText>
		</MuiMenuItem>
	);
}
