import ActosTable, { Column } from "admin/components/ActosTable";
import { Helmet } from "admin/components";
import Form, { initialValues, validationSchema } from "./Form";

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
		head: "Image",
		name: "image",
		formatter: "image",
	},
];

export default function () {
	return (
		<>
			<Helmet title="Categories" />
			<ActosTable
				columns={columns}
				endpoint="categories"
				pageName="Categories"
				form={{ FormElement: Form, initialValues, validationSchema }}
				actions={{ view: false }}
				filters={[
					{
						type: "text",
						name: "name",
						label: "Category",
					},
				]}
			/>
		</>
	);
}
