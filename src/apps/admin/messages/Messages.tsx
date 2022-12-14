import ActosTable, { Column } from "admin/components/ActosTable";
import { Helmet } from "admin/components";

const columns: Column[] = [
	{
		head: "ID",
		name: "id",
	},
	{
		head: "Name",
		name: "name",
	},
	{
		head: "Email",
		name: "email",
	},
	{
		head: "Subject",
		name: "subject",
	},
	{
		head: "Replied",
		name: "replied",
		formatter: "boolean",
	},
];

export default function Messages() {
	return (
		<>
			<Helmet title="Messages" />
			<ActosTable
				columns={columns}
				endpoint="messages"
				pageName="Messages"
				form={{
					FormElement: () => null,
					initialValues: {},
					validationSchema: {},
				}}
				actions={{ add: false, edit: false }}
			/>
		</>
	);
}
