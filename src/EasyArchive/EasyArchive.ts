import {
	arcLocNotAllowedFooterNotice,
	enabledFooterNotice,
	inBlacklistFooterNotice,
	noArcLocFooterNotice,
	notAllowededFooterNotice,
} from './modules/footerNotice';
import {ifArcLocNotAllowed, isInBlacklist, isNotAllowed, isNotSupported} from './modules/isInDisallowedList';
import {addLinks} from './modules/addLinks';
import {getSettings} from './modules/getSettings';

(function easyArchive() {
	const notSupported = isNotSupported();
	if (notSupported) {
		return;
	}

	const inBlacklist = isInBlacklist();
	if (inBlacklist) {
		inBlacklistFooterNotice();
		return;
	}

	const notAllowed = isNotAllowed();
	if (notAllowed) {
		notAllowededFooterNotice();
		return;
	}

	const settings = getSettings();
	if (!settings) {
		noArcLocFooterNotice();
		return;
	}

	const {arcLoc} = settings;
	if (!arcLoc) {
		noArcLocFooterNotice();
		return;
	}

	const arcLocNotAllowed = ifArcLocNotAllowed(arcLoc);
	if (arcLocNotAllowed) {
		arcLocNotAllowedFooterNotice(arcLoc);
		return;
	}

	void addLinks(settings);
	enabledFooterNotice(arcLoc);
})();
