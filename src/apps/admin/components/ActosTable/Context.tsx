import { createContext, useState } from "react";
import { TableProviderProps, TableContextInterface, FormModal } from "./types";
import { initialFormModal } from "./helpers";

export const TableContext = createContext<TableContextInterface | null>(null);

export default function TableProvider(props: TableProviderProps) {
	const { children, ...restProps } = props;
	const [formModal, setFormModal] = useState<FormModal>(initialFormModal);

	return (
		<TableContext.Provider
			value={{
				formModal,
				setFormModal,
				...restProps,
			}}
		>
			{children}
		</TableContext.Provider>
	);
}
