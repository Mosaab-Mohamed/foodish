export const toDotNotation = (object: any) => {
	/* Break parent level object keys */
	return Object.assign(
		{},
		...Object.keys(object).map((parentKey) => {
			/* If child level is an object, convert to dot notation */
			if (
				typeof object[parentKey] === "object" &&
				object[parentKey] !== null
			) {
				return Object.assign(
					{},
					...Object.keys(object[parentKey]).map((childKey) => {
						return {
							[`${parentKey}.${childKey}`]: object[parentKey][childKey],
						};
					})
				);
				/* If child level is not an object, leave it as is */
			} else {
				return {
					[parentKey]: object[parentKey],
				};
			}
		})
	);
};
