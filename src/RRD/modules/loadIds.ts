const loadIds = ($body: JQuery<HTMLBodyElement>): string[] => {
	const ids: string[] = [];

	const boxes: JQuery<HTMLInputElement> = $body.find('input');
	for (const box of boxes) {
		const {checked, name, type} = box;

		if (type !== 'checkbox' || !checked) {
			continue;
		}

		const idRegex: RegExp = /ids\[(\d+)]/;
		const idArray: RegExpExecArray | null = idRegex.exec(name);
		if (idArray?.[1] === undefined) {
			continue;
		}

		[, ids[ids.length]] = idArray;
	}

	return ids;
};

export {loadIds};
