import { TableContentProps, X } from "../../index";
import { CheckCircleOutline, HighlightOff } from "@mui/icons-material";

export function TableContent<T extends X>(props: TableContentProps<T>) {
	let {
		column: { name, formatter },
		item,
	} = props;

	// Check if the name is nested object and extract the deep value
	const processNestedName = () => {
		if (name.includes(".")) {
			const namesArr = name.split(".");
			return item[namesArr[0]][namesArr[1]];
		}

		return item[name];
	};

	return (
		<>
			{formatter === "image" ? (
				<img
					src={item[name] as string}
					alt={name}
					className="image_formatter"
				/>
			) : formatter === "link" ? (
				<a href={item.link as string}>Link</a>
			) : formatter === "boolean" ? (
				item[name] ? (
					<CheckCircleOutline color="success" />
				) : (
					<HighlightOff color="error" />
				)
			) : (
				processNestedName()
			)}
		</>
	);
}
