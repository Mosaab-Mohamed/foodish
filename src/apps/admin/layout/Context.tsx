import React from "react";

export interface LayoutContextInterface {
	drawerOpen: boolean;
	setDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const LayoutContext = React.createContext<LayoutContextInterface>({
	drawerOpen: false,
	setDrawerOpen: () => null,
});

type ProviderProps = {
	children: React.ReactNode;
};

export default function LayoutProvider({ children }: ProviderProps) {
	const [drawerOpen, setDrawerOpen] = React.useState<boolean>(false);
	return (
		<LayoutContext.Provider value={{ drawerOpen, setDrawerOpen }}>
			{children}
		</LayoutContext.Provider>
	);
}
