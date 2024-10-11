import * as OPTIONS from '../options.json';
import {api} from './api';
import {getMessage} from './i18n';
import {uniqueArray} from 'ext.gadget.Util';

const queryRevisions = async (titles: string | string[]) => {
	const params: ApiQueryRevisionsParams = {
		titles,
		action: 'query',
		format: 'json',
		formatversion: '2',
		prop: 'revisions',
		rvprop: 'content',
	};
	const response = await api.get(params);

	return response;
};

const edit = async (title: string, text: string, summary?: string) => {
	const params: ApiEditPageParams = {
		title,
		text,
		action: 'edit',
		format: 'json',
		formatversion: '2',
	};
	if (summary) {
		params.summary = summary;
	}
	const response = await api.postWithEditToken(params);

	return response;
};

const submit = async (ids: string[], toHide: string, reason: string, otherReasons: string): Promise<void> => {
	const {wgPageName} = mw.config.get();

	const rrdArr: string[] = [
		'{{Revdel',
		'|status = ',
		`|article = ${wgPageName}`,
		`|set = ${toHide}`,
		`|reason = ${reason}${otherReasons}`,
	];

	for (const [index, id] of uniqueArray(ids).entries()) {
		// Replace `[...new Set()]` to avoid polyfilling core-js
		rrdArr[rrdArr.length] = `|id${index + 1} = ${id}`;
	}
	rrdArr[rrdArr.length] = '}}\n--~~'.concat('~~');

	try {
		const response = await queryRevisions(OPTIONS.rrdPage);

		let content: string | undefined;
		if (response['query']?.pages) {
			content = response['query'].pages[0].revisions[0].content as string;
		}

		if (content === undefined) {
			void mw.notify(`Error when loading page ${OPTIONS.rrdPage}: missing`, {
				tag: 'RRD',
				type: 'error',
			});

			return;
		}

		try {
			const result = await edit(OPTIONS.rrdPage, `${content}\n\n${rrdArr.join('\n')}`, getMessage('editSummary'));

			if (result['edit']?.result === 'Success') {
				location.replace(mw.util.getUrl(OPTIONS.rrdPage));
			} else if (result['error']?.code) {
				void mw.notify(`Some errors occured while saving page: ${result['error'].code}`, {
					tag: 'RRD',
					type: 'error',
				});
			} else {
				void mw.notify('Some errors occured while saving page: unknown', {
					tag: 'RRD',
					type: 'error',
				});
			}
		} catch {
			void mw.notify(`Error when editing page ${OPTIONS.rrdPage}`, {tag: 'RRD', type: 'error'});
		}
	} catch {
		void mw.notify(`Error when loading page ${OPTIONS.rrdPage}`, {tag: 'RRD', type: 'error'});
	}
};

export {submit};
