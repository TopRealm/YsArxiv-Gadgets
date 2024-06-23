import {generateArray, uniqueArray} from 'ext.gadget.Util';
import {api} from './api';
import {toastify} from 'ext.gadget.Toastify';

type DetectIfFileRedirect = (pageNames: string | string[], isFileNS?: boolean) => Promise<void>;
type RefreshPage = (title?: string) => void;

let toastifyInstance: ToastifyInstance = {
	hideToast: () => {},
};

const refreshPage: RefreshPage = (title) => {
	toastifyInstance.hideToast();
	toastify(
		{
			text: '正在刷新页面',
			duration: -1,
		},
		'info'
	);

	if (title) {
		location.replace(mw.util.getUrl(title));
	} else {
		location.reload();
	}
};

const importPage = async (pageName: string, iwprefix: string, isFileNS: boolean = false): Promise<boolean> => {
	toastifyInstance.hideToast();
	toastifyInstance = toastify(
		{
			text: `导入页面中：${iwprefix}:${pageName}`,
			duration: -1,
		},
		'info'
	);

	let summary: string = '页面文字原许可：[[cc-by-sa:4.0|CC BY-SA 4.0]]；作者请参见来源页面历史';
	if (isFileNS) {
		summary += '；文件作者请参见此页面及来源页面记载';
	}

	const params: ApiImportParams = {
		action: 'import',
		format: 'json',
		assignknownusers: true,
		interwikipage: pageName,
		interwikiprefix: iwprefix,
		interwikisource: iwprefix,
		summary: `［${summary}］`,
	};
	const result = await api.postWithEditToken(params);

	if (result['import'] && result['import'][0] && result['import'].revisions) {
		toastifyInstance.hideToast();
		toastifyInstance = toastify(
			{
				text: `页面导入完成：${pageName}`,
				duration: 3 * 1000,
			},
			'success'
		);
		return true;
	}

	toastifyInstance.hideToast();
	toastifyInstance = toastify(
		{
			text: `页面导入失败：${iwprefix}:${pageName}`,
			duration: 3 * 1000,
		},
		'warning'
	);
	return false;
};

const uploadFile = async (target: string, url?: string): Promise<void> => {
	toastifyInstance.hideToast();
	toastifyInstance = toastify(
		{
			text: `迁移文件中：${target}`,
			duration: -1,
		},
		'info'
	);

	const params: ApiUploadParams = {
		url: url ?? `https://www.qiuwenbaike.cn/wiki/Special:Redirect/file/${mw.util.rawurlencode(target)}`,
		action: 'upload',
		format: 'json',
		filename: target,
		comment: '自求闻百科导入文件',
		ignorewarnings: true,
	};
	await api.postWithEditToken(params);

	toastifyInstance.hideToast();
	toastifyInstance = toastify(
		{
			text: `文件导入完成：${target}`,
			duration: 3 * 1000,
		},
		'success'
	);
};

const queryImageInfo = async (titles: string | string[]) => {
	const params: ApiQueryInfoParams & ApiQueryImageInfoParams = {
		titles,
		action: 'query',
		format: 'json',
		formatversion: '2',
		prop: ['imageinfo', 'info'],
		iiprop: ['url'],
		redirects: true,
	};
	const response = await api.post(params);

	return response;
};

const detectIfFileRedirect: DetectIfFileRedirect = async (pageNames, isFileNS = false) => {
	pageNames = uniqueArray(generateArray(pageNames));
	const promises: (() => Promise<void>)[] = [];

	for (let i = 0; i < pageNames.length; i++) {
		let titles = pageNames.splice(0, 50);
		if (!titles.length) {
			continue;
		}

		promises[promises.length] = async (): Promise<void> => {
			// Redirect target(s)
			const tos: string[] = [];

			// Analyze step 1: import pages itself
			//// Query
			const response = await queryImageInfo(titles);
			if (response['query']) {
				//// Normalize
				if (response['query'].normalized) {
					for (const {from, to} of response['query'].normalized as {from: string; to: string}[]) {
						titles = titles.map((element) => {
							return element === from ? to : element;
						});
					}
				}

				//// Import
				if (response['query'].pages) {
					for (const page1 of response['query'].pages) {
						const title = page1.title as string;

						if (!page1.missing) {
							continue;
						}

						let ifImportSuccess = false;
						if (isFileNS) {
							ifImportSuccess = await importPage(title, 'commons', isFileNS);
						}
						if (!ifImportSuccess) {
							await importPage(title, 'qwbk', isFileNS);
						}
					}
				}

				//// Push redirect targets into array
				if (response['query'].redirects) {
					for (const {to} of response['query'].redirects as {from: string; to: string}[]) {
						tos[tos.length] = to;
					}
				}
			}

			// Analyze step 2: for files, check if it is a redirect
			if (isFileNS) {
				//// Query
				const response2 = await queryImageInfo(titles);
				if (response2['query']) {
					//// Normalize
					if (response2['query'].normalized) {
						for (const {from, to} of response2['query'].normalized as {from: string; to: string}[]) {
							titles = titles.map((element) => {
								return element === from ? to : element;
							});
						}
					}

					//// upload
					if (response2['query'].pages) {
						for (const page2 of response2['query'].pages) {
							const title = page2.title as string;

							if (page2.missing || page2.redirect) {
								continue;
							}

							if (page2.imagerepository && page2.imagerepository !== 'local') {
								await uploadFile(title, page2.imageinfo[0].url as string);
							}
						}
					}

					if (response2['query'].redirects) {
						for (const {to} of response2['query'].redirects as {from: string; to: string}[]) {
							tos[tos.length] = to;
						}
					}
				}
			}

			// Analyze step 3: import pages as redirect target
			//// Queue requests to import redirect targets
			if (tos.length) {
				await detectIfFileRedirect(uniqueArray(tos)); // Replace `[...new Set()]` to avoid polyfilling core-js
			}
		};
	}

	for (const promise of promises) {
		try {
			await promise();
		} catch {}
	}
};

export {type DetectIfFileRedirect, detectIfFileRedirect, type RefreshPage, refreshPage};
