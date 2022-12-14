import { Alert, Box, CircularProgress } from "@mui/material";
import { AxiosError } from "axios";
import { SerializedError } from "@reduxjs/toolkit";
import { errorImg } from "shared/assets/images";

interface LoadOrErrorProps {
	error: SerializedError | AxiosError | null;
	isLoading: boolean;
}
export function LoadOrError({ error, isLoading }: LoadOrErrorProps) {
	return isLoading ? (
		<Box textAlign="center" p={4}>
			<CircularProgress />
		</Box>
	) : error ? (
		<Box width="40%" m="auto">
			<img src={errorImg} alt="error" style={{ width: "100%" }} />
			<Alert severity="error">{error.message}</Alert>
		</Box>
	) : null;
}
