import React from "react";
import { FormModal } from "./types";

export const initialFormModal: FormModal = {
	isOpen: false,
	type: null,
	name: "",
	item: null,
};

export const closeForm = (
	setFormModal: React.Dispatch<React.SetStateAction<FormModal>>
) => {
	setFormModal({ isOpen: false, type: null, name: "", item: null });
};

export const PAGE = "page";
export const ROWSPERPAGE = "rowsPerPage";
export const FILTER = "filterValues";
export const SORT = "sort";
