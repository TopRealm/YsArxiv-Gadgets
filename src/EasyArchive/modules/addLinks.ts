import {onClickWrap, pipeElement, sectionIdSpanElement, spanWrap} from './util/react';
import {archiveSection} from './archiveSection';
import {getMessage} from './i18n';
import {getSections} from './util/getSection';
import {refresh} from './util/refreshPage';
import {removeSection} from './removeSection';
import {replaceChild} from './util/replaceChild';
import {toastify} from 'ext.gadget.Toastify';

const addLinks = async ({
	arcLevel,
	arcLoc,
	secArc,
	secDel,
}: {
	arcLevel: string;
	arcLoc: string | null;
	secArc: string;
	secDel: string;
}) => {
	if (!arcLoc) {
		return;
	}

	const {wgPageName} = mw.config.get();
	const sectionsToArchive = await getSections(wgPageName);

	const headings = document.querySelectorAll(`h${arcLevel}`);
	const headlines = [];
	const headingIndices = [];

	for (const heading of headings) {
		const headline = heading.querySelector('.mw-headline');
		headlines[headlines.length] = headline?.id;
	}

	for (const section of sectionsToArchive) {
		if (section.level !== arcLevel) {
			continue;
		}

		if (headlines.includes(section.anchor)) {
			headingIndices[headingIndices.length] = {
				index: section.index,
				id: section.anchor,
			};
		}
	}

	for (const {index, id} of headingIndices) {
		// eslint-disable-next-line unicorn/prefer-query-selector
		const headline = document.getElementById(id);
		if (!headline) {
			continue;
		}

		const parentHeading = headline.parentElement;
		if (!parentHeading) {
			continue;
		}

		const editSection = parentHeading.querySelector('.mw-editsection');
		if (!editSection) {
			continue;
		}

		const sectionIdSpan = sectionIdSpanElement();
		const archiveSectionLink = onClickWrap(getMessage('Archive'), 'archive', (event) => {
			event.preventDefault();
			const parentElement = (event.target as HTMLElement)?.parentElement;
			if (!parentElement) {
				return;
			}

			replaceChild(parentElement, spanWrap(getMessage('Archiving')));

			let toastifyInstance: ToastifyInstance = {
				hideToast: () => {},
			};
			toastifyInstance = toastify(
				{
					text: getMessage('Archiving'),
					duration: -1,
				},
				'info'
			);

			void archiveSection({index, anchor: id, archiveTo: arcLoc}).then(() => {
				toastifyInstance.hideToast();
				replaceChild(parentElement, spanWrap(getMessage('Archived')));
				toastifyInstance = toastify(
					{
						text: getMessage('Archived'),
						duration: 3 * 1000,
					},
					'success'
				);
				refresh();
			});
		});

		const removeSectionLink = onClickWrap(getMessage('Delete'), 'delete', (event) => {
			event.preventDefault();
			const parentElement = (event.target as HTMLElement)?.parentElement;
			if (!parentElement) {
				return;
			}

			replaceChild(parentElement, spanWrap(getMessage('Deleting')));

			let toastifyInstance: ToastifyInstance = {
				hideToast: () => {},
			};
			toastifyInstance = toastify(
				{
					text: getMessage('Deleting'),
					duration: -1,
				},
				'info'
			);

			void removeSection({index, anchor: id}).then(() => {
				toastifyInstance.hideToast();
				replaceChild(parentElement, spanWrap(getMessage('Deleted')));
				toastifyInstance = toastify(
					{
						text: getMessage('Deleted'),
						duration: 3 * 1000,
					},
					'success'
				);
				refresh();
			});
		});

		if (secArc === '1') {
			sectionIdSpan.append(archiveSectionLink);
		}
		if (secArc === '1' && secDel === '1') {
			sectionIdSpan.append(pipeElement());
		}
		if (secDel === '1') {
			sectionIdSpan.append(removeSectionLink);
		}
		editSection.prepend(sectionIdSpan);
	}
};

export {addLinks};
