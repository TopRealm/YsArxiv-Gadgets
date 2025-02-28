/*
 * @coding: UTF-8
 * @Author: AwAjie
 * @Date: 2025-02-27 21:21:56
 */
const navigationItems = document.querySelectorAll('.button-flair');
const navigationItemsbg = document.querySelectorAll('.button-flair-bg');
for (const [index, item] of navigationItems.entries()) {
	item.addEventListener('mousemove', (event: Event) => {
		const {clientX, clientY} = event as MouseEvent;
		const rect = item.getBoundingClientRect();
		const iwidth = item.clientWidth;
		const offset = (iwidth * 1.5) / 2;

		const bgElement = navigationItemsbg[index] as HTMLElement;
		bgElement.style.width = `${iwidth * 1.5}px`;
		bgElement.style.height = `${iwidth * 1.5}px`;
		bgElement.style.transform = `translate(
            ${clientX - rect.left - offset}px,
            ${clientY - rect.top - offset}px
		)`;
		bgElement.classList.add('scale1');
	});
}
for (const [index, item] of navigationItems.entries()) {
	item.addEventListener('mouseleave', () => {
		(navigationItemsbg[index] as HTMLElement).classList.remove('scale1');
	});
}
