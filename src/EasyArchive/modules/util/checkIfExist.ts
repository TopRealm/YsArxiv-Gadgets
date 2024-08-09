import {api} from '../api';
import {getSections} from './getSection';

const checkIfPageExist = async (archiveTo: string) => {
	const params: ApiQueryInfoParams = {
		action: 'query',
		format: 'json',
		formatversion: '2',
		prop: 'info',
		titles: archiveTo,
	};

	const {query} = await api.get(params);

	if (query.pages[0]?.missing) {
		return false;
	}
	return true;
};

const checkIfSectionExist = async (index: string, anchor: string) => {
	const {wgPageName} = mw.config.get();
	const sections = await getSections(wgPageName);

	let ifSectionExist = false;
	for (const section of sections) {
		if (index === section.index && anchor === section.anchor) {
			ifSectionExist = true;
		}
	}
	return ifSectionExist;
};

export {checkIfSectionExist, checkIfPageExist};
