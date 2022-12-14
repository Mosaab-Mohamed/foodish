import FacebookButton from "react-facebook-login/dist/facebook-login-render-props";
import {
	ReactFacebookLoginInfo,
	ReactFacebookFailureResponse,
} from "react-facebook-login";
import { NavigateFunction } from "react-router-dom";
import { Box, Button } from "@mui/material";
import { Facebook } from "@mui/icons-material";
import { axiosInst } from "shared/system/http";
import user from "shared/helpers/user";
import { UserInterface } from "store/shared/types/users";
import urls from "shared/helpers/urls";

export function FacebookLogin({ navigate }: { navigate: NavigateFunction }) {
	const login = async (
		response: ReactFacebookLoginInfo | ReactFacebookFailureResponse
	) => {
		if ("userID" in response) {
			const { name, email, id } = response;
			const { data: users } = await axiosInst.get("/users");
			const userObj = users.find(
				(user: UserInterface) =>
					user.email === email && user.password === id
			);

			if (userObj) {
				user.login(userObj);
				navigate(urls.store.home);
			}

			if (!userObj) {
				const { data: userObj } = await axiosInst.post(
					"/users",
					user.init({
						name: name,
						email,
						password: id,
					})
				);
				user.login(userObj);
				navigate(urls.store.home, { replace: true });
			}
		}
	};

	return (
		<Box my={1}>
			<FacebookButton
				appId={process.env.REACT_APP_FACEBOOK_APPID || ""}
				fields="name,email"
				callback={login}
				render={(props) => (
					<Button
						variant="contained"
						fullWidth
						startIcon={<Facebook />}
						sx={{
							backgroundColor: "#3c66c4",
							textTransform: "capitalize",
							":hover": {
								backgroundColor: "#2d4d96",
							},
						}}
						onClick={props.onClick}
					>
						Continue with facebook
					</Button>
				)}
			/>
		</Box>
	);
}
