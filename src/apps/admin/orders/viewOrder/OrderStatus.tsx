import { useState } from "react";
import { useParams } from "react-router-dom";
import {
	FormControl,
	InputLabel,
	Select,
	MenuItem,
	SelectChangeEvent,
} from "@mui/material";
import { axiosInst } from "shared/system/http";
import { AxiosError } from "axios";
import { LoadOrError } from "admin/components";

export default function OrderStatus({ status }: { status: string }) {
	const { id } = useParams();
	const [value, setValue] = useState<string>(status);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [error, setError] = useState<AxiosError | null>(null);

	const handleChange = async (e: SelectChangeEvent<string>) => {
		setIsLoading(true);
		try {
			const { data } = await axiosInst.patch(`orders/${id}`, {
				status: e.target.value,
			});
			setIsLoading(false);
			setValue(data.status);
		} catch (err) {
			if (err instanceof AxiosError) setError(err);
			setIsLoading(false);
		}
	};

	if (isLoading || error)
		return <LoadOrError error={error} isLoading={isLoading} />;

	return (
		<FormControl variant="outlined" fullWidth sx={{ mb: 3 }}>
			<InputLabel id="status_label">Status</InputLabel>
			<Select label="Status" value={value} onChange={handleChange}>
				<MenuItem value="received">received</MenuItem>
				<MenuItem value="under_preparing">under preparing</MenuItem>
				<MenuItem value="on_way">on way</MenuItem>
				<MenuItem value="delivered">delivered</MenuItem>
			</Select>
		</FormControl>
	);
}
