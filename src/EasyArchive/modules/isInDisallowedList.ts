const ifArcLocNotAllowed = (arcLoc: string) => {
	const {wgPageName} = mw.config.get();
	const sourceTitle = new mw.Title(wgPageName);
	const arcLocTitle = new mw.Title(arcLoc);

	const arcLocNamespaceId = arcLocTitle.getNamespaceId();
	const arcLocPageName = arcLocTitle.getMain();
	const sourceNamespaceId = sourceTitle.getNamespaceId();
	const sourcePageName = sourceTitle.getMain();

	if (arcLocNamespaceId === 0) {
		return true;
	}

	if (arcLocNamespaceId === sourceNamespaceId && arcLocPageName === sourcePageName) {
		return true;
	}

	return false;
};

const isInBlacklist = () => {
	const {wgPageName} = mw.config.get();

	const blackListRegexArr = [
		/^File:.*$/,
		/^MediaWiki:.*$/,
		/^Module:.*$/,
		/^Category:.*$/,
		/^Template:.*$/,
		/^Special:.*$/,
		/^User:.*\/?.*\.js$/,
		/^User:.*\/?.*\.css$/,
		/^User:.*\/?.*\.json$/,
	];

	for (const element of blackListRegexArr) {
		if (element.test(wgPageName)) {
			return true;
		}
	}

	return false;
};

const isNotAllowed = () => {
	const {wgNamespaceNumber, wgRelevantUserName, wgUserName} = mw.config.get();

	if ((wgNamespaceNumber === 2 || wgNamespaceNumber === 3) && !(wgRelevantUserName === wgUserName)) {
		return true;
	}

	return false;
};
const isNotSupported = () => {
	const {wgIsMainPage, wgNamespaceNumber, wgCurRevisionId, wgRevisionId} = mw.config.get();

	if (wgNamespaceNumber < 0 || wgCurRevisionId - wgRevisionId !== 0) {
		return true;
	}

	if (wgNamespaceNumber === 0 || wgIsMainPage) {
		return true;
	}

	return false;
};

export {ifArcLocNotAllowed, isInBlacklist, isNotAllowed, isNotSupported};
