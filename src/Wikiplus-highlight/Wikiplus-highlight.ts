import {checkDependencies} from 'ext.gadget.Util';

(async function WikiplusHighlight() {
	const {wgAction, wgIsArticle} = mw.config.get();
	if (wgAction !== 'view' || !wgIsArticle) {
		return;
	}
	await checkDependencies('Wikiplus');

	const {'visualeditor-enable': isVeEnable} = mw.user.options.get() as Record<string, unknown>;

	/* see <https://github.com/Wikiplus/Wikiplus/issues/65> */
	if (isVeEnable) {
		await mw.loader.using('ext.visualEditor.core');
	}

	if (!('ontouchstart' in document)) {
		await import('./modules/highlight');
	}
})();
