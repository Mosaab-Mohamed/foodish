import { useParams, useNavigate } from "react-router-dom";
import useRequest from "shared/hooks/useRequest";
import { GridContainer, GridItem, LoadOrError } from "admin/components";
import { Item } from "store/shared/types/items";
import {
	Button,
	Card,
	CardMedia,
	Chip,
	Table,
	TableBody,
	TableCell,
	TableRow,
} from "@mui/material";
import { ArrowBack } from "@mui/icons-material";

export default function ViewItem() {
	const { id } = useParams();
	const navigate = useNavigate();
	const { response, error, isLoading } = useRequest({ url: `items/${id}` });

	if (error || isLoading)
		return <LoadOrError error={error} isLoading={isLoading} />;

	const item: Item = response?.data;
	return (
		<>
			<Button
				startIcon={<ArrowBack />}
				sx={{ mb: 2, textTransform: "capitalize" }}
				onClick={() => navigate(-1)}
			>
				Back
			</Button>
			<GridContainer spacing={3} alignItems="center">
				<GridItem md={6}>
					<Card>
						<Table>
							<TableBody>
								<TableRow>
									<TableCell variant="head">Name</TableCell>
									<TableCell>{item?.name}</TableCell>
								</TableRow>
								<TableRow>
									<TableCell variant="head">Description</TableCell>
									<TableCell>{item?.description}</TableCell>
								</TableRow>
								<TableRow>
									<TableCell variant="head">Category</TableCell>
									<TableCell>{item?.category}</TableCell>
								</TableRow>
								<TableRow>
									<TableCell variant="head">Price</TableCell>
									<TableCell>{item?.price.default}</TableCell>
								</TableRow>
								<TableRow>
									<TableCell variant="head">Discount</TableCell>
									<TableCell>{item?.discount || "None"}</TableCell>
								</TableRow>
								<TableRow>
									<TableCell variant="head">Attributes</TableCell>
									<TableCell>
										{item?.attributes &&
											Object.keys(item?.attributes).map((attr) => {
												return item?.attributes[attr] ? (
													<Chip label={attr} sx={{ mx: 0.5 }} />
												) : null;
											})}
									</TableCell>
								</TableRow>
							</TableBody>
						</Table>
					</Card>
				</GridItem>
				<GridItem md={6}>
					<Card>
						<CardMedia sx={{ p: 1 }}>
							<img
								src={item?.mainImage}
								alt={item?.name}
								style={{
									width: "100%",
									maxHeight: "70vh",
									objectFit: "cover",
								}}
							/>
						</CardMedia>
					</Card>
				</GridItem>
			</GridContainer>
		</>
	);
}
