export type X = { [key: string]: any };

export interface TableContextInterface
	extends Omit<TableProviderProps, "children"> {
	formModal: FormModal;
	setFormModal: React.Dispatch<React.SetStateAction<FormModal>>;
}

export interface TableProviderProps extends ActosTableProps<T> {
	list: T[];
	pagination: TablePaginationProps;
	sort: Sort;
	filterValues: { [key: string]: any };
	dispatch: Dispatch<ActosTableUtilis>;
	children: React.ReactNode;
}

export interface Column {
	head: string;
	name: string;
	sortable?: boolean;
	formatter?: "image" | "link" | "boolean";
}

interface Actions {
	remove?: boolean;
	edit?: boolean;
	view?: boolean;
	add?: boolean;
}

export interface ActosTableProps<T> {
	columns: Column[];
	endpoint: string;
	actions: Actions;
	pageName: string;
	form: Form;
	filters?: Filter[];
}

interface Form {
	FormElement: React.ElementType;
	initialValues: FormikValues;
	validationSchema: any;
	onSubmit?: (values: FormikValues) => Promise<void>;
	size?: "medium" | "large";
}

interface TablePaginationProps {
	count: number;
	page: number;
	rowsPerPage: number;
}

export interface TableContentProps<T> {
	column: Column;
	item: T;
}

export interface FormModal {
	isOpen: boolean;
	type: "edit" | "create" | "delete" | null;
	name: string;
	item?: X | null;
}

export interface ActionFormProps {
	initialValues: (item?: X | null) => FormikValues;
	validationSchema: any;
	children: React.ReactNode;
}

export interface Sort {
	by: string | null;
	order: "desc" | "asc" | null;
}

export interface SelectItem {
	name: string;
	value: string;
	[key: string]: any;
}

export interface Filter {
	type: "text" | "select";
	name: string;
	label: string;
	list?: SelectItem[];
	endpoint?: string;
}

export interface ActosTableUtilis {
	page: number;
	rowsPerPage: number;
	filterValues: X;
	sort: Sort;
}


