import * as OPTIONS from '../options.json';
import React, {ReactElement} from 'ext.gadget.React';
import {elementWrap} from './util/react';
import {getMessage} from './i18n';

const footerNotice = (id: string, innerElement: HTMLElement | ReactElement) => {
	const tag = elementWrap(id, innerElement);
	document.querySelectorAll<HTMLElement>(OPTIONS.mountPointSelector)[0]?.prepend(tag);
};

const sanitize = (string: string) =>
	string
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/'/g, '&apos;')
		.replace(/"/g, '&quot;');

const inBlacklistFooterNotice = () => {
	footerNotice(
		'easy_archive_not_supported_notice',
		<span>
			{getMessage('Easy Archive not supported')}
			<br />
			{getMessage('Easy Archive not supported details')}
		</span>
	);
};

const notAllowededFooterNotice = () => {
	footerNotice('easy_archive_not_allowed_notice', <span>{getMessage('Easy Archive not allowed')}</span>);
};

const noArcLocFooterNotice = () => {
	footerNotice('easy_archive_no_arc_loc_notice', <span>{getMessage('No Archive Location')}</span>);
};

const arcLocNotAllowedFooterNotice = (arcLoc: string) => {
	footerNotice(
		'easy_archive_arc_loc_not_allowed_notice',
		<span>
			{getMessage('Archive Location not allowed').replace('$1', sanitize(arcLoc))}
			<br />
			{getMessage('Archive Location not allowed details')}
		</span>
	);
};

const enabledFooterNotice = (arcLoc: string) => {
	footerNotice(
		'easy_archive_supports_notice',
		<span>
			{getMessage('Easy Archive enabled')}
			{getMessage('(')}
			{getMessage('Archive location')}
			<a title={sanitize(arcLoc)} href={`/wiki/${sanitize(arcLoc)}`}>
				{sanitize(arcLoc)}
			</a>
			{getMessage(')')}
			{getMessage('.')}
		</span>
	);
};

export {
	arcLocNotAllowedFooterNotice,
	enabledFooterNotice,
	inBlacklistFooterNotice,
	noArcLocFooterNotice,
	notAllowededFooterNotice,
};
