import { useEffect, useReducer } from "react";
import { AxiosResponse, AxiosError, AxiosRequestConfig } from "axios";
import { axiosInst } from "shared/system/http";

interface StateInterface {
	response: AxiosResponse | null;
	error: AxiosError | null;
	isLoading: boolean;
}

const initialState: StateInterface = {
	response: null,
	error: null,
	isLoading: false,
};

const reducer = (
	state: StateInterface,
	action: { type: string; payload?: AxiosResponse | AxiosError }
) => {
	switch (action.type) {
		case "INIT":
			return {
				response: null,
				error: null,
				isLoading: true,
			};
		case "SUCCESS_RESPONSE":
			return {
				...state,
				response: action.payload as AxiosResponse,
				isLoading: false,
			};
		case "CATCH_ERROR":
			return {
				...state,
				error: action.payload as AxiosError,
				isLoading: false,
			};
		default:
			return state;
	}
};

export default function useRequest(
	config: AxiosRequestConfig,
	dependencies: any[] = []
) {
	const [state, dispatch] = useReducer(reducer, initialState);

	const fetchData = async (controller: AbortController) => {
		dispatch({ type: "INIT" });
		try {
			const response = await axiosInst.request({
				method: "get",
				timeout: 0.1,
				signal: controller.signal,
				...config,
			});
			dispatch({ type: "SUCCESS_RESPONSE", payload: response });
		} catch (error) {
			if (error instanceof AxiosError && error.code !== "ERR_CANCELED")
				dispatch({ type: "CATCH_ERROR", payload: error });
		}
	};

	useEffect(() => {
		const controller = new AbortController();
		fetchData(controller);

		return () => controller.abort();

		// eslint-disable-next-line
	}, [...dependencies]);

	return state;
}
