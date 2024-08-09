import React, {ReactElement} from 'ext.gadget.React';
import {footerNotice, sectionIdSpan} from './EasyArchive.module.less';

const elementWrap = (id: string, innerElement: ReactElement) => {
	const {skin} = mw.config.get();

	if (skin === 'citizen') {
		return (
			<section className={['page-info__item', footerNotice]} id={id}>
				{innerElement}
			</section>
		);
	} else if (['vector', 'vector-2022', 'gongbi'].includes(skin) || document.querySelector('ul#footer-info')) {
		return (
			<li id={id} className={footerNotice}>
				{innerElement}
			</li>
		);
	}
	return (
		<div id={id} className={footerNotice}>
			{innerElement}
		</div>
	);
};

const onClickWrap = (textContent: string, className: string, onClick?: (event: Event) => void) => (
	<a
		class={['gadget-easy_archive__link', `gadget-easy_archive__link-${className}`]}
		onClick={onClick}
		textContent={textContent}
	/>
);

const pipeElement = () => <span class="mw-editsection-divider" textContent={'|'} />;

const sectionIdSpanElement = () => <span class={[sectionIdSpan]} />;

const spanWrap = (innerHTML: string) => <span innerHTML={innerHTML} />;

export {elementWrap, onClickWrap, pipeElement, sectionIdSpanElement, spanWrap};
