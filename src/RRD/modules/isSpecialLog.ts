const isSpecialLog = () => {
	const {wgCanonicalSpecialPageName} = mw.config.get();
	return wgCanonicalSpecialPageName === 'Log';
};

export {isSpecialLog};
