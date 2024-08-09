import {config, updateConfig} from './rrdConfig';
import DialogInner from '../components/DialogInner';
import React from 'ext.gadget.React';
import {getMessage} from './i18n';
import {isSpecialLog} from './isSpecialLog';
import {loadIds} from './loadIds';
import {submit} from './submit';

let $dialog: JQuery | undefined;

const showDialog = ($body: JQuery<HTMLBodyElement>): void => {
	const ids: string[] = loadIds($body);
	if (!ids.length) {
		void mw.notify(getMessage('errNoRevisionProvided'), {
			tag: 'RRD',
			type: 'error',
		});

		return;
	}

	const dialog: React.ReactElement = DialogInner();
	if ($dialog) {
		$dialog.html(dialog).dialog('open');

		for (const [id, value] of Object.entries(config.others)) {
			$body.find(`#${id}`).val(value as string);
		}
		for (const [id, value] of Object.entries(config.checkboxes)) {
			if (value === true) {
				$body.find(`#${id}`).prop('checked', true);
			}
		}

		return;
	}

	$dialog = $(dialog).dialog({
		title: getMessage('dialogTitle'),
		minWidth: 515,
		minHeight: 150,
		close: updateConfig,
		buttons: [
			{
				text: getMessage('dialogButtonSubmit'),
				click(): void {
					$(this).dialog('close');

					const {
						checkboxes: {rrdHideContent, rrdHideUsername, rrdHideSummary},
						others: {rrdReason},
					} = config;

					let {rrdOtherReasons} = config.others;
					if (rrdOtherReasons && rrdReason) {
						rrdOtherReasons = `，${rrdOtherReasons}`;
					}

					const toHide: string[] = [];
					if (rrdHideContent) {
						toHide[toHide.length] = isSpecialLog() ? getMessage('hideLog') : getMessage('hideContent');
					}
					if (rrdHideUsername) {
						toHide[toHide.length] = getMessage('hideUsername');
					}
					if (rrdHideSummary) {
						toHide[toHide.length] = getMessage('hideSummary');
					}

					if (!toHide.length) {
						void mw.notify(getMessage('errNoItemProvided'), {
							tag: 'RRD',
							type: 'error',
						});

						return;
					}

					let cont: boolean = true;
					if (!rrdReason && !rrdOtherReasons) {
						cont = confirm(getMessage('warnNoReasonProvided'));
					}

					if (cont) {
						void submit(ids, toHide.join('、'), rrdReason ?? '', rrdOtherReasons ?? '');
					}
				},
			},
			{
				text: getMessage('dialogButtonCancel'),
				click(): void {
					$(this).dialog('close');
				},
			},
		],
	});
};

export {showDialog};
