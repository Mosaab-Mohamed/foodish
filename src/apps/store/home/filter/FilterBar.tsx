import { Paper } from "@mui/material";
import FilterHeader from "./FilterHeader";
import FilterByName from "./FilterByName";
import FilterBySize from "./FilterBySize";
import FilterByAttribute from "./FilterByAttribute";
import FilterByPrice from "./FilterByPrice";

// TODO: Fix => when apply filters and leaving page then return back, the items are filtered while the filter bar is reset
export default function FilterBar() {
	return (
		<Paper elevation={5}>
			<FilterHeader />
			<FilterByName />
			<FilterBySize />
			<FilterByAttribute />
			<FilterByPrice />
		</Paper>
	);
}
