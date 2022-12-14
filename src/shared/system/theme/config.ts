import { PaletteMode, ThemeOptions } from "@mui/material";

const MAIN_COLOR = "#aa081c";
export const getDesignTokens = (mode: PaletteMode): ThemeOptions => {
	const palette =
		mode === "light"
			? {
					mode,
					primary: {
						main: MAIN_COLOR,
					},
					background: {
						paper: "#fafafa",
					},
			  }
			: {
					mode,
					primary: {
						main: MAIN_COLOR,
					},
					background: {
						default: "#0a1929",
						paper: "#001e3c",
					},
					text: {
						primary: "#ffffffd1",
						secondary: "#fffff",
					},
			  };
	return {
		palette,
		typography: {
			fontFamily: "Spline Sans Mono",
		},
		components: {
			MuiButton: {
				defaultProps: {
					size: "large",
					sx: {
						textTransform: "capitalize",
					},
				},
			},
		},
	};
};
