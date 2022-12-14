import { Navigate } from "react-router-dom";
import user from "shared/helpers/user";
import urls from "shared/helpers/urls";

interface ReversedRouteProps {
	app: "store" | "admin";
	children: JSX.Element;
}

export default function ReversedRoute({ app, children }: ReversedRouteProps) {
	if (app === "store") {
		return !user.isLoggedUser() ? (
			children
		) : (
			<Navigate to={urls.store.home} replace />
		);
	}

	return !user.isLoggedAdmin() ? (
		children
	) : (
		<Navigate to={urls.admin.home} replace />
	);
}
