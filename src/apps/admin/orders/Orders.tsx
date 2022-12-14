import ActosTable, { Column } from "admin/components/ActosTable";
import { Helmet } from "admin/components";

const columns: Column[] = [
	{
		head: "ID",
		name: "id",
	},
	{
		head: "Date",
		name: "date",
		sortable: true,
	},
	{
		head: "Status",
		name: "status",
	},
];

const statusList = [
	{
		name: "Received",
		value: "received",
	},
	{
		name: "On Way",
		value: "on_way",
	},
	{
		name: "Under Preparing",
		value: "under_preparing",
	},
	{
		name: "Deleivered",
		value: "delivered",
	},
];

export default function Orders() {
	return (
		<>
			<Helmet title="Orders" />
			<ActosTable
				columns={columns}
				endpoint="orders"
				pageName="Orders"
				form={{
					FormElement: () => null,
					initialValues: {},
					validationSchema: {},
				}}
				actions={{
					add: false,
					edit: false,
				}}
				filters={[
					{
						type: "select",
						name: "status",
						label: "Status",
						list: statusList,
					},
				]}
			/>
		</>
	);
}
