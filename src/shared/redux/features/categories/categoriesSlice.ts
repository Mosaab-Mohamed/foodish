import {
	createSlice,
	createAsyncThunk,
	SerializedError,
} from "@reduxjs/toolkit";
import { Category } from "store/shared/types/categories";
import { axiosInst } from "shared/system/http";

interface CategoriesType {
	list: Category[];
	isLoading: boolean;
	error: SerializedError | null;
}

const initialState: CategoriesType = {
	list: [],
	isLoading: false,
	error: null,
};

export const fetchCategories = createAsyncThunk(
	"categories/fetchCategories",
	async () => {
		const response = await axiosInst.get("categories");
		return response.data;
	}
);

const categoriesSlice = createSlice({
	name: "categories",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fetchCategories.pending, (state) => {
			state.isLoading = true;
		});
		builder.addCase(fetchCategories.fulfilled, (state, action) => {
			state.isLoading = false;
			state.list = action.payload;
		});
		builder.addCase(fetchCategories.rejected, (state, action) => {
			state.isLoading = false;
			state.error = action.error;
		});
	},
});

export default categoriesSlice.reducer;
