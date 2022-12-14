import { useContext } from "react";
import { TableBody as MuiTableBody, TableRow, TableCell } from "@mui/material";
import { TableContext, TableContextInterface } from "../../index";
import { TableActions, TableContent } from "./index";

export function TableBody() {
	const { list, columns } = useContext(TableContext) as TableContextInterface;

	return (
		<MuiTableBody>
			{list.map((item) => (
				<TableRow key={item.id}>
					{columns.map((column, index) => (
						<TableCell key={index}>
							<TableContent item={item} column={column} />
						</TableCell>
					))}
					<TableCell>
						<TableActions item={item} />
					</TableCell>
				</TableRow>
			))}
		</MuiTableBody>
	);
}
