import { Box, Pagination as MuiPagination } from "@mui/material";
import { useAppDispatch, useAppSelector } from "shared/redux/hook";
import { updatePagination } from "shared/redux/features/items/itemsSlice";

export default function Pagination() {
	const dispatch = useAppDispatch();
	const { pagination } = useAppSelector((state) => state.items);

	if (
		(pagination.total && pagination.total <= pagination._limit) ||
		pagination.total === 0
	)
		return null;
	return (
		<Box display="flex" justifyContent="center">
			<MuiPagination
				count={
					pagination?.total
						? Math.ceil(pagination?.total / pagination._limit)
						: undefined
				}
				color="primary"
				page={pagination._page}
				onChange={(e, page) => dispatch(updatePagination(page))}
			/>
		</Box>
	);
}
