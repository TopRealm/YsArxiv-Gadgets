import {api} from './api';
import {checkIfSectionExist} from './util/checkIfExist';
import {getMessage} from './i18n';
import {getSectionContent} from './util/getSection';

const removeSection = async ({index, anchor, summary}: {index: string; anchor: string; summary?: string}) => {
	const {wgPageName} = mw.config.get();
	const ifSectionExist = await checkIfSectionExist(index, anchor);

	if (ifSectionExist !== true) {
		return;
	}

	const content = await getSectionContent(wgPageName, index);

	if (content === null) {
		return;
	}

	await api.edit(wgPageName, () => {
		return {
			section: index,
			text: '',
			summary: summary ?? getMessage('Delete summary'),
			minor: true,
		};
	});
};

export {removeSection};
