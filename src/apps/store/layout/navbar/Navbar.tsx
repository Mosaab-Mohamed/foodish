import { AppBar, Toolbar, Box } from "@mui/material";
import { Container, GridContainer, GridItem } from "store/components";
import Logo from "./Logo";
import CartButton from "./actionButtons/CartButton";
import FavoriteButton from "./actionButtons/FavoriteButton";
import ProfileButton from "./actionButtons/ProfileButton";
import classes from "./style.module.scss";

export default function Navbar() {
	return (
		<AppBar position="static" color="default" className={classes.navbar}>
			<Container>
				<Toolbar disableGutters>
					<GridContainer
						alignItems="center"
						justifyContent="space-between"
					>
						<GridItem>
							<Logo />
						</GridItem>
						<GridItem>
							<Box className="action__buttons">
								<CartButton />
								<FavoriteButton />
								<ProfileButton />
							</Box>
						</GridItem>
					</GridContainer>
				</Toolbar>
			</Container>
		</AppBar>
	);
}
