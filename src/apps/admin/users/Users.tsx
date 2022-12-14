import ActosTable from "admin/components/ActosTable";
import { Helmet } from "admin/components";
import Form, { initialValues, validationSchema } from "./Form";

const columns = [
	{
		head: "ID",
		name: "id",
	},
	{
		head: "Name",
		name: "name",
	},
	{
		head: "Email Address",
		name: "email",
	},
];

export default function Users() {
	return (
		<>
			<Helmet title="Users" />
			<ActosTable
				columns={columns}
				endpoint="users"
				pageName="Users"
				form={{
					FormElement: Form,
					initialValues,
					validationSchema,
				}}
				actions={{
					edit: true,
					remove: true,
					view: false,
					add: true,
				}}
			/>
		</>
	);
}
