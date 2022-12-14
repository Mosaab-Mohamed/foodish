import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Menu } from "@mui/material";
import {
	KeyboardArrowDown,
	KeyboardArrowUp,
	Phone,
	Logout,
	Language,
	LibraryBooks,
} from "@mui/icons-material";
import i18next from "i18next";
import user from "shared/helpers/user";
import urls from "shared/helpers/urls";
import { UserInterface } from "store/shared/types/users";
import MenuItem from "./MenuItem";

export default function ProfileMenu() {
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const navigate = useNavigate();
	const open = Boolean(anchorEl);

	const openMenu = (event: React.MouseEvent<HTMLButtonElement>) =>
		setAnchorEl(event.currentTarget);

	const closeMenu = () => setAnchorEl(null);

	const changeLanguage = () => {
		i18next.changeLanguage(i18next.language === "ar" ? "en" : "ar");
		window.document.dir = i18next.language === "ar" ? "rtl" : "ltr";
	};

	const handleLogout = () => {
		user.logout();
		navigate(urls.store.auth);
	};

	const userData: UserInterface = user.info();
	return (
		<>
			<Button
				endIcon={open ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
				id="basic-IconButton"
				aria-controls={open ? "basic-menu" : undefined}
				aria-haspopup="true"
				aria-expanded={open ? "true" : undefined}
				onClick={openMenu}
			>
				{userData.name}
			</Button>
			<Menu
				id="basic-menu"
				anchorEl={anchorEl}
				open={open}
				onClose={closeMenu}
				onClick={closeMenu}
				MenuListProps={{
					"aria-labelledby": "basic-button",
				}}
				PaperProps={{
					elevation: 2,
					sx: { width: "200px" },
				}}
				transformOrigin={{ horizontal: "right", vertical: "top" }}
				anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
			>
				<Link to={urls.store.orders}>
					<MenuItem
						icon={<LibraryBooks fontSize="small" />}
						text="Orders"
					/>
				</Link>
				<Link to={urls.store.contact}>
					<MenuItem
						icon={<Phone fontSize="small" />}
						text="Contact"
						divider
					/>
				</Link>
				<MenuItem
					icon={<Language fontSize="small" />}
					text="lng"
					onClick={changeLanguage}
				/>
				<MenuItem
					icon={<Logout fontSize="small" />}
					text="logout"
					onClick={handleLogout}
				/>
			</Menu>
		</>
	);
}
