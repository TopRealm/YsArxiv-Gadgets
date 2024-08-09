const getSettings = () => {
	const settings = document.querySelector('.easy_archive_data_point_collection') as HTMLElement;
	if (!settings) {
		return null;
	}

	const {dataset} = settings;
	const {arcLevel, arcLoc, secArc, secDel} = dataset;
	return {
		arcLevel: arcLevel ?? '2',
		arcLoc: arcLoc ?? null,
		secArc: secArc ?? '1',
		secDel: secDel ?? '1',
	};
};

export {getSettings};
