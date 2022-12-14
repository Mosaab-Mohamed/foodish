import { createHashRouter, RouterProvider } from "react-router-dom";
import storeRoutes from "./StoreRoutes";
import adminRoutes from "./AdminRoutes";
import Theme from "shared/system/theme/Theme";
import "shared/styles/main.scss";

const router = createHashRouter([...storeRoutes, ...adminRoutes]);

export default function Root() {
	return (
		<Theme>
			<RouterProvider router={router} />
		</Theme>
	);
}
