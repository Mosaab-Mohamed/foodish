import { useEffect } from "react";
import { NavigateFunction } from "react-router-dom";
import { Box, Button } from "@mui/material";
import { Google } from "@mui/icons-material";
import {
	GoogleLogin as GoogleButton,
	GoogleLoginResponse,
	GoogleLoginResponseOffline,
} from "react-google-login";
import { gapi } from "gapi-script";
import { axiosInst } from "shared/system/http";
import user from "shared/helpers/user";
import { UserInterface } from "store/shared/types/users";
import urls from "shared/helpers/urls";

export function GoogleLogin({ navigate }: { navigate: NavigateFunction }) {
	useEffect(() => {
		const initClient = () => {
			gapi.client.init({
				clientId: process.env.REACT_APP_GOOGLE_CLIENTID,
				scope: "",
			});
		};
		gapi.load("client:auth2", initClient);
	}, []);

	/**
	 * Get the google user object and fetch the users list.
	 * Check if the google user exists in the users list.
	 * If so, use this user to login. Otherwise, create a new user object and sign up then login
	 */
	const login = async (
		response: GoogleLoginResponse | GoogleLoginResponseOffline
	) => {
		if ("profileObj" in response) {
			const { data: users } = await axiosInst.get("/users");
			const { name, email, googleId } = response.profileObj;
			const userObj = users.find(
				(user: UserInterface) =>
					user.email === email && user.password === googleId
			);

			if (userObj) {
				user.login(userObj);
				navigate(urls.store.home, { replace: true });
			}

			if (!userObj) {
				const { data: userObj } = await axiosInst.post(
					"/users",
					user.init({
						name: name,
						email,
						password: googleId,
					})
				);
				user.login(userObj);
				navigate(urls.store.home, { replace: true });
			}
		}
	};

	//TODO: Add onFailure function
	return (
		<Box my={1}>
			<GoogleButton
				clientId={process.env.REACT_APP_GOOGLE_CLIENTID || ""}
				render={(props) => (
					<Button
						variant="contained"
						fullWidth
						startIcon={<Google />}
						sx={{
							backgroundColor: "#cf4332",
							textTransform: "capitalize",
							":hover": {
								backgroundColor: "#ab3628",
							},
						}}
						onClick={props.onClick}
						disabled={props.disabled}
					>
						Continue with Google
					</Button>
				)}
				onSuccess={login}
				cookiePolicy={"single_host_origin"}
			/>
		</Box>
	);
}
