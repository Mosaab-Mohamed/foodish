import { Box, Button, Typography } from "@mui/material";

export function FormSwitcher({
	activeForm,
	setActiveForm,
}: {
	activeForm: number;
	setActiveForm: React.Dispatch<React.SetStateAction<number>>;
}) {
	const handleSwitch = () => {
		setActiveForm(activeForm === 0 ? 1 : 0);
	};
	return (
		<Box className="form__switch">
			<Typography variant="subtitle2">
				{!Boolean(activeForm)
					? "Don't have an account?"
					: "Have an account?"}
			</Typography>
			<Button size="medium" onClick={handleSwitch}>
				{!Boolean(activeForm) ? "Sign Up" : "Login"}
			</Button>
		</Box>
	);
}
