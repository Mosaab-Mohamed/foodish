import { LoadingButton } from "@mui/lab";

interface SubmitButtonProps {
	loading: boolean;
	text: string;
}

export function SubmitButton({ loading, text }: SubmitButtonProps) {
	return (
		<LoadingButton
			type="submit"
			variant="contained"
			fullWidth
			sx={{ my: 2 }}
			loading={loading}
		>
			{text}
		</LoadingButton>
	);
}
