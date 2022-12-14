import { useContext } from "react";
import { TablePagination as MuiTablePagination } from "@mui/material";
import {
	TableContext,
	TableContextInterface,
	PAGE,
	ROWSPERPAGE,
} from "../../index";

export function TablePagination() {
	const {
		pagination: { count, page, rowsPerPage },
		dispatch,
	} = useContext(TableContext) as TableContextInterface;

	const handlePageChange = (_: any, page: number) => {
		dispatch({ type: PAGE, payload: page });
	};

	const handleRowsPerPageChange = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		dispatch({ type: ROWSPERPAGE, payload: Number(event.target.value) });
		dispatch({ type: PAGE, payload: 0 });
	};

	return (
		<MuiTablePagination
			component="div"
			count={count}
			page={page}
			rowsPerPage={rowsPerPage}
			rowsPerPageOptions={[10, 25, 50]}
			onPageChange={handlePageChange}
			onRowsPerPageChange={handleRowsPerPageChange}
		/>
	);
}
