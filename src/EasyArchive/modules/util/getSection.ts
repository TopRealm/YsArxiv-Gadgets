import {api} from '../api';

const getSections = async (title: string) => {
	const params: ApiParseParams = {
		action: 'parse',
		format: 'json',
		formatversion: '2',
		page: title,
		prop: 'sections',
	};

	const {parse} = await api.get(params);
	// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
	const {
		sections,
	}: {
		sections: {
			level: string;
			index: string;
			anchor: string;
		}[];
	} = parse;

	const sectionsToArchive = [];

	for (const section of sections) {
		const {level, index, anchor} = section;

		if (index.startsWith('T-')) {
			continue;
		}

		sectionsToArchive[sectionsToArchive.length] = {
			level,
			index,
			anchor,
		};
	}

	return sectionsToArchive;
};

const getSectionContent = async (title: string, section: string): Promise<string | null> => {
	const params: ApiQueryRevisionsParams = {
		action: 'query',
		prop: ['revisions'],
		rvprop: 'content',
		format: 'json',
		formatversion: '2',
		titles: title,
		rvsection: section,
	};

	const response = await api.get(params);

	// eslint-disable-next-line @typescript-eslint/no-unsafe-return
	return response['query'].pages[0].revisions[0].content ?? null;
};

export {getSections, getSectionContent};
