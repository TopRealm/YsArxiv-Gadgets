import * as OPTIONS from '../../options.json';
import React from 'ext.gadget.React';
import {portletId} from '../initGlobalMethods';

const generatePortletLink = (hash: string): JQuery | undefined => {
	if (!portletId) {
		return;
	}

	const portletLink: HTMLLIElement | null = mw.util.addPortletLink(portletId, '#', '汉/漢', `ca-noteTA-${hash}`);
	if (!portletLink) {
		return;
	}
	portletLink.classList.add('ca-noteTA');

	// The following classes are used here:
	// * see constant.ts
	// * for more information
	const $portletLink: JQuery = $(portletLink).addClass(OPTIONS.portletClass);
	$portletLink
		.find('a')
		.empty()
		.append(
			<div>
				<span className={[`${OPTIONS.portletClass}__label`, `${OPTIONS.portletClass}__label-hans`]}>
					{'汉'}
				</span>
				<span className={[`${OPTIONS.portletClass}__label`, `${OPTIONS.portletClass}__label-hant`]}>
					{'漢'}
				</span>
			</div>
		);

	return $portletLink;
};

export {generatePortletLink};
