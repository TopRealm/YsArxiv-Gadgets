import './Twinkle.less';

(async function twinkleLoad() {
	await import('./modules/twinkle');
	await import('./modules/twinklearv');
	await import('./modules/twinklewarn');
	await import('./modules/twinkleblock');
	await import('./modules/friendlytalkback');
	await import('./modules/twinklespeedy');
	await import('./modules/twinklecopyvio');
	await import('./modules/twinklexfd');
	await import('./modules/twinkleimage');
	await import('./modules/twinkleprotect');
	await import('./modules/friendlytag');
	await import('./modules/twinklestub');
	await import('./modules/twinklediff');
	await import('./modules/twinkleunlink');
	await import('./modules/twinklefluff');
	await import('./modules/twinklebatchdelete');
	await import('./modules/twinklebatchundelete');
	await import('./modules/twinklebatchprotect');
	await import('./modules/twinkleclose');
	await import('./modules/twinkleconfig');
})();
