import { useState } from "react";
import { Box } from "@mui/material";
import { GridContainer, GridItem, Helmet } from "store/components";
import { Banner, FormSwitcher } from "./components";
import Login from "./login/Login";
import Signup from "./signup/Signup";
import classes from "./style.module.scss";

export default function Auth() {
	const [activeForm, setActiveForm] = useState<number>(0);

	return (
		<Box className={classes.auth__page}>
			<Helmet title="Auth" />
			<Box className="auth__box">
				<GridContainer alignItems="center">
					<GridItem md={6}>
						<Banner />
					</GridItem>
					<GridItem md={6}>
						<FormSwitcher
							activeForm={activeForm}
							setActiveForm={setActiveForm}
						/>
						{!Boolean(activeForm) ? <Login /> : <Signup />}
					</GridItem>
				</GridContainer>
			</Box>
		</Box>
	);
}
