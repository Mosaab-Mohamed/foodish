import { useNavigate, useParams } from "react-router-dom";
import {
	Button,
	Paper,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Typography,
} from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import useRequest from "shared/hooks/useRequest";
import { GridContainer, GridItem, LoadOrError } from "admin/components";
import { Order } from "store/shared/types/orders";
import OrderStatus from "./OrderStatus";
import ContactInfo from "./ContactInfo";

export default function ViewOrder() {
	const { id } = useParams();
	const navigate = useNavigate();
	const { response, error, isLoading } = useRequest({ url: `orders/${id}` });

	if (error || isLoading)
		return <LoadOrError error={error} isLoading={isLoading} />;

	const order: Order = response?.data;
	return (
		<>
			<Button
				startIcon={<ArrowBack />}
				sx={{ mb: 2, textTransform: "capitalize" }}
				onClick={() => navigate(-1)}
			>
				Back
			</Button>
			<OrderStatus status={order?.status} />
			<GridContainer spacing={3}>
				<GridItem md={6}>
					<TableContainer component={Paper} elevation={4}>
						<Table>
							<TableHead>
								<TableRow>
									<TableCell>Item</TableCell>
									<TableCell>Quantity</TableCell>
									<TableCell>Size</TableCell>
									<TableCell>Type</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{order?.list.map((item, index) => (
									<TableRow key={index}>
										<TableCell>
											<Typography variant="subtitle2">
												{item.item.name}
											</Typography>
										</TableCell>
										<TableCell>{item.count}</TableCell>
										<TableCell>{item.size}</TableCell>
										<TableCell>{item.type}</TableCell>
									</TableRow>
								))}
							</TableBody>
						</Table>
					</TableContainer>
				</GridItem>
				<GridItem md={6}>
					<ContactInfo info={order?.contactInfo} />
				</GridItem>
			</GridContainer>
		</>
	);
}
