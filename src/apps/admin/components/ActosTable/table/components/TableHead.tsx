import { useContext } from "react";
import { TableHead as MuiTableHead, TableRow, TableCell } from "@mui/material";
import { TableContext, TableContextInterface } from "../../index";
import { SortButton } from "./SortButton";

export function TableHead() {
	const { columns } = useContext(TableContext) as TableContextInterface;
	return (
		<MuiTableHead>
			<TableRow>
				{columns.map((column, index) => (
					<TableCell key={index}>
						{column.sortable && <SortButton name={column.name} />}

						{column.head}
					</TableCell>
				))}
				<TableCell>Actions</TableCell>
			</TableRow>
		</MuiTableHead>
	);
}
