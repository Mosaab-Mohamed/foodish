import { useState, createContext, useMemo } from "react";
import {
	ThemeProvider,
	createTheme,
	CssBaseline,
	PaletteMode,
} from "@mui/material";
import { getDesignTokens } from "./config";

export const ModeContext = createContext<{
	setMode: React.Dispatch<React.SetStateAction<"light" | "dark">>;
}>({ setMode: () => {} });

export default function ThemeLayout(props: { children: React.ReactNode }) {
	const [mode, setMode] = useState<PaletteMode>("light");
	const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

	return (
		<ModeContext.Provider value={{ setMode }}>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				{props.children}
			</ThemeProvider>
		</ModeContext.Provider>
	);
}
