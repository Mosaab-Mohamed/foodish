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
		head: "Category",
		name: "category",
	},
	{
		head: "Description",
		name: "description",
	},
	{
		head: "Price",
		name: "price.default",
		sortable: true,
	},
	{
		head: "Image",
		name: "mainImage",
		formatter: "image",
	},
];

export default function Items() {
	return (
		<>
			<Helmet title="Items" />
			<ActosTable
				columns={columns}
				endpoint="items"
				pageName="Items"
				form={{
					FormElement: Form,
					initialValues,
					validationSchema,
					size: "large",
				}}
				actions={{}}
				filters={[
					{
						type: "text",
						name: "name",
						label: "Name",
					},
					{
						type: "select",
						name: "category",
						label: "Category",
						endpoint: "categories",
					},
				]}
			/>
		</>
	);
}
