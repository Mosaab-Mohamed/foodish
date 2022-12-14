interface ArrayListProps {
	list: any[];
	Child: React.ElementType;
}

export function ArrayList(props: ArrayListProps) {
	const { list, Child } = props;
	return (
		<>
			{list.map((item, index) => (
				<Child key={item.id || index} {...item} />
			))}
		</>
	);
}
