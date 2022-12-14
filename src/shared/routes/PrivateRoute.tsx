import { Navigate } from "react-router-dom";
import user from "shared/helpers/user";
import urls from "shared/helpers/urls";

interface PrivateRouteProps {
	app: "store" | "admin";
	children: JSX.Element;
}

export default function PrivateRoute({ children, app }: PrivateRouteProps) {
	if (app === "store") {
		return user.isLoggedUser() ? (
			children
		) : (
			<Navigate to={urls.store.auth} replace />
		);
	}

	return user.isLoggedAdmin() ? (
		children
	) : (
		<Navigate to={urls.admin.auth} replace />
	);
}
