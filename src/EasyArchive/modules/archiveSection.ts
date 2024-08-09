import {checkIfPageExist, checkIfSectionExist} from './util/checkIfExist';
import {api} from './api';
import {getMessage} from './i18n';
import {getSectionContent} from './util/getSection';
import {removeSection} from './removeSection';

const archiveSection = async ({index, anchor, archiveTo}: {index: string; anchor: string; archiveTo: string}) => {
	const {wgPageName} = mw.config.get();
	const ifSectionExist = await checkIfSectionExist(index, anchor);

	if (ifSectionExist !== true) {
		return;
	}

	const content = await getSectionContent(wgPageName, index);

	if (content === null) {
		return;
	}

	const pageExist = await checkIfPageExist(archiveTo);
	if (!pageExist) {
		await api.create(
			archiveTo,
			{
				summary: getMessage('Create summary'),
				minor: true,
			},
			'{{talkarchive}}'
		);
	}

	await api.edit(archiveTo, () => {
		return {
			appendtext: `\n\n${content}`,
			summary: getMessage('Archive summary'),
			minor: true,
		};
	});

	await removeSection({index, anchor, summary: getMessage('Archive summary')});
};

export {archiveSection};
