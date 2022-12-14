import { Container as MuiContainer, ContainerProps } from "@mui/material";

export function Container(props: ContainerProps) {
	const { children, ...restProps } = props;

	return (
		<MuiContainer
			maxWidth={window.innerWidth > 1500 ? "xl" : "lg"}
			disableGutters
			{...restProps}
		>
			{children}
		</MuiContainer>
	);
}
