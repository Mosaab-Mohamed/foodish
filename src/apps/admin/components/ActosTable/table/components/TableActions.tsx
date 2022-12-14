import { useContext } from "react";
import urls from "shared/helpers/urls";
import { TableContext, TableContextInterface, X } from "../../index";
import { DeleteButton, EditButton, ViewButton } from "./index";

export function TableActions({ item }: { item: X }) {
	const {
		actions: { remove = true, edit = true, view = true },
		endpoint,
	} = useContext(TableContext) as TableContextInterface;

	const viewUrl = `${urls.admin[endpoint]}/${item?.id}`;
	return (
		<>
			{remove && <DeleteButton item={item} />}
			{edit && <EditButton item={item} />}
			{view && <ViewButton url={viewUrl} />}
		</>
	);
}
