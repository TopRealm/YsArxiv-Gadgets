/*
 * @coding: UTF-8
 * @Author: AwAjie
 * @Date: 2025-03-01 01:01:55
 */
const animateNumber = function (start: number, end: number, duration: number, element: HTMLElement): void {
	let startTime: number | null = null;

	const update = (currentTime: DOMHighResTimeStamp): void => {
		startTime ||= currentTime;
		const timeElapsed = currentTime - startTime;
		const progress = Math.min(timeElapsed / duration, 1);
		const currentNumber = Math.floor(progress * (end - start) + start);

		element.textContent = currentNumber.toString();

		if (progress < 1) {
			requestAnimationFrame(update);
		}
	};

	requestAnimationFrame(update);
};

export default animateNumber;
