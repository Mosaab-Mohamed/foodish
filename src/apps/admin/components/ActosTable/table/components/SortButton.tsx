import { useContext } from "react";
import { IconButton, Tooltip } from "@mui/material";
import { KeyboardArrowUp, KeyboardArrowDown } from "@mui/icons-material";
import { TableContext, TableContextInterface, SORT } from "../../index";

export function SortButton({ name }: { name: string }) {
	const { sort, dispatch } = useContext(TableContext) as TableContextInterface;

	return (
		<Tooltip title={sort.order === "asc" ? "sort decs" : "sort asc"}>
			<IconButton
				color="inherit"
				onClick={() => {
					dispatch({
						type: SORT,
						payload: {
							by: name,
							order: sort.order === "asc" ? "desc" : "asc",
						},
					});
				}}
			>
				{sort.order === "asc" ? <KeyboardArrowDown /> : <KeyboardArrowUp />}
			</IconButton>
		</Tooltip>
	);
}
