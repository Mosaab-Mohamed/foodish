interface HelmetProps {
	title: string;
}

export function Helmet(props: HelmetProps) {
	const { title } = props;

	document.title = `${process.env.REACT_APP_NAME} | ${title}`;

	return null;
}
