import { useReducer } from "react";
import useRequest from "shared/hooks/useRequest";
import { LoadOrError } from "admin/components";
import TableProvider from "./Context";
import Table from "./table/Table";
import { ActosTableProps, Sort, X, ActosTableUtilis } from "./types";

const initialState: ActosTableUtilis = {
	page: 0,
	rowsPerPage: 9,
	filterValues: {},
	sort: {
		by: null,
		order: null,
	},
};

const reducer = (
	state: ActosTableUtilis,
	action: { type: string; payload: number | { [key: string]: any } | Sort }
) => {
	return {
		...state,
		[action.type]: action.payload,
	};
};

export function ActosTable<T extends X>(props: ActosTableProps<T>) {
	const { endpoint } = props;
	const [state, dispatch] = useReducer(reducer, initialState);
	const { page, rowsPerPage, sort, filterValues } = state;

	const { response, error, isLoading } = useRequest(
		{
			url: endpoint,
			params: {
				_page: page + 1,
				_limit: rowsPerPage,
				_sort: sort.by,
				_order: sort.order,
				...filterValues,
			},
		},
		[page, rowsPerPage, sort, filterValues]
	);

	if (error || isLoading)
		return <LoadOrError error={error} isLoading={isLoading} />;

	const list: any[] = response?.data || [];
	const total = Number(response?.headers["x-total-count"]) || -1;

	return (
		<TableProvider
			{...props}
			list={list}
			pagination={{
				count: total,
				page,
				rowsPerPage,
			}}
			sort={sort}
			filterValues={filterValues}
			dispatch={dispatch}
		>
			<Table />
		</TableProvider>
	);
}
