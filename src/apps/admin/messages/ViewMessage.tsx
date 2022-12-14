import { useParams, useNavigate } from "react-router-dom";
import { Button, TextField } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import useRequest from "shared/hooks/useRequest";
import { LoadOrError, GridContainer, GridItem } from "admin/components";
import { Message } from "store/shared/types/messages";
import ResponseForm from "./ResponseForm";

export default function ViewMessage() {
	const { id } = useParams();
	const navigate = useNavigate();
	const { response, error, isLoading } = useRequest({ url: `messages/${id}` });

	if (error || isLoading)
		return <LoadOrError error={error} isLoading={isLoading} />;

	const message: Message = response?.data;
	return (
		<>
			<Button
				startIcon={<ArrowBack />}
				sx={{ mb: 1, textTransform: "capitalize" }}
				onClick={() => navigate(-1)}
			>
				Back
			</Button>

			<GridContainer spacing={2}>
				<GridItem md={12}>
					<TextField
						variant="filled"
						label="From"
						defaultValue={message?.name}
						disabled
						fullWidth
					/>
				</GridItem>

				<GridItem md={12}>
					<TextField
						variant="filled"
						label="Subject"
						defaultValue={message?.subject}
						disabled
						fullWidth
					/>
				</GridItem>
				<GridItem md={12}>
					<TextField
						variant="filled"
						label="Content"
						defaultValue={message?.content}
						disabled
						multiline
						fullWidth
					/>
				</GridItem>

				<GridItem md={12}>
					<ResponseForm response={message?.response} />
				</GridItem>
			</GridContainer>
		</>
	);
}
