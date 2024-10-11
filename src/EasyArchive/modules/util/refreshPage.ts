import {getMessage} from '../i18n';
import {toastify} from 'ext.gadget.Toastify';

const {wgScript} = mw.config.get();

const refresh = (targetPage?: string): void => {
	toastify(
		{
			text: getMessage('Refreshing'),
			duration: -1,
		},
		'success'
	);

	const {wgPageName} = mw.config.get();
	location.replace(
		mw.util.getUrl(wgScript, {
			title: targetPage ?? wgPageName,
		})
	);
};

export {refresh};
