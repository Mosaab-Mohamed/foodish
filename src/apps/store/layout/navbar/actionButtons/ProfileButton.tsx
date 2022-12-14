import { Button } from "@mui/material";
import user from "shared/helpers/user";
import ProfileMenu from "../menu/Menu";

export default function ProfileButton() {
	return !user.isLoggedUser() ? <Button>Login</Button> : <ProfileMenu />;
}
