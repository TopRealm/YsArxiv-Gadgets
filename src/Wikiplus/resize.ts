import {getBody} from 'ext.gadget.Util';

void getBody().then(($body: JQuery<HTMLBodyElement>): void => {
	$(window).on('resize', (): void => {
		const windowWidth = $(window).width();
		const $wikiplusInterbox = $body.find('.Wikiplus-InterBox');
		if ($wikiplusInterbox) {
			$wikiplusInterbox.css('max-width', `calc(${windowWidth}px - 2em)`);
		}
	});
});
