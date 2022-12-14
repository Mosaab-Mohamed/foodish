import { SvgIconComponent } from "@mui/icons-material";
import {
	Home,
	PeopleAlt,
	Apps,
	Category,
	LibraryBooks,
	Email,
} from "@mui/icons-material";
import urls from "shared/helpers/urls";

export interface SidebarItemType {
	text: string;
	Icon: SvgIconComponent;
	route: string;
	kind: "single";
	isChild: boolean;
}

export interface NestedItemType {
	text: string;
	Icon: SvgIconComponent;
	kind: "group";
	items: SidebarItemType[];
}

export const listItems: (SidebarItemType | NestedItemType)[] = [
	{
		text: "Home",
		Icon: Home,
		route: urls.admin.home,
		kind: "single",
		isChild: false,
	},
	{
		text: "Users",
		Icon: PeopleAlt,
		route: urls.admin.users,
		kind: "single",
		isChild: false,
	},
	{
		text: "Categories",
		Icon: Category,
		route: urls.admin.categories,
		kind: "single",
		isChild: false,
	},
	{
		text: "Items",
		Icon: Apps,
		route: urls.admin.items,
		kind: "single",
		isChild: false,
	},
	{
		text: "Orders",
		Icon: LibraryBooks,
		route: urls.admin.orders,
		kind: "single",
		isChild: false,
	},
	{
		text: "Messages",
		Icon: Email,
		route: urls.admin.messages,
		kind: "single",
		isChild: false,
	},
	// {
	// 	text: "Collapse",
	// 	Icon: Phone,
	// 	kind: "group",
	// 	items: [
	// 		{
	// 			text: "Home",
	// 			Icon: Home,
	// 			route: "/",
	// 			kind: "single",
	// 			isChild: true,
	// 		},

	// 		{
	// 			text: "Contact",
	// 			Icon: Phone,
	// 			route: "/contact",
	// 			kind: "single",
	// 			isChild: true,
	// 		},
	// 	],
	// },
];
