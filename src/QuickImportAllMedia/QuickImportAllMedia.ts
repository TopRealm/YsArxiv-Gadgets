import {detectIfFileRedirect, refreshPage} from 'ext.gadget.QuickImport';
import {getAllImages} from './modules/core';

declare global {
	interface Window {
		detectIfFileRedirect: DetectIfFileRedirect;
		getAllImages: typeof getAllImages;
	}
}

window.detectIfFileRedirect = detectIfFileRedirect;
window.getAllImages = getAllImages;

(function quickImportAllMedia(): void {
	const {wgCanonicalSpecialPageName, wgCurRevisionId} = mw.config.get();
	if (
		!(
			wgCurRevisionId ||
			['Prefixindex', 'BrokenRedirects', 'Wantedfiles'].includes(wgCanonicalSpecialPageName || '')
		)
	) {
		return;
	}

	const portletId: 'p-cactions' | 'p-tb' = document.querySelector('#p-cactions') ? 'p-cactions' : 'p-tb';
	const element: HTMLLIElement | null = mw.util.addPortletLink(portletId, '#', '导入此页面所有文件', 't-import');
	if (!element) {
		return;
	}

	element.addEventListener('click', (): void => {
		void (async () => {
			const fileNames = await getAllImages();
			if (!fileNames.length) {
				return;
			}
			await detectIfFileRedirect(fileNames, true);
		})().then(() => {
			refreshPage();
		});
	});
})();
